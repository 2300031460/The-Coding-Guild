from datetime import datetime
from typing import Literal, Optional

from pydantic import BaseModel, Field


class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str
    city: str = "Bengaluru"
    zone: Literal["low", "medium", "high"] = "medium"


class LoginRequest(BaseModel):
    email: str
    password: str


class Worker(BaseModel):
    worker_id: str
    name: str
    email: str
    city: str
    zone: Literal["low", "medium", "high"]


class Plan(BaseModel):
    id: str
    name: str
    weekly_coverage: float
    base_weekly_premium: float
    max_weekly_payout: float


class PlanWithPremium(Plan):
    adjusted_premium: float


class RiskSnapshot(BaseModel):
    worker_id: str
    rainfall_mm: float
    aqi: int
    temperature_c: float
    platform_outage: bool
    outage_hours: int
    disruption_score: float = Field(ge=0, le=1)
    risk_level: Literal["LOW", "MEDIUM", "HIGH"]
    timestamp: datetime


class TriggerEvaluateRequest(BaseModel):
    worker_id: str = "worker-001"
    plan_id: str = "guardian"
    zone: Literal["low", "medium", "high"] = "medium"


class TriggerEvent(BaseModel):
    trigger_name: str
    active: bool
    payout_type: Literal["none", "partial", "full", "hourly"]
    amount: float


class PayoutRecord(BaseModel):
    payout_id: str
    worker_id: str
    trigger_name: str
    amount: float
    status: Literal["simulated", "blocked_fraud"]
    created_at: datetime


class TriggerEvaluateResponse(BaseModel):
    risk_snapshot: RiskSnapshot
    triggers: list[TriggerEvent]
    fraud_flag: bool
    payout_records: list[PayoutRecord]


class MessageResponse(BaseModel):
    message: str
    worker_id: Optional[str] = None
    token: Optional[str] = None


class PaymentIntentRequest(BaseModel):
    worker_id: str = "worker-001"
    plan_id: str
    amount: float
    method: Literal["upi", "card", "netbanking"]


class PaymentRecord(BaseModel):
    payment_id: str
    worker_id: str
    plan_id: str
    amount: float
    method: Literal["upi", "card", "netbanking"]
    status: Literal["success", "failed"]
    created_at: datetime


class PaymentIntentResponse(BaseModel):
    message: str
    payment: PaymentRecord
