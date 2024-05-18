"""Create users table
Revision ID: abc123
Revises: 
Create Date: YYYY-MM-DD HH:MM:SS.SSSSSS

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'abc123'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    # commands auto generated by Alembic - please adjust!
    op.create_table('users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('full_name', sa.String(), nullable=False),
        sa.Column('email', sa.String(), nullable=False),
        sa.Column('username', sa.String(), nullable=False),
        sa.Column('password', sa.String(), nullable=False),
        sa.Column('salt', sa.String(), nullable=False),
        sa.Column('organization_id', sa.Integer(), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('email'),
        sa.UniqueConstraint('username')
    )
    # end Alembic commands

def downgrade():
    # commands auto generated by Alembic - please adjust!
    op.drop_table('users')
    # end Alembic commands
