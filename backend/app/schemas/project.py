from pydantic import BaseModel


class ProjectBase(BaseModel):
    title: str
    description: str
    stack: list[str]
    github: str | None = None
    demo: str | None = None
    featured: bool = False
    image: str | None = None
    year: str
    status: str = "active"


class ProjectCreate(ProjectBase):
    pass


class Project(ProjectBase):
    id: int