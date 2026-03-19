from datetime import datetime, timedelta
from uuid import uuid4

import jwt

from app.models.schemas import Worker
from app.utils.config import settings


_WORKERS: dict[str, Worker] = {
    "worker-001": Worker(
        worker_id="worker-001",
        name="Ravi Kumar",
        email="ravi@example.com",
        city="Bengaluru",
        zone="medium",
    )
}
_CREDENTIALS: dict[str, str] = {"ravi@example.com": "demo123"}
_EMAIL_TO_WORKER: dict[str, str] = {"ravi@example.com": "worker-001"}


def register_worker(name: str, email: str, password: str, city: str, zone: str) -> Worker:
    worker_id = f"worker-{str(uuid4())[:8]}"
    worker = Worker(worker_id=worker_id, name=name, email=email, city=city, zone=zone)
    _WORKERS[worker_id] = worker
    _CREDENTIALS[email] = password
    _EMAIL_TO_WORKER[email] = worker_id
    return worker


def authenticate(email: str, password: str) -> Worker | None:
    if _CREDENTIALS.get(email) != password:
        return None
    worker_id = _EMAIL_TO_WORKER.get(email)
    if not worker_id:
        return None
    return _WORKERS.get(worker_id)


def issue_token(worker: Worker) -> str:
    payload = {
        "sub": worker.worker_id,
        "email": worker.email,
        "exp": datetime.utcnow() + timedelta(minutes=settings.token_exp_minutes),
    }
    return jwt.encode(payload, settings.jwt_secret, algorithm=settings.jwt_algorithm)


def get_worker(worker_id: str) -> Worker | None:
    return _WORKERS.get(worker_id)
