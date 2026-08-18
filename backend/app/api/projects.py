from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.project import Project, ProjectCreate
from app.services.project_service import (
    get_all_projects,
    get_project_by_id,
    create_project,
    update_project,
    delete_project,
)

router = APIRouter()


@router.get("/projects", response_model=list[Project])
def get_projects(db: Session = Depends(get_db)):
    return get_all_projects(db)


@router.get("/projects/{project_id}", response_model=Project)
def get_project(
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


@router.post(
    "/projects",
    response_model=Project,
    status_code=201,
)
def create_new_project(
    project: ProjectCreate,
    db: Session = Depends(get_db),
):
    return create_project(db, project)


@router.put(
    "/projects/{project_id}",
    response_model=Project,
)
def update_existing_project(
    project_id: int,
    project: ProjectCreate,
    db: Session = Depends(get_db),
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


@router.delete("/projects/{project_id}")
def delete_existing_project(
    project_id: int,
    db: Session = Depends(get_db),
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