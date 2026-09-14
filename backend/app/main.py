import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded

from app.api.projects import router as projects_router
from app.api.auth import router as auth_router
from app.api import dashboard
from app.rate_limit import limiter


load_dotenv()


app = FastAPI(
    title="Oğuzhan Yılmaz API",
    description="Backend API for oguzhanyilmaz.dev",
    version="1.0.0",
    docs_url=None,
    redoc_url=None,
    openapi_url=None,
)


app.state.limiter = limiter
app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler,
)


app.include_router(auth_router)
app.include_router(projects_router)
app.include_router(dashboard.router)


cors_origins = os.getenv(
    "CORS_ORIGINS",
    "http://localhost:5173,http://127.0.0.1:5173",
).split(",")


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        origin.strip()
        for origin in cors_origins
        if origin.strip()
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)


@app.get("/")
def root():
    return {
        "message": "Welcome to oguzhanyilmaz.dev API 🚀"
    }