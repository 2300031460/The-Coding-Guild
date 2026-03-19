import { TriggerEvent } from "@/types";

type TriggerStatusProps = {
  triggers: TriggerEvent[];
};

export default function TriggerStatus({ triggers }: TriggerStatusProps) {
  return (
    <section className="surface-card p-4">
      <h2 className="section-title">Trigger Status</h2>
      <div className="mt-3 space-y-2">
        {triggers.length === 0 ? <p className="text-sm text-[#6287a0]">No trigger evaluation yet.</p> : null}
        {triggers.map((trigger) => (
          <div
            key={trigger.trigger_name}
            className="flex items-center justify-between rounded-xl border border-[#d3e6f2] bg-[#f9fcff] px-3 py-2 text-sm"
          >
            <span className="capitalize text-[#486d84]">{trigger.trigger_name.replace("_", " ")}</span>
            <span className={trigger.active ? "font-medium text-[#b15963]" : "font-medium text-[#478569]"}>
              {trigger.active ? "Active" : "Inactive"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
