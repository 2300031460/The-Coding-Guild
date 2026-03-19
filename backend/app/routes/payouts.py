from fastapi import APIRouter, Query

from app.models.schemas import PayoutRecord
from app.services.payout_service import list_payouts


router = APIRouter(tags=["payouts"])


@router.get("/payouts", response_model=list[PayoutRecord])
def get_payouts(worker_id: str | None = Query(default=None)):
    return list_payouts(worker_id)
