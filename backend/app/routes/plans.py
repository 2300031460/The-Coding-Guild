from typing import Literal

from fastapi import APIRouter, Query

from app.models.schemas import PlanWithPremium
from app.services.plan_service import list_plans


router = APIRouter(tags=["plans"])


@router.get("/plans", response_model=list[PlanWithPremium])
def get_plans(zone: Literal["low", "medium", "high"] = Query(default="medium")):
    return list_plans(zone)
