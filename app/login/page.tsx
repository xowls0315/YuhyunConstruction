export default function LoginPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">로그인</h1>

      <div className="max-w-md">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <form className="space-y-4">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-slate-600 mb-2">
                아이디
              </label>
              <input
                id="id"
                type="text"
                placeholder="아이디를 입력하세요"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-600 mb-2">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300"
              />
            </div>
            <button
              type="button"
              className="w-full py-3 rounded-lg bg-slate-700 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              로그인
            </button>
          </form>
        </div>
        <p className="text-xs text-slate-500 mt-4">* 실제 API 연동 시 인증 기능이 적용됩니다</p>
      </div>
    </div>
  );
}
