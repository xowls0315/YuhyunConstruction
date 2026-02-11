type SummaryCardProps = {
  value: string | number;
  label: string;
};

export default function SummaryCard({ value, label }: SummaryCardProps) {
  return (
    <div className="text-center rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}
