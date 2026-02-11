"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "미정", value: 25, color: "#3b82f6" },
  { name: "실행 중", value: 35, color: "#f97316" },
  { name: "중지됨", value: 25, color: "#15803d" },
  { name: "실행 중 (경고)", value: 15, color: "#22c55e" },
];

export default function ProductiveMonitoringChart() {
  return (
    <div className="h-[280px] w-full flex flex-col">
      <div className="flex justify-end gap-2 mb-1">
        <button type="button" className="text-xs text-slate-600 hover:text-slate-900 underline">
          새로고침
        </button>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              label={({ name }) => name}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-right">
        <button type="button" className="text-xs text-blue-600 hover:underline">
          상세 보기
        </button>
      </div>
    </div>
  );
}
