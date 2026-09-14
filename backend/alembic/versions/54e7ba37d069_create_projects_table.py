"""create projects table

Revision ID: 54e7ba37d069
Revises:
Create Date: 2026-08-18 19:53:47.521953

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "54e7ba37d069"
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Create projects table."""
    op.create_table(
        "projects",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column("title", sa.String(length=150), nullable=False),
        sa.Column("description", sa.Text(), nullable=False),
        sa.Column("stack", sa.Text(), nullable=False),
        sa.Column("github", sa.String(length=500), nullable=True),
        sa.Column("demo", sa.String(length=500), nullable=True),
        sa.Column("featured", sa.Boolean(), nullable=False, server_default=sa.false()),
        sa.Column("image", sa.String(length=500), nullable=True),
        sa.Column("year", sa.String(length=4), nullable=False),
        sa.PrimaryKeyConstraint("id"),
    )


def downgrade() -> None:
    """Drop projects table."""
    op.drop_table("projects")