import re
import unicodedata

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.project import ProjectModel
from app.schemas.project import Project, ProjectCreate


def generate_slug(title: str) -> str:
    normalized = unicodedata.normalize(
        "NFKD",
        title,
    )

    ascii_title = normalized.encode(
        "ascii",
        "ignore",
    ).decode("ascii")

    slug = re.sub(
        r"[^a-zA-Z0-9]+",
        "-",
        ascii_title,
    )

    return slug.strip("-").lower()


def project_to_schema(project: ProjectModel) -> Project:
    return Project(
        id=project.id,
        title=project.title,
        slug=project.slug,
        description=project.description,
        stack=project.stack.split(","),
        github=project.github,
        demo=project.demo,
        featured=project.featured,
        image=project.image,
        year=project.year,
        status=project.status,
        created_at=project.created_at,
        updated_at=project.updated_at,
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


def get_active_projects(db: Session) -> list[Project]:
    result = db.execute(
        select(ProjectModel)
        .where(ProjectModel.status == "active")
        .order_by(ProjectModel.id)
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


def get_project_by_slug(
    db: Session,
    slug: str,
) -> Project | None:
    result = db.execute(
        select(ProjectModel).where(
            ProjectModel.slug == slug
        )
    )

    project = result.scalar_one_or_none()

    if project is None:
        return None

    return project_to_schema(project)


def create_project(
    db: Session,
    project_data: ProjectCreate,
) -> Project:
    slug = generate_slug(project_data.title)

    existing_slug = db.execute(
        select(ProjectModel).where(
            ProjectModel.slug == slug
        )
    ).scalar_one_or_none()

    if existing_slug is not None:
        suffix = 2

        while True:
            candidate_slug = f"{slug}-{suffix}"

            existing_slug = db.execute(
                select(ProjectModel).where(
                    ProjectModel.slug == candidate_slug
                )
            ).scalar_one_or_none()

            if existing_slug is None:
                slug = candidate_slug
                break

            suffix += 1

    new_project = ProjectModel(
        title=project_data.title,
        slug=slug,
        description=project_data.description,
        stack=",".join(project_data.stack),
        github=str(project_data.github)
        if project_data.github
        else None,
        demo=str(project_data.demo)
        if project_data.demo
        else None,
        featured=project_data.featured,
        image=str(project_data.image)
        if project_data.image
        else None,
        year=project_data.year,
        status=project_data.status,
    )

    try:
        db.add(new_project)
        db.commit()
        db.refresh(new_project)

        return project_to_schema(new_project)

    except Exception:
        db.rollback()
        raise


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
    project.github = (
        str(project_data.github)
        if project_data.github
        else None
    )
    project.demo = (
        str(project_data.demo)
        if project_data.demo
        else None
    )
    project.featured = project_data.featured
    project.image = (
        str(project_data.image)
        if project_data.image
        else None
    )
    project.year = project_data.year
    project.status = project_data.status

    try:
        db.commit()
        db.refresh(project)

        return project_to_schema(project)

    except Exception:
        db.rollback()
        raise


def delete_project(
    db: Session,
    project_id: int,
) -> bool:
    project = db.get(ProjectModel, project_id)

    if project is None:
        return False

    try:
        db.delete(project)
        db.commit()

        return True

    except Exception:
        db.rollback()
        raise