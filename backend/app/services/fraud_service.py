from datetime import datetime, timedelta

from app.models.schemas import PayoutRecord


def detect_repeated_payouts(recent_payouts: list[PayoutRecord], worker_id: str) -> bool:
    window_start = datetime.utcnow() - timedelta(hours=24)
    last_day = [
        p for p in recent_payouts if p.worker_id == worker_id and p.created_at >= window_start
    ]
    # Demo fraud rule: too many payouts in a day is suspicious.
    return len(last_day) >= 4
