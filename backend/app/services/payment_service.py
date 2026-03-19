from datetime import datetime
from uuid import uuid4

from app.models.schemas import PaymentRecord


_PAYMENTS: list[PaymentRecord] = []


def process_premium_payment(worker_id: str, plan_id: str, amount: float, method: str) -> PaymentRecord:
    # Demo gateway behavior: all payments are marked successful for hackathon flow.
    payment = PaymentRecord(
        payment_id=f"pay_{str(uuid4())[:10]}",
        worker_id=worker_id,
        plan_id=plan_id,
        amount=round(amount, 2),
        method=method,
        status="success",
        created_at=datetime.utcnow(),
    )
    _PAYMENTS.append(payment)
    return payment


def list_payments(worker_id: str | None = None) -> list[PaymentRecord]:
    if worker_id is None:
        return list(reversed(_PAYMENTS))
    return [p for p in reversed(_PAYMENTS) if p.worker_id == worker_id]
