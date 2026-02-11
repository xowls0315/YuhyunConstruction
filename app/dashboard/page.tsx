import SummaryCard from "@/components/dashboard/SummaryCard";
import TrafficChart from "@/components/dashboard/TrafficChart";
import UsageChart from "@/components/dashboard/UsageChart";
import TrafficTrendChart from "@/components/dashboard/TrafficTrendChart";
import ProductiveMonitoringChart from "@/components/dashboard/ProductiveMonitoringChart";

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">대시보드</h1>

      {/* 요약 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <SummaryCard value="0" label="당일 트래픽" />
        <SummaryCard value="0" label="당일 사용량" />
        <SummaryCard value="2" label="최근 30일 구독" />
        <SummaryCard value="3" label="배포된 애플리케이션" />
      </div>

      {/* 상단 그래프 2개 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-700 mb-4">전체 앱 트래픽 발생량</h2>
          <TrafficChart />
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-700 mb-4">전체 앱 사용량</h2>
          <UsageChart />
        </div>
      </div>

      {/* 하단 그래프 2개 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-700 mb-4">상위 5개 사용 앱 트래픽 추이 비교</h2>
          <TrafficTrendChart />
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-700 mb-4">운영 모니터링</h2>
          <ProductiveMonitoringChart />
        </div>
      </div>

      {/* 각주 */}
      <div className="text-xs text-red-600 space-y-1 mt-6">
        <p>* 최신 모니터링 데이터는 반영까지 최대 24시간이 소요될 수 있습니다</p>
        <p>* 트래픽 대시보드에서 애플리케이션 및 연동 서비스 호출 빈도를 확인할 수 있습니다</p>
      </div>
    </div>
  );
}
