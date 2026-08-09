from app.schemas.project import Project, ProjectCreate


projects: list[Project] = [
    Project(
        id=1,
        title="DevFolio",
        description="Personal portfolio website",
        stack=["React", "TypeScript", "Tailwind", "FastAPI"],
        github=None,
        demo=None,
        featured=True,
        image=None,
        year="2026",
    ),
    Project(
        id=2,
        title="Hotel Management",
        description="Hotel reservation system",
        stack=["Python", "FastAPI", "PostgreSQL"],
        github=None,
        demo=None,
        featured=False,
        image=None,
        year="2025",
    ),
]


def get_all_projects() -> list[Project]:
    return projects


def get_project_by_id(project_id: int) -> Project | None:
    for project in projects:
        if project.id == project_id:
            return project

    return None


def create_project(project_data: ProjectCreate) -> Project:
    next_id = max((project.id for project in projects), default=0) + 1

    new_project = Project(
        id=next_id,
        **project_data.model_dump(),
    )

    projects.append(new_project)

    return new_project

def update_project(
    project_id: int,
    project_data: ProjectCreate,
) -> Project | None:
    for index, project in enumerate(projects):
        if project.id == project_id:
            updated_project = Project(
                id=project_id,
                **project_data.model_dump(),
            )

            projects[index] = updated_project

            return updated_project

    return None


def delete_project(project_id: int) -> bool:
    for index, project in enumerate(projects):
        if project.id == project_id:
            projects.pop(index)
            return True

    return False