"use client";

import { useEffect, useMemo, useState } from "react";

import PayoutTable from "@/components/PayoutTable";
import RiskAlerts from "@/components/RiskAlerts";
import StatCard from "@/components/StatCard";
import TriggerStatus from "@/components/TriggerStatus";
import { getPayouts, getPlans, getRiskData } from "@/lib/api";
import { getSelectedPlanId } from "@/lib/planStorage";
import { Plan, PayoutRecord, RiskSnapshot, TriggerEvent } from "@/types";

const weeklyEarnings = [1850, 2120, 1980, 2300, 2010, 2190, 2260];

export default function DashboardPage() {
  const [risk, setRisk] = useState<RiskSnapshot | null>(null);
  const [triggers, setTriggers] = useState<TriggerEvent[]>([]);
  const [payouts, setPayouts] = useState<PayoutRecord[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlanId, setSelectedPlan] = useState("guardian");

  const earningsTotal = useMemo(() => weeklyEarnings.reduce((a, b) => a + b, 0), []);

  async function loadData() {
    const [riskData, payoutData, planData] = await Promise.all([getRiskData(), getPayouts(), getPlans("medium")]);
    const storedPlan = getSelectedPlanId("guardian");
    setRisk(riskData);
    setPayouts(payoutData);
    setPlans(planData);
    setSelectedPlan(storedPlan);
  }

  useEffect(() => {
    loadData().catch((error) => {
      console.error("Failed to load dashboard:", error);
    });
  }, []);

  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId);

  return (
    <div className="relative space-y-4 overflow-hidden">
      <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[#8fd8ff]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-10 h-44 w-44 rounded-full bg-[#8de7c0]/35 blur-3xl" />
      <section className="surface-card bg-gradient-to-r from-[#f4fbff] via-[#f8fcff] to-[#effaf4] p-4 sm:p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-[#5f879f]">Worker Dashboard</p>
        <h2 className="mt-1 text-xl font-semibold text-[#1a4b68]">Calm, Continuous Income Protection</h2>
        <p className="mt-1 text-sm text-[#6086a0]">Track disruption risks and payout triggers in real-time.</p>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <StatCard
          title="Current Plan"
          value={selectedPlan?.name ?? "Guardian"}
          subtitle={`Premium Rs ${selectedPlan?.adjusted_premium?.toFixed(0) ?? "47"}/week`}
        />
        <StatCard title="Weekly Earnings" value={`Rs ${earningsTotal}`} subtitle="Mock earnings trend" />
        <StatCard title="Current Risk" value={risk?.risk_level ?? "-"} subtitle={`Score ${risk?.disruption_score ?? 0}`} />
      </section>

      <RiskAlerts risk={risk} />

      <section className="surface-card p-4">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Trigger Evaluation</h2>
          <a href="/evaluate" className="btn-primary inline-flex items-center">
            Open Evaluation Page
          </a>
        </div>
        <p className="mt-2 text-sm text-[#6287a0]">Use the dedicated page for evaluating metrics and generating payouts.</p>
      </section>

      <TriggerStatus triggers={triggers} />
      <PayoutTable payouts={payouts.slice(0, 8)} />
    </div>
  );
}
