"use client";

import { useEffect, useMemo, useState } from "react";

import { getPayments, getPlans, payPremium } from "@/lib/api";
import { getSelectedPlanId } from "@/lib/planStorage";
import { PaymentMethod, PaymentRecord, Plan } from "@/types";

export default function PaymentsPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlanId] = useState(() => getSelectedPlanId("guardian"));
  const [method, setMethod] = useState<PaymentMethod>("upi");
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    getPlans("medium")
      .then(setPlans)
      .catch((error) => console.error("Failed to fetch plans:", error));
    getPayments()
      .then(setPayments)
      .catch((error) => console.error("Failed to fetch payments:", error));
  }, []);

  const selectedPlan = useMemo(() => plans.find((plan) => plan.id === selectedPlanId), [plans, selectedPlanId]);

  const totalPaidForPlan = useMemo(() => {
    return payments
      .filter((payment) => payment.plan_id === selectedPlanId && payment.status === "success")
      .reduce((sum, payment) => sum + payment.amount, 0);
  }, [payments, selectedPlanId]);

  const premiumDue = useMemo(() => {
    if (!selectedPlan) return 0;
    return Math.max(selectedPlan.adjusted_premium - totalPaidForPlan, 0);
  }, [selectedPlan, totalPaidForPlan]);

  const isPremiumPaid = premiumDue <= 0;

  async function payNow() {
    if (!selectedPlan || isPremiumPaid) return;
    setProcessing(true);
    try {
      await payPremium(selectedPlan.id, premiumDue, method);
      const updated = await getPayments();
      setPayments(updated);
    } finally {
      setProcessing(false);
    }
  }

  return (
    <div className="space-y-4">
      <section className="surface-card bg-gradient-to-r from-[#f5fbff] to-[#eefaf4] p-4">
        <h2 className="text-lg font-semibold text-[#1a4b68]">Premium Payment Gateway (Demo)</h2>
        <p className="mt-1 text-sm text-[#6388a1]">Mock gateway for UPI/Card/Netbanking to simulate premium collection.</p>
      </section>

      <section className="surface-card p-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[#5f879f]">Selected Plan</p>
            <p className="mt-1 text-lg font-semibold text-[#1b4b68]">{selectedPlan?.name ?? "Guardian"}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[#5f879f]">Premium Due</p>
            <p className="mt-1 text-lg font-semibold text-[#1b4b68]">Rs {premiumDue.toFixed(2)}</p>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.14em] text-[#5f879f]">Payment Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value as PaymentMethod)}
              className="mt-1 w-full rounded-xl border border-[#bcd8ea] bg-white px-3 py-2 text-sm text-[#2b6484]"
            >
              <option value="upi">UPI</option>
              <option value="card">Card</option>
              <option value="netbanking">Netbanking</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={payNow}
          disabled={processing || !selectedPlan || isPremiumPaid}
          className="btn-primary mt-4 disabled:opacity-60"
        >
          {processing ? "Processing..." : isPremiumPaid ? "Premium Paid" : "Pay Premium"}
        </button>
        {isPremiumPaid ? <p className="mt-2 text-sm text-[#478569]">Premium is already settled for the selected plan.</p> : null}
      </section>

      <section className="surface-card p-4">
        <h3 className="section-title">Recent Premium Payments</h3>
        <div className="mt-3 space-y-2">
          {payments.length === 0 ? <p className="text-sm text-[#6287a0]">No premium payment made yet.</p> : null}
          {payments.map((payment) => (
            <div key={payment.payment_id} className="rounded-xl border border-[#d3e6f2] bg-[#f9fcff] px-3 py-2 text-sm">
              <span className="font-medium text-[#245573]">{payment.payment_id}</span>
              <span className="ml-2 text-[#3f677f]">Plan: {payment.plan_id}</span>
              <span className="ml-2 text-[#20526f]">Rs {payment.amount.toFixed(2)}</span>
              <span className="ml-2 text-[#5f839b]">{payment.method.toUpperCase()}</span>
              <span className="ml-2 text-[#478569]">{payment.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
