import { RiskSnapshot } from "@/types";

type RiskAlertsProps = {
  risk: RiskSnapshot | null;
};

function labelClass(isActive: boolean): string {
  return isActive
    ? "bg-[#fff2f2] text-[#aa4f55] border-[#f5c7ca]"
    : "bg-[#edf9f4] text-[#3f8261] border-[#bee6d1]";
}

export default function RiskAlerts({ risk }: RiskAlertsProps) {
  const rain = (risk?.rainfall_mm ?? 0) > 55;
  const aqi = (risk?.aqi ?? 0) > 240;
  const heat = (risk?.temperature_c ?? 0) >= 40;

  return (
    <section className="surface-card p-4">
      <h2 className="section-title">Risk Alerts</h2>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <div className={`rounded-md border px-3 py-2 text-sm ${labelClass(rain)}`}>
          Rain: {rain ? "High" : "Normal"}
        </div>
        <div className={`rounded-md border px-3 py-2 text-sm ${labelClass(aqi)}`}>
          AQI: {aqi ? "Hazardous" : "Normal"}
        </div>
        <div className={`rounded-md border px-3 py-2 text-sm ${labelClass(heat)}`}>
          Heat: {heat ? "Heatwave" : "Normal"}
        </div>
      </div>
    </section>
  );
}
