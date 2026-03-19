"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import PlanCard from "@/components/PlanCard";
import { getPlans } from "@/lib/api";
import { getSelectedPlanId, setSelectedPlanId } from "@/lib/planStorage";
import { Plan } from "@/types";

export default function PlansPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selected, setSelected] = useState(() => getSelectedPlanId("guardian"));

  useEffect(() => {
    getPlans("medium")
      .then(setPlans)
      .catch((error) => console.error("Failed to fetch plans:", error));
  }, []);

  useEffect(() => {
    setSelectedPlanId(selected);
  }, [selected]);

  const activePlan = plans.find((plan) => plan.id === selected);

  return (
    <div className="space-y-4">
      <section className="surface-card bg-gradient-to-r from-[#f5fbff] to-[#eefaf4] p-4">
        <h2 className="text-lg font-semibold text-[#1a4b68]">Plan Selection</h2>
        <p className="mt-1 text-sm text-[#6388a1]">Choose a plan based on your weekly earnings and protection needs.</p>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} selected={selected === plan.id} onSelect={setSelected} />
        ))}
      </section>

      <section className="surface-card flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#6087a0]">
          Selected plan: <span className="font-semibold text-[#1f4f6c]">{activePlan?.name ?? "Guardian"}</span>
        </p>
        <div className="flex gap-2">
          <Link href="/payments" className="btn-primary inline-flex items-center">
            Pay Premium
          </Link>
          <Link href="/" className="rounded-xl border border-[#bcd8ea] bg-white px-4 py-2 text-sm text-[#2b617f]">
            View Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}
