from app.models.schemas import TriggerEvent
from app.services.plan_service import get_plan


RAIN_THRESHOLD = 55.0
AQI_THRESHOLD = 240
HEAT_THRESHOLD = 40.0
OUTAGE_HOURLY_RATE = 120.0


def evaluate_triggers(rainfall_mm: float, aqi: int, temperature_c: float, platform_outage: bool, outage_hours: int, plan_id: str) -> list[TriggerEvent]:
    plan = get_plan(plan_id)
    full_amount = min(plan.weekly_coverage, plan.max_weekly_payout)
    partial_amount = full_amount * 0.5

    rain_trigger = TriggerEvent(
        trigger_name="rain_flood",
        active=rainfall_mm > RAIN_THRESHOLD,
        payout_type="full" if rainfall_mm > RAIN_THRESHOLD else "none",
        amount=full_amount if rainfall_mm > RAIN_THRESHOLD else 0.0,
    )

    aqi_trigger = TriggerEvent(
        trigger_name="hazardous_aqi",
        active=aqi > AQI_THRESHOLD,
        payout_type="full" if aqi > AQI_THRESHOLD else "none",
        amount=full_amount if aqi > AQI_THRESHOLD else 0.0,
    )

    heat_trigger = TriggerEvent(
        trigger_name="heatwave",
        active=temperature_c >= HEAT_THRESHOLD,
        payout_type="partial" if temperature_c >= HEAT_THRESHOLD else "none",
        amount=partial_amount if temperature_c >= HEAT_THRESHOLD else 0.0,
    )

    outage_amount = outage_hours * OUTAGE_HOURLY_RATE
    outage_trigger = TriggerEvent(
        trigger_name="platform_outage",
        active=platform_outage,
        payout_type="hourly" if platform_outage else "none",
        amount=outage_amount if platform_outage else 0.0,
    )

    return [rain_trigger, aqi_trigger, heat_trigger, outage_trigger]
