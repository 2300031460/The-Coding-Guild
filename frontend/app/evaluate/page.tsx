"use client";

import { useEffect, useState } from "react";

import TriggerStatus from "@/components/TriggerStatus";
import { evaluateTriggers, getPayouts, getPlans } from "@/lib/api";
import { getSelectedPlanId } from "@/lib/planStorage";
import { PayoutRecord, Plan, TriggerEvent } from "@/types";

export default function EvaluatePage() {
  const [selectedPlanId, setSelectedPlanId] = useState("guardian");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [triggers, setTriggers] = useState<TriggerEvent[]>([]);
  const [newPayouts, setNewPayouts] = useState<PayoutRecord[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSelectedPlanId(getSelectedPlanId("guardian"));
    getPlans("medium")
      .then(setPlans)
      .catch((error) => console.error("Failed to fetch plans:", error));
  }, []);

  async function runEvaluation() {
    setLoading(true);
    try {
      const result = await evaluateTriggers("worker-001", selectedPlanId, "medium");
      setTriggers(result.triggers);
      setNewPayouts(result.payout_records);
      await getPayouts();
    } finally {
      setLoading(false);
    }
  }

  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId);

  return (
    <div className="space-y-4">
      <section className="surface-card bg-gradient-to-r from-[#f5fbff] to-[#eefaf4] p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#1a4b68]">Trigger Evaluation Metrics</h2>
            <p className="mt-1 text-sm text-[#6388a1]">
              Running for plan: <span className="font-semibold text-[#1a4b68]">{selectedPlan?.name ?? "Guardian"}</span>
            </p>
          </div>
          <button type="button" onClick={runEvaluation} disabled={loading} className="btn-primary disabled:opacity-60">
            {loading ? "Running..." : "Run Evaluation"}
          </button>
        </div>
      </section>

      <TriggerStatus triggers={triggers} />

      <section className="surface-card p-4">
        <h3 className="section-title">New Payouts From This Run</h3>
        <div className="mt-3 space-y-2">
          {newPayouts.length === 0 ? <p className="text-sm text-[#6287a0]">No payouts generated yet.</p> : null}
          {newPayouts.map((payout) => (
            <div key={payout.payout_id} className="rounded-xl border border-[#d3e6f2] bg-[#f9fcff] px-3 py-2 text-sm">
              <span className="text-[#3f677f] capitalize">{payout.trigger_name.replace("_", " ")}</span>
              <span className="ml-2 font-medium text-[#20526f]">Rs {payout.amount.toFixed(2)}</span>
              <span className="ml-2 text-[#5f839b]">({payout.status})</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
