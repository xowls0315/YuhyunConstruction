import SummaryCard from "@/components/dashboard/SummaryCard";

export default function MonitoringPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">실시간 모니터링</h1>

      {/* 요약 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <SummaryCard value="12" label="연동 센서 수" />
        <SummaryCard value="11" label="정상 센서" />
        <SummaryCard value="1" label="주의 센서" />
        <SummaryCard value="0" label="경고 센서" />
      </div>

      {/* 센서 목록 영역 */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm mb-6">
        <h2 className="text-sm font-semibold text-slate-700 mb-4">센서별 실시간 측정값</h2>
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-4 py-3 text-left font-medium text-slate-700">센서 ID</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700">센서 타입</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700">측정값</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700">상태</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700">마지막 업데이트</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-600">SNS-{String(i).padStart(4, "0")}</td>
                  <td className="px-4 py-3 text-slate-600">{i === 3 ? "수압계" : "경사계"}</td>
                  <td className="px-4 py-3 text-slate-900 font-medium">{(i * 1.2).toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <span className={i === 3 ? "text-amber-600 font-medium" : "text-emerald-600"}>
                      {i === 3 ? "주의" : "정상"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-500">방금 전</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-slate-500">* 실제 API 연동 시 센서 데이터가 표시됩니다</p>
    </div>
  );
}
