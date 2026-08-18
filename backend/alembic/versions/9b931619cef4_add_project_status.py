"""add project status

Revision ID: 9b931619cef4
Revises: 54e7ba37d069
Create Date: 2026-08-18 19:58:28.333271

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '9b931619cef4'
down_revision: Union[str, Sequence[str], None] = '54e7ba37d069'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column(
        "projects",
        sa.Column(
            "status",
            sa.String(length=30),
            nullable=False,
            server_default="active",
        ),
    )

def downgrade() -> None:
    op.drop_column("projects", "status")