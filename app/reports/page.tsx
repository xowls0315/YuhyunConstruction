export default function ReportsPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">자동 리포트</h1>

      {/* 리포트 타입 필터 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["일보", "주보", "월보"].map((type) => (
          <button
            key={type}
            type="button"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              type === "일보" ? "bg-slate-700 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* 리포트 목록 */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-700 mb-4">리포트 목록</h2>
        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-4 py-3 text-left font-medium text-slate-700">생성일</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700">리포트 타입</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700">기간</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700">다운로드</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "2025-02-11", type: "일보", period: "2025-02-11" },
                { date: "2025-02-10", type: "일보", period: "2025-02-10" },
                { date: "2025-02-09", type: "주보", period: "2025-02-03 ~ 2025-02-09" },
                { date: "2025-02-01", type: "월보", period: "2025-01" },
              ].map((row, i) => (
                <tr key={i} className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-600">{row.date}</td>
                  <td className="px-4 py-3 text-slate-600">{row.type}</td>
                  <td className="px-4 py-3 text-slate-600">{row.period}</td>
                  <td className="px-4 py-3">
                    <button type="button" className="text-slate-500 hover:text-slate-700 text-xs">
                      PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-6">* 실제 API 연동 시 생성된 리포트 목록이 표시됩니다</p>
    </div>
  );
}
