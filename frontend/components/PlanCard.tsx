import { Plan } from "@/types";

type PlanCardProps = {
  plan: Plan;
  selected: boolean;
  onSelect: (planId: string) => void;
};

export default function PlanCard({ plan, selected, onSelect }: PlanCardProps) {
  return (
    <article
      className={`surface-card p-4 transition ${
        selected ? "border-[#4f88a8] bg-[#f2f9fe]" : "border-[#cde1ef] bg-white/90"
      }`}
    >
      <h3 className="text-lg font-semibold text-[#1c4c69]">{plan.name}</h3>
      <p className="mt-2 text-sm text-[#547b95]">Coverage: Rs {plan.weekly_coverage.toFixed(0)}/week</p>
      <p className="text-sm text-[#547b95]">Premium: Rs {plan.adjusted_premium.toFixed(0)}/week</p>
      <p className="text-sm text-[#547b95]">Max Payout: Rs {plan.max_weekly_payout.toFixed(0)}</p>
      <button
        type="button"
        onClick={() => onSelect(plan.id)}
        className="btn-primary mt-4"
      >
        {selected ? "Selected" : "Select Plan"}
      </button>
    </article>
  );
}
