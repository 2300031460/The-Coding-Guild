const PLAN_KEY = "sentinel_selected_plan";

export function getSelectedPlanId(defaultPlan = "guardian"): string {
  if (typeof window === "undefined") return defaultPlan;
  return localStorage.getItem(PLAN_KEY) ?? defaultPlan;
}

export function setSelectedPlanId(planId: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(PLAN_KEY, planId);
}
