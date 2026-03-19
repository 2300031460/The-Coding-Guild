from datetime import datetime
from typing import Literal
from uuid import uuid4

from app.models.schemas import PayoutRecord


_PAYOUTS: list[PayoutRecord] = []


def create_payout(
    worker_id: str,
    trigger_name: str,
    amount: float,
    status: Literal["simulated", "blocked_fraud"] = "simulated",
) -> PayoutRecord:
    payout = PayoutRecord(
        payout_id=str(uuid4()),
        worker_id=worker_id,
        trigger_name=trigger_name,
        amount=round(amount, 2),
        status=status,
        created_at=datetime.utcnow(),
    )
    _PAYOUTS.append(payout)
    return payout


def list_payouts(worker_id: str | None = None) -> list[PayoutRecord]:
    if worker_id is None:
        return list(reversed(_PAYOUTS))
    return [p for p in reversed(_PAYOUTS) if p.worker_id == worker_id]
