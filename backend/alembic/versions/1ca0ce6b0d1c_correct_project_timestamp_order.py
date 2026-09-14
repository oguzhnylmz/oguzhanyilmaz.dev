"""correct project timestamp order

Revision ID: 1ca0ce6b0d1c
Revises: 7647f6220eeb
Create Date: 2026-09-14

"""

from typing import Sequence, Union

from alembic import op


# revision identifiers, used by Alembic.
revision: str = "1ca0ce6b0d1c"
down_revision: Union[str, Sequence[str], None] = "7647f6220eeb"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Correct project timestamp order."""

    op.execute(
        """
        WITH ordered_projects AS (
            SELECT
                id,
                ROW_NUMBER() OVER (ORDER BY id) AS position,
                COUNT(*) OVER () AS total
            FROM projects
        )
        UPDATE projects
        SET
            created_at = (
                CURRENT_TIMESTAMP
                - (
                    ordered_projects.total
                    - ordered_projects.position
                    + 1
                ) * INTERVAL '1 minute'
            ),
            updated_at = (
                CURRENT_TIMESTAMP
                - (
                    ordered_projects.total
                    - ordered_projects.position
                    + 1
                ) * INTERVAL '1 minute'
            )
        FROM ordered_projects
        WHERE projects.id = ordered_projects.id
        """
    )


def downgrade() -> None:
    """Restore timestamps to the current time."""

    op.execute(
        """
        UPDATE projects
        SET
            created_at = CURRENT_TIMESTAMP,
            updated_at = CURRENT_TIMESTAMP
        """
    )