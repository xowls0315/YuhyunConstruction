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
  { date: "5월 21일", value: 0 },
  { date: "5월 28일", value: 1 },
  { date: "6월 3일", value: 0.5 },
  { date: "6월 9일", value: 6 },
  { date: "6월 14일", value: 4 },
  { date: "6월 20일", value: 5 },
];

export default function TrafficTrendChart() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#64748b" />
          <YAxis domain={[0, 7]} tick={{ fontSize: 12 }} stroke="#64748b" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" name="트래픽" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
