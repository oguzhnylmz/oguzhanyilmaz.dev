import os

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from dotenv import load_dotenv

from app.auth.security import (
    create_access_token,
    verify_password,
)


load_dotenv()

router = APIRouter(
    prefix="/auth",
    tags=["Auth"],
)


class LoginRequest(BaseModel):
    username: str
    password: str


@router.post("/login")
def login(credentials: LoginRequest):
    admin_username = os.getenv("ADMIN_USERNAME")
    admin_password_hash = os.getenv("ADMIN_PASSWORD_HASH")

    if not admin_username or not admin_password_hash:
        raise RuntimeError(
            "Admin credentials are not configured."
        )

    if credentials.username != admin_username:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
        )

    if not verify_password(
        credentials.password,
        admin_password_hash,
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
        )

    access_token = create_access_token(
        credentials.username
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
    }