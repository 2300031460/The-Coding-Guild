export type Plan = {
  id: string;
  name: string;
  weekly_coverage: number;
  base_weekly_premium: number;
  max_weekly_payout: number;
  adjusted_premium: number;
};

export type RiskSnapshot = {
  worker_id: string;
  rainfall_mm: number;
  aqi: number;
  temperature_c: number;
  platform_outage: boolean;
  outage_hours: number;
  disruption_score: number;
  risk_level: "LOW" | "MEDIUM" | "HIGH";
  timestamp: string;
};

export type TriggerEvent = {
  trigger_name: string;
  active: boolean;
  payout_type: "none" | "partial" | "full" | "hourly";
  amount: number;
};

export type PayoutRecord = {
  payout_id: string;
  worker_id: string;
  trigger_name: string;
  amount: number;
  status: "simulated" | "blocked_fraud";
  created_at: string;
};

export type TriggerEvaluateResponse = {
  risk_snapshot: RiskSnapshot;
  triggers: TriggerEvent[];
  fraud_flag: boolean;
  payout_records: PayoutRecord[];
};

export type PaymentMethod = "upi" | "card" | "netbanking";

export type PaymentRecord = {
  payment_id: string;
  worker_id: string;
  plan_id: string;
  amount: number;
  method: PaymentMethod;
  status: "success" | "failed";
  created_at: string;
};

export type PaymentIntentResponse = {
  message: string;
  payment: PaymentRecord;
};
