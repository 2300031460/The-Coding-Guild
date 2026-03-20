import {
  PaymentIntentResponse,
  PaymentMethod,
  PaymentRecord,
  Plan,
  PayoutRecord,
  RiskSnapshot,
  TriggerEvaluateResponse,
} from "@/types";

const API_BASE_URL =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env
    ?.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Request failed: ${response.status}${text ? ` - ${text.slice(0, 120)}` : ""}`);
  }

  return response.json() as Promise<T>;
}

export function getPlans(zone: "low" | "medium" | "high" = "medium") {
  return request<Plan[]>(`/plans?zone=${zone}`);
}

export function getRiskData(workerId = "worker-001") {
  return request<RiskSnapshot>(`/risk-data?worker_id=${workerId}`);
}

export function evaluateTriggers(workerId = "worker-001", planId = "guardian", zone: "low" | "medium" | "high" = "medium") {
  return request<TriggerEvaluateResponse>("/trigger-evaluate", {
    method: "POST",
    body: JSON.stringify({ worker_id: workerId, plan_id: planId, zone }),
  });
}

export function getPayouts(workerId = "worker-001") {
  return request<PayoutRecord[]>(`/payouts?worker_id=${workerId}`);
}

export function payPremium(planId: string, amount: number, method: PaymentMethod, workerId = "worker-001") {
  return request<PaymentIntentResponse>("/payment-gateway/pay-premium", {
    method: "POST",
    body: JSON.stringify({ worker_id: workerId, plan_id: planId, amount, method }),
  });
}

export function getPayments(workerId = "worker-001") {
  return request<PaymentRecord[]>(`/payment-gateway/payments?worker_id=${workerId}`);
}
