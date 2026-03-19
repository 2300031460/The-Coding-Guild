"use client";

import { useState } from "react";

import TriggerStatus from "@/components/TriggerStatus";
import { evaluateTriggers } from "@/lib/api";
import { RiskSnapshot, TriggerEvent } from "@/types";

export default function AdminPage() {
  const [risk, setRisk] = useState<RiskSnapshot | null>(null);
  const [triggers, setTriggers] = useState<TriggerEvent[]>([]);
  const [lastScan, setLastScan] = useState<string>("Never");

  async function runScan() {
    const result = await evaluateTriggers("worker-001", "guardian", "medium");
    setRisk(result.risk_snapshot);
    setTriggers(result.triggers);
    setLastScan(new Date().toLocaleString());
  }

  return (
    <div className="space-y-4">
      <section className="surface-card bg-gradient-to-r from-[#f4fbff] to-[#eefaf4] p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#1a4b68]">Admin Trigger Monitoring</h2>
          <button
            type="button"
            onClick={() => runScan().catch((error) => console.error("Scan failed:", error))}
            className="btn-primary"
          >
            Scan Live Conditions
          </button>
        </div>
        <p className="mt-2 text-sm text-[#6287a0]">Last scan: {lastScan}</p>
      </section>

      <section className="grid gap-3 sm:grid-cols-4">
        <div className="surface-card p-4 text-sm text-[#5e839d]">
          Rainfall: <span className="font-semibold text-[#1b4b68]">{risk?.rainfall_mm ?? "-"} mm</span>
        </div>
        <div className="surface-card p-4 text-sm text-[#5e839d]">
          AQI: <span className="font-semibold text-[#1b4b68]">{risk?.aqi ?? "-"}</span>
        </div>
        <div className="surface-card p-4 text-sm text-[#5e839d]">
          Temp: <span className="font-semibold text-[#1b4b68]">{risk?.temperature_c ?? "-"} C</span>
        </div>
        <div className="surface-card p-4 text-sm text-[#5e839d]">
          Outage: <span className="font-semibold text-[#1b4b68]">{risk?.platform_outage ? "Yes" : "No"}</span>
        </div>
      </section>

      <TriggerStatus triggers={triggers} />
    </div>
  );
}
