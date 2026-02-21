import SummaryCard from "@/components/dashboard/SummaryCard";

export default function AlertsPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">알림</h1>

      {/* 요약 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <SummaryCard value="3" label="미확인 알림" />
        <SummaryCard value="12" label="오늘 알림" />
        <SummaryCard value="28" label="이번 주 알림" />
      </div>

      {/* 알림 목록 */}
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-700 mb-4">최근 알림 목록</h2>
        <div className="space-y-3">
          {[
            { level: "주의", time: "10분 전", msg: "SNS-0003 수압계 측정값이 1차 관리기준치 초과", color: "text-amber-600" },
            { level: "정보", time: "1시간 전", msg: "일일 리포트가 생성되었습니다", color: "text-slate-600" },
            { level: "정상", time: "2시간 전", msg: "SNS-0002 경사계가 정상 범위로 회복됨", color: "text-emerald-600" },
            { level: "주의", time: "3시간 전", msg: "SNS-0001 통신 지연 감지", color: "text-amber-600" },
            { level: "정보", time: "5시간 전", msg: "주간 리포트가 생성되었습니다", color: "text-slate-600" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <span className={`shrink-0 text-xs font-medium px-2 py-1 rounded ${item.level === "주의" ? "bg-amber-50" : item.level === "정상" ? "bg-emerald-50" : "bg-slate-100"}`}>{item.level}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-800">{item.msg}</p>
                <p className="text-xs text-slate-500 mt-1">{item.time}</p>
              </div>
              <button type="button" className="text-xs text-slate-500 hover:text-slate-700 shrink-0">
                확인
              </button>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-6">* 실제 API 연동 시 경보 이벤트가 표시됩니다</p>
    </div>
  );
}
