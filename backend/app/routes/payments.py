from fastapi import APIRouter, Query

from app.models.schemas import PaymentIntentRequest, PaymentIntentResponse, PaymentRecord
from app.services.payment_service import list_payments, process_premium_payment


router = APIRouter(tags=["payments"])


@router.post("/payment-gateway/pay-premium", response_model=PaymentIntentResponse)
def pay_premium(payload: PaymentIntentRequest):
    payment = process_premium_payment(
        worker_id=payload.worker_id,
        plan_id=payload.plan_id,
        amount=payload.amount,
        method=payload.method,
    )
    return PaymentIntentResponse(message="payment_success", payment=payment)


@router.get("/payment-gateway/payments", response_model=list[PaymentRecord])
def get_payments(worker_id: str | None = Query(default=None)):
    return list_payments(worker_id)
