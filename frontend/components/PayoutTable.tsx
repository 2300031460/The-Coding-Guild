import { PayoutRecord } from "@/types";

type PayoutTableProps = {
  payouts: PayoutRecord[];
};

export default function PayoutTable({ payouts }: PayoutTableProps) {
  return (
    <section className="surface-card p-4">
      <h2 className="section-title">Recent Payouts</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="min-w-full overflow-hidden rounded-xl text-sm">
          <thead>
            <tr className="border-b border-[#d3e6f2] text-left text-[#6286a0]">
              <th className="py-2 pr-4">Trigger</th>
              <th className="py-2 pr-4">Amount</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {payouts.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-3 text-[#6287a0]">
                  No payouts yet.
                </td>
              </tr>
            ) : null}
            {payouts.map((payout) => (
              <tr key={payout.payout_id} className="border-b border-[#e5f0f7]">
                <td className="py-2 pr-4 capitalize text-[#3f677f]">{payout.trigger_name.replace("_", " ")}</td>
                <td className="py-2 pr-4 text-[#20526f]">Rs {payout.amount.toFixed(2)}</td>
                <td className="py-2 pr-4 text-[#50748b]">{payout.status}</td>
                <td className="py-2 text-[#5f839b]">{new Date(payout.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
