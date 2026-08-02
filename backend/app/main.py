from fastapi import FastAPI
from app.api.projects import router as projects_router

app = FastAPI(
    
    title="DevFolio API",
    description="Backend API for DevFolio",
    version="1.0.0",
)
app.include_router(projects_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to DevFolio API 🚀"
    }