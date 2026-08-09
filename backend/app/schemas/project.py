from pydantic import BaseModel


class Project(BaseModel):
    id: int
    title: str
    description: str
    stack: list[str]
    github: str | None = None
    demo: str | None = None
    featured: bool = False
    image: str | None = None
    year: str