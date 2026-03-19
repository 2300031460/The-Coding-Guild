type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div className="surface-card p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-[#5483a0]">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-[#173f59]">{value}</p>
      {subtitle ? <p className="mt-1 text-sm text-[#6086a0]">{subtitle}</p> : null}
    </div>
  );
}
