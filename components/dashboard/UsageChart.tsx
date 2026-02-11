"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { date: "5월 21일", usage: 0 },
  { date: "5월 28일", usage: 0.0005 },
  { date: "6월 3일", usage: 0.0003 },
  { date: "6월 9일", usage: 0.0018 },
  { date: "6월 14일", usage: 0.0012 },
  { date: "6월 20일", usage: 0.0015 },
];

export default function UsageChart() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#64748b" />
          <YAxis domain={[0, 0.002]} tick={{ fontSize: 12 }} stroke="#64748b" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="usage" name="데이터 (MB)" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
