export default function QRPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">QR 조회</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* QR 스캔/입력 영역 */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-700 mb-4">QR 코드 조회</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">QR 코드 / 센서 ID</label>
              <input
                type="text"
                placeholder="QR 코드를 스캔하거나 센서 ID를 입력하세요"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300"
              />
            </div>
            <button
              type="button"
              className="w-full py-2.5 rounded-lg bg-slate-700 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              조회
            </button>
          </div>
        </div>

        {/* 조회 결과 영역 */}
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-700 mb-4">조회 결과</h2>
          <div className="rounded-lg border border-dashed border-slate-200 p-12 text-center">
            <p className="text-sm text-slate-500">QR 코드를 스캔하거나 센서 ID를 입력한 후 조회 버튼을 눌러주세요</p>
            <p className="text-xs text-slate-400 mt-2">(목업 화면)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
