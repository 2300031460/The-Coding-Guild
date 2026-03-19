"use client";

import { useEffect, useState } from "react";

import RiskAlerts from "@/components/RiskAlerts";
import { getRiskData } from "@/lib/api";
import { RiskSnapshot } from "@/types";

export default function ConditionsPage() {
  const [risk, setRisk] = useState<RiskSnapshot | null>(null);
  const [loading, setLoading] = useState(false);

  async function refreshConditions() {
    setLoading(true);
    try {
      const data = await getRiskData();
      setRisk(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshConditions().catch((error) => console.error("Failed to load conditions:", error));
  }, []);

  return (
    <div className="space-y-4">
      <section className="surface-card bg-gradient-to-r from-[#f5fbff] to-[#eefaf4] p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#1a4b68]">Live Conditions Check</h2>
            <p className="mt-1 text-sm text-[#6388a1]">Review rain, AQI, heat and outage signals before trigger evaluation.</p>
          </div>
          <button type="button" onClick={refreshConditions} disabled={loading} className="btn-primary disabled:opacity-60">
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-4">
        <div className="surface-card p-4 text-sm text-[#5e839d]">
          Rainfall: <span className="font-semibold text-[#1b4b68]">{risk?.rainfall_mm ?? "-"} mm</span>
        </div>
        <div className="surface-card p-4 text-sm text-[#5e839d]">
          AQI: <span className="font-semibold text-[#1b4b68]">{risk?.aqi ?? "-"}</span>
        </div>
        <div className="surface-card p-4 text-sm text-[#5e839d]">
          Temperature: <span className="font-semibold text-[#1b4b68]">{risk?.temperature_c ?? "-"} C</span>
        </div>
        <div className="surface-card p-4 text-sm text-[#5e839d]">
          Outage: <span className="font-semibold text-[#1b4b68]">{risk?.platform_outage ? "Yes" : "No"}</span>
        </div>
      </section>

      <RiskAlerts risk={risk} />
    </div>
  );
}
