from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.project import ProjectModel


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get("/stats")
def get_dashboard_stats(
    db: Session = Depends(get_db),
):
    total_projects = (
        db.query(func.count(ProjectModel.id))
        .scalar()
    )

    featured_projects = (
        db.query(func.count(ProjectModel.id))
        .filter(ProjectModel.featured.is_(True))
        .scalar()
    )

    active_projects = (
        db.query(func.count(ProjectModel.id))
        .filter(ProjectModel.status == "active")
        .scalar()
    )

    draft_projects = (
        db.query(func.count(ProjectModel.id))
        .filter(ProjectModel.status == "draft")
        .scalar()
    )

    archived_projects = (
        db.query(func.count(ProjectModel.id))
        .filter(ProjectModel.status == "archived")
        .scalar()
    )

    return {
        "total_projects": total_projects,
        "featured_projects": featured_projects,
        "active_projects": active_projects,
        "draft_projects": draft_projects,
        "archived_projects": archived_projects,
    }