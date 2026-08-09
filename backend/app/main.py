from fastapi import FastAPI
from app.api.projects import router as projects_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    
    title="DevFolio API",
    description="Backend API for DevFolio",
    version="1.0.0",
)
app.include_router(projects_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Welcome to DevFolio API 🚀"
    }