from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session

from app.auth.security import get_current_admin
from app.database import get_db
from app.rate_limit import limiter
from app.schemas.project import Project, ProjectCreate
from app.services.project_service import (
    get_active_projects,
    get_all_projects,
    get_project_by_id,
    get_project_by_slug,
    create_project,
    update_project,
    delete_project,
)


router = APIRouter()


# =========================
# PUBLIC
# =========================

@router.get(
    "/projects",
    response_model=list[Project],
)
@limiter.limit("60/minute")
def get_projects(
    request: Request,
    db: Session = Depends(get_db),
):
    return get_active_projects(db)


@router.get(
    "/projects/slug/{slug}",
    response_model=Project,
)
@limiter.limit("60/minute")
def get_project_by_slug_endpoint(
    request: Request,
    slug: str,
    db: Session = Depends(get_db),
):
    project = get_project_by_slug(db, slug)

    if project is None:
        raise HTTPException(
            status_code=404,
            detail="Project not found",
        )

    return project


@router.get(
    "/projects/{project_id}",
    response_model=Project,
)
@limiter.limit("60/minute")
def get_project(
    request: Request,
    project_id: int,
    db: Session = Depends(get_db),
):
    project = get_project_by_id(db, project_id)

    if project is None:
        raise HTTPException(
            status_code=404,
            detail="Project not found",
        )

    return project


# =========================
# ADMIN
# =========================

@router.get(
    "/admin/projects",
    response_model=list[Project],
)
@limiter.limit("30/minute")
def get_admin_projects(
    request: Request,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin),
):
    return get_all_projects(db)


@router.post(
    "/projects",
    response_model=Project,
    status_code=201,
)
@limiter.limit("30/minute")
def create_new_project(
    request: Request,
    project: ProjectCreate,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin),
):
    return create_project(db, project)


@router.put(
    "/projects/{project_id}",
    response_model=Project,
)
@limiter.limit("30/minute")
def update_existing_project(
    request: Request,
    project_id: int,
    project: ProjectCreate,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin),
):
    updated_project = update_project(
        db,
        project_id,
        project,
    )

    if updated_project is None:
        raise HTTPException(
            status_code=404,
            detail="Project not found",
        )

    return updated_project


@router.delete(
    "/projects/{project_id}",
)
@limiter.limit("30/minute")
def delete_existing_project(
    request: Request,
    project_id: int,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin),
):
    deleted = delete_project(db, project_id)

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Project not found",
        )

    return {
        "message": "Project deleted successfully"
    }