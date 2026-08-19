from fastapi import FastAPI
from app.api.projects import router as projects_router
from fastapi.middleware.cors import CORSMiddleware
from app.api.auth import router as auth_router
from app.api import dashboard

app = FastAPI(
    
    title="DevFolio API",
    description="Backend API for DevFolio",
    version="1.0.0",
)
app.include_router(auth_router)
app.include_router(projects_router)
app.include_router(dashboard.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)

@app.get("/")
def root():
    return {
        "message": "Welcome to DevFolio API 🚀"
    }