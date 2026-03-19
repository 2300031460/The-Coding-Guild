from fastapi import APIRouter, HTTPException

from app.models.schemas import LoginRequest, MessageResponse, RegisterRequest
from app.services.auth_service import authenticate, issue_token, register_worker


router = APIRouter(tags=["auth"])


@router.post("/register", response_model=MessageResponse)
def register(payload: RegisterRequest):
    worker = register_worker(
        name=payload.name,
        email=payload.email,
        password=payload.password,
        city=payload.city,
        zone=payload.zone,
    )
    return MessageResponse(message="registered", worker_id=worker.worker_id)


@router.post("/login", response_model=MessageResponse)
def login(payload: LoginRequest):
    worker = authenticate(payload.email, payload.password)
    if worker is None:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = issue_token(worker)
    return MessageResponse(message="login_success", worker_id=worker.worker_id, token=token)
