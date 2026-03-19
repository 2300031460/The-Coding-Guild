from pydantic import BaseModel


class Settings(BaseModel):
    app_name: str = "Sentinel API"
    jwt_secret: str = "sentinel-demo-secret"
    jwt_algorithm: str = "HS256"
    token_exp_minutes: int = 60 * 24


settings = Settings()
