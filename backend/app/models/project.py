from sqlalchemy import Boolean, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class ProjectModel(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        autoincrement=True,
    )

    title: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
    )

    description: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )

    stack: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )

    github: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    demo: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    featured: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False,
    )

    image: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    year: Mapped[str] = mapped_column(
        String(4),
        nullable=False,
    )

    status: Mapped[str] = mapped_column(
    String(30),
    nullable=False,
    default="active",
    server_default="active",
    )