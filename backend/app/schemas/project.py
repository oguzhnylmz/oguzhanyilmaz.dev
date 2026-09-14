from datetime import datetime
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field, HttpUrl, field_validator


class ProjectBase(BaseModel):
    title: str = Field(
        min_length=1,
        max_length=150,
    )

    description: str = Field(
        min_length=1,
    )

    stack: list[str] = Field(
        min_length=1,
    )

    github: HttpUrl | None = None

    demo: HttpUrl | None = None

    featured: bool = False

    image: HttpUrl | None = None

    year: str = Field(
        min_length=4,
        max_length=4,
    )

    status: Literal[
        "active",
        "draft",
        "archived",
    ] = "active"

    @field_validator("title", "description")
    @classmethod
    def validate_text(cls, value: str) -> str:
        value = value.strip()

        if not value:
            raise ValueError("Field cannot be empty.")

        return value

    @field_validator("stack")
    @classmethod
    def validate_stack(cls, value: list[str]) -> list[str]:
        cleaned_stack = [
            item.strip()
            for item in value
            if item.strip()
        ]

        if not cleaned_stack:
            raise ValueError(
                "At least one technology is required."
            )

        return cleaned_stack

    @field_validator("year")
    @classmethod
    def validate_year(cls, value: str) -> str:
        value = value.strip()

        if not value.isdigit():
            raise ValueError(
                "Year must contain only numbers."
            )

        return value


class ProjectCreate(ProjectBase):
    pass


class Project(ProjectBase):
    id: int
    slug: str
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True,
    )