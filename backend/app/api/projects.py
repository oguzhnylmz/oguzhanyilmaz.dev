from fastapi import APIRouter
from app.services.project_service import get_all_projects

router = APIRouter()


@router.get("/projects")
def get_projects():
    return get_all_projects()