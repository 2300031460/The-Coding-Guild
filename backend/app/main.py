from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.auth import router as auth_router
from app.routes.payments import router as payments_router
from app.routes.payouts import router as payouts_router
from app.routes.plans import router as plans_router
from app.routes.risk import router as risk_router
from app.routes.triggers import router as triggers_router
from app.utils.config import settings


app = FastAPI(title=settings.app_name, version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def health():
    return {"message": "Sentinel API is running"}


app.include_router(auth_router)
app.include_router(plans_router)
app.include_router(risk_router)
app.include_router(triggers_router)
app.include_router(payouts_router)
app.include_router(payments_router)
