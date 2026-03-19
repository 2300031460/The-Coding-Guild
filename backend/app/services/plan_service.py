from app.models.schemas import Plan, PlanWithPremium


PLANS: list[Plan] = [
    Plan(id="wanderer", name="Wanderer", weekly_coverage=800.0, base_weekly_premium=23.0, max_weekly_payout=1000.0),
    Plan(id="guardian", name="Guardian", weekly_coverage=1600.0, base_weekly_premium=47.0, max_weekly_payout=2200.0),
    Plan(id="vanguard", name="Vanguard", weekly_coverage=2600.0, base_weekly_premium=79.0, max_weekly_payout=3600.0),
    Plan(id="sentinel", name="Sentinel", weekly_coverage=4000.0, base_weekly_premium=119.0, max_weekly_payout=5200.0),
]

ZONE_MULTIPLIER = {
    "low": 0.85,
    "medium": 1.0,
    "high": 1.25,
}


def list_plans(zone: str) -> list[PlanWithPremium]:
    multiplier = ZONE_MULTIPLIER.get(zone, 1.0)
    return [
        PlanWithPremium(
            **plan.model_dump(),
            adjusted_premium=round(plan.base_weekly_premium * multiplier, 2),
        )
        for plan in PLANS
    ]


def get_plan(plan_id: str) -> Plan:
    for plan in PLANS:
        if plan.id == plan_id:
            return plan
    return PLANS[1]
