from fastapi import APIRouter, Query

from app.models.schemas import RiskSnapshot
from app.services.risk_service import predict_risk
from app.services.simulation_service import simulate_risk_snapshot


router = APIRouter(tags=["risk"])


@router.get("/risk-data", response_model=RiskSnapshot)
def get_risk_data(worker_id: str = Query(default="worker-001")):
    snapshot = simulate_risk_snapshot(worker_id)
    return predict_risk(snapshot)
