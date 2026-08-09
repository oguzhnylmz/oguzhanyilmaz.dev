from app.schemas.project import Project


def get_all_projects() -> list[Project]:
    return [
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