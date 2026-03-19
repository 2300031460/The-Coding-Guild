from app.models.schemas import RiskSnapshot


def _normalize(value: float, min_val: float, max_val: float) -> float:
    if value <= min_val:
        return 0.0
    if value >= max_val:
        return 1.0
    return (value - min_val) / (max_val - min_val)


def predict_risk(snapshot: RiskSnapshot) -> RiskSnapshot:
    rain_score = _normalize(snapshot.rainfall_mm, 10, 80)
    aqi_score = _normalize(snapshot.aqi, 90, 320)
    heat_score = _normalize(snapshot.temperature_c, 30, 44)
    outage_score = 1.0 if snapshot.platform_outage else 0.0

    score = 0.35 * rain_score + 0.3 * aqi_score + 0.2 * heat_score + 0.15 * outage_score
    score = round(min(max(score, 0.0), 1.0), 3)

    if score >= 0.7:
        level = "HIGH"
    elif score >= 0.4:
        level = "MEDIUM"
    else:
        level = "LOW"

    return snapshot.model_copy(update={"disruption_score": score, "risk_level": level})
