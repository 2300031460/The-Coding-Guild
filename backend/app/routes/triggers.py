from fastapi import APIRouter

from app.models.schemas import TriggerEvaluateRequest, TriggerEvaluateResponse
from app.services.fraud_service import detect_repeated_payouts
from app.services.payout_service import create_payout, list_payouts
from app.services.risk_service import predict_risk
from app.services.simulation_service import simulate_risk_snapshot
from app.services.trigger_service import evaluate_triggers


router = APIRouter(tags=["triggers"])


@router.post("/trigger-evaluate", response_model=TriggerEvaluateResponse)
def trigger_evaluate(payload: TriggerEvaluateRequest):
    snapshot = predict_risk(simulate_risk_snapshot(payload.worker_id))
    triggers = evaluate_triggers(
        rainfall_mm=snapshot.rainfall_mm,
        aqi=snapshot.aqi,
        temperature_c=snapshot.temperature_c,
        platform_outage=snapshot.platform_outage,
        outage_hours=snapshot.outage_hours,
        plan_id=payload.plan_id,
    )

    payouts_before = list_payouts(payload.worker_id)
    fraud_flag = detect_repeated_payouts(payouts_before, payload.worker_id)

    records = []
    for event in triggers:
        if event.active and event.amount > 0:
            status = "blocked_fraud" if fraud_flag else "simulated"
            records.append(create_payout(payload.worker_id, event.trigger_name, event.amount, status))

    return TriggerEvaluateResponse(
        risk_snapshot=snapshot,
        triggers=triggers,
        fraud_flag=fraud_flag,
        payout_records=records,
    )
