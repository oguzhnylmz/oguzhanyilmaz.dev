from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.project import ProjectModel
from app.schemas.project import Project, ProjectCreate


def project_to_schema(project: ProjectModel) -> Project:
    return Project(
        id=project.id,
        title=project.title,
        description=project.description,
        stack=project.stack.split(","),
        github=project.github,
        demo=project.demo,
        featured=project.featured,
        image=project.image,
        year=project.year,
        status=project.status,
    )


def get_all_projects(db: Session) -> list[Project]:
    result = db.execute(
        select(ProjectModel).order_by(ProjectModel.id)
    )

    projects = result.scalars().all()

    return [
        project_to_schema(project)
        for project in projects
    ]


def get_project_by_id(
    db: Session,
    project_id: int,
) -> Project | None:
    project = db.get(ProjectModel, project_id)

    if project is None:
        return None

    return project_to_schema(project)


def create_project(
    db: Session,
    project_data: ProjectCreate,
) -> Project:
    new_project = ProjectModel(
        title=project_data.title,
        description=project_data.description,
        stack=",".join(project_data.stack),
        github=project_data.github,
        demo=project_data.demo,
        featured=project_data.featured,
        image=project_data.image,
        year=project_data.year,
        status=project_data.status,
    )

    db.add(new_project)
    db.commit()
    db.refresh(new_project)

    return project_to_schema(new_project)


def update_project(
    db: Session,
    project_id: int,
    project_data: ProjectCreate,
) -> Project | None:
    project = db.get(ProjectModel, project_id)

    if project is None:
        return None

    project.title = project_data.title
    project.description = project_data.description
    project.stack = ",".join(project_data.stack)
    project.github = project_data.github
    project.demo = project_data.demo
    project.featured = project_data.featured
    project.image = project_data.image
    project.year = project_data.year
    project.status = project_data.status

    db.commit()
    db.refresh(project)

    return project_to_schema(project)


def delete_project(
    db: Session,
    project_id: int,
) -> bool:
    project = db.get(ProjectModel, project_id)

    if project is None:
        return False

    db.delete(project)
    db.commit()

    return True