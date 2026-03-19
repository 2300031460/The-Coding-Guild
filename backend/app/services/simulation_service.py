from datetime import datetime
import random

from app.models.schemas import RiskSnapshot


_rng = random.Random()


def _hour_factor() -> float:
    hour = datetime.utcnow().hour
    if 6 <= hour <= 10:
        return 1.1
    if 11 <= hour <= 16:
        return 1.3
    if 17 <= hour <= 22:
        return 1.0
    return 0.8


def simulate_weather() -> dict:
    factor = _hour_factor()
    return {
        "rainfall_mm": round(_rng.uniform(0, 90) * factor, 2),
        "temperature_c": round(_rng.uniform(22, 44), 1),
    }


def simulate_aqi() -> int:
    return int(_rng.uniform(70, 360))


def simulate_platform_activity() -> dict:
    outage = _rng.random() > 0.75
    outage_hours = _rng.randint(1, 4) if outage else 0
    return {
        "platform_outage": outage,
        "outage_hours": outage_hours,
    }


def simulate_risk_snapshot(worker_id: str) -> RiskSnapshot:
    weather = simulate_weather()
    aqi = simulate_aqi()
    platform = simulate_platform_activity()

    return RiskSnapshot(
        worker_id=worker_id,
        rainfall_mm=weather["rainfall_mm"],
        aqi=aqi,
        temperature_c=weather["temperature_c"],
        platform_outage=platform["platform_outage"],
        outage_hours=platform["outage_hours"],
        disruption_score=0.0,
        risk_level="LOW",
        timestamp=datetime.utcnow(),
    )
