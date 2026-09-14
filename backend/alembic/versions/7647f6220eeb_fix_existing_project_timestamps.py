"""fix existing project timestamps

Revision ID: 7647f6220eeb
Revises: ec86f3182200
Create Date: 2026-09-14

"""

from typing import Sequence, Union

from alembic import op


# revision identifiers, used by Alembic.
revision: str = "7647f6220eeb"
down_revision: Union[str, Sequence[str], None] = "ec86f3182200"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Fix timestamps for existing projects."""

    op.execute(
        """
        WITH ordered_projects AS (
            SELECT
                id,
                ROW_NUMBER() OVER (ORDER BY id) AS position
            FROM projects
        )
        UPDATE projects
        SET
            created_at = (
                CURRENT_TIMESTAMP
                - (
                    ordered_projects.position
                    * INTERVAL '1 minute'
                )
            ),
            updated_at = (
                CURRENT_TIMESTAMP
                - (
                    ordered_projects.position
                    * INTERVAL '1 minute'
                )
            )
        FROM ordered_projects
        WHERE projects.id = ordered_projects.id
        """
    )


def downgrade() -> None:
    """Restore all timestamps to the current time."""

    op.execute(
        """
        UPDATE projects
        SET
            created_at = CURRENT_TIMESTAMP,
            updated_at = CURRENT_TIMESTAMP
        """
    )