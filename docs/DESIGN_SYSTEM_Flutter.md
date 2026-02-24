# 유현건설 계측 모니터링 — 디자인 시스템 (Flutter 연동용)

웹(Next.js) 프로젝트에서 사용 중인 **폰트, 폰트 크기, 색상, 간격, 모서리, 그림자**를 정리한 문서입니다.  
모바일(Flutter) 개발 시 동일한 시각 스타일을 적용할 때 참고하세요.

---

## 1. 폰트 (Typography)

### 1.1 폰트 패밀리

| 용도 | 웹 값 | 비고 |
|------|--------|------|
| **기본 폰트** | `Pretendard` | 가변 폰트 (100~900) |

- **Flutter**: [Pretendard](https://github.com/orioncactus/pretendard) 폰트 파일(.ttf / .otf)을 프로젝트에 포함한 뒤 `fontFamily: 'Pretendard'` 사용.
- **Fallback**: `sans-serif` (웹), Flutter에서는 시스템 기본 sans 또는 NotoSansKR 등.

### 1.2 폰트 굵기 (Font Weight)

| 용도 | 웹 (Tailwind) | 숫자 값 | Flutter |
|------|----------------|---------|---------|
| 보조/플레이스홀더 | `font-normal` | 400 | `FontWeight.w400` |
| 라벨/버튼 | `font-medium` | 500 | `FontWeight.w500` |
| 소제목/강조 | `font-semibold` | 600 | `FontWeight.w600` |
| 페이지 제목 | `font-bold` | 700 | `FontWeight.w700` |

### 1.3 폰트 크기 (Font Size)

| 용도 | 웹 클래스 | px (대략) | Flutter (sp 권장) |
|------|-----------|-----------|-------------------|
| 각주/캡션 | `text-xs` | 12px | 12.0 |
| 본문 보조/라벨 | `text-sm` | 14px | 14.0 |
| 본문/입력 | `text-sm` (input) | 14px | 14.0 |
| 페이지 제목 | `text-2xl` | 24px | 24.0 |

- **Flutter**: `fontSize: 12`, `fontSize: 14`, `fontSize: 24` 등으로 맞추면 됨.

---

## 2. 색상 (Colors)

### 2.1 기본 팔레트 — Slate (회색 계열)

| 이름 | 웹 (Tailwind) | HEX | Flutter (`Color(0xFF______)`) |
|------|----------------|-----|-------------------------------|
| Slate 50 | `slate-50` | `#f8fafc` | `Color(0xFFf8fafc)` |
| Slate 100 | `slate-100` | `#f1f5f9` | `Color(0xFFf1f5f9)` |
| Slate 200 | `slate-200` | `#e2e8f0` | `Color(0xFFe2e8f0)` |
| Slate 300 | `slate-300` | `#cbd5e1` | `Color(0xFFcbd5e1)` |
| Slate 400 | `slate-400` | `#94a3b8` | `Color(0xFF94a3b8)` |
| Slate 500 | `slate-500` | `#64748b` | `Color(0xFF64748b)` |
| Slate 600 | `slate-600` | `#475569` | `Color(0xFF475569)` |
| Slate 700 | `slate-700` | `#334155` | `Color(0xFF334155)` |
| Slate 800 | `slate-800` | `#1e293b` | `Color(0xFF1e293b)` |
| Slate 900 | `slate-900` | `#0f172a` | `Color(0xFF0f172a)` |

### 2.2 시맨틱 용도 (프로젝트에서의 사용처)

| 용도 | 색상 | HEX |
|------|------|-----|
| **배경 (전체)** | White | `#ffffff` |
| **사이드바 배경** | Slate 50 | `#f8fafc` |
| **카드/컨테이너 배경** | White | `#ffffff` |
| **테두리 (기본)** | Slate 200 | `#e2e8f0` |
| **테두리 (연한)** | Slate 100 | `#f1f5f9` |
| **본문 강조/제목** | Slate 900 | `#0f172a` |
| **본문 일반** | Slate 800 | `#1e293b` (text-slate-800) |
| **소제목/라벨** | Slate 700 | `#334155` |
| **보조 텍스트** | Slate 600 | `#475569` |
| **캡션/각주** | Slate 500 | `#64748b` |
| **플레이스홀더** | Slate 400 | `#94a3b8` |
| **호버 배경 (사이드바)** | Slate 100 | `#f1f5f9` |
| **선택/활성 (사이드바)** | Slate 200 | `#e2e8f0` |
| **포커스 링 (입력)** | Slate 300 | `#cbd5e1` |

### 2.3 상태/강조 색상

| 용도 | 웹 클래스 | HEX | Flutter |
|------|-----------|-----|---------|
| **주의 (알림)** | `amber-50` / `amber-600` | 배경 `#fffbeb`, 텍스트 `#d97706` | `Color(0xFFfffbeb)`, `Color(0xFFd97706)` |
| **정상/성공** | `emerald-50` / `emerald-600` | 배경 `#ecfdf5`, 텍스트 `#059669` | `Color(0xFFecfdf5)`, `Color(0xFF059669)` |
| **정보/중립** | `slate-100` / `slate-600` | 배경 `#f1f5f9`, 텍스트 `#475569` | 위 Slate 참고 |
| **경고 문구** | `red-600` | `#dc2626` | `Color(0xFFdc2626)` |
| **링크/액션** | `blue-600` | `#2563eb` | `Color(0xFF2563eb)` |
| **주요 버튼** | `slate-700` / `slate-800` | `#334155` / `#1e293b` | `Color(0xFF334155)`, `Color(0xFF1e293b)` |

### 2.4 차트 색상 (고정값)

| 용도 | HEX |
|------|-----|
| 차트 그리드선 | `#e2e8f0` |
| 차트 축/텍스트 | `#64748b` |
| 선 그래프 (주황) | `#f97316` |
| 선 그래프 (파랑) | `#3b82f6` |
| 파이: 미정 | `#3b82f6` |
| 파이: 실행 중 | `#f97316` |
| 파이: 중지됨 | `#15803d` |
| 파이: 실행 중 (경고) | `#22c55e` |

### 2.5 오버레이

| 용도 | 값 |
|------|-----|
| 모바일 사이드바 뒤 배경 | `black` 50% 불투명 = `#80000000` (또는 `Colors.black54`) |

---

## 3. 간격 (Spacing)

Tailwind 기본 스케일: 1단위 = 4px.

| 웹 클래스 | px | Flutter (대략) |
|-----------|-----|----------------|
| `p-2`, `gap-2` | 8px | 8.0 |
| `p-3`, `px-3 py-2.5` | 12px / 10px | 12.0 / 10.0 |
| `p-4`, `gap-4`, `mb-4` | 16px | 16.0 |
| `p-5` | 20px | 20.0 |
| `p-6`, `gap-6`, `mb-6` | 24px | 24.0 |
| `mb-8`, `p-8` | 32px | 32.0 |
| `space-y-0.5` | 2px | 2.0 |
| `space-y-1` | 4px | 4.0 |
| `space-y-3` | 12px | 12.0 |

### 3.1 컴포넌트별 패딩

| 영역 | 패딩 (웹) | 권장 값 |
|------|-----------|---------|
| 페이지 콘텐츠 전체 | `p-6 lg:p-8` | 24px (모바일), 32px (큰 화면) |
| 카드 내부 | `p-4` / `p-5` / `p-6` | 16px / 20px / 24px |
| 사이드바 헤더 | `p-4` | 16px |
| 사이드바 네비 | `p-2` | 8px |
| 모바일 상단 바 (햄버거) | `h-14 px-4` | 높이 56px, 좌우 16px |
| 입력 필드 | `px-4 py-3` | 좌우 16px, 상하 12px |

---

## 4. 모서리 (Border Radius)

| 웹 클래스 | px | Flutter |
|-----------|-----|---------|
| `rounded-lg` | 8px | `BorderRadius.circular(8)` |
| (작은 버튼/뱃지) | 8px | `BorderRadius.circular(8)` |

---

## 5. 테두리 (Border)

| 용도 | 색상 | 두께 |
|------|------|------|
| 카드/사이드바 구분 | Slate 200 `#e2e8f0` | 1px |
| 리스트 항목 하단 | Slate 100 `#f1f5f9` | 1px |

---

## 6. 그림자 (Shadow)

| 용도 | 웹 | Flutter (대략) |
|------|-----|----------------|
| 카드 | `shadow-sm` | `BoxShadow(color: Color(0x0F000000).withValues(alpha: 0.05), blurRadius: 2, offset: Offset(0, 1))` 또는 `Elevation 1` 수준 |

- Flutter에서는 `Card`의 기본 elevation(1) 또는 `BoxDecoration`의 `boxShadow`로 비슷하게 적용.

---

## 7. 레이아웃 수치

| 항목 | 웹 | px | Flutter |
|------|-----|-----|---------|
| 사이드바 너비 | `w-56` | 224px (14rem) | 224.0 |
| 모바일 상단 바 높이 | `h-14` | 56px | 56.0 |
| 차트 영역 높이 (참고) | `h-[280px]` | 280px | 280.0 |
| 반응형 breakpoint | `md` | 768px | 768.0 (화면 너비 기준) |

---

## 8. 애니메이션 / 전환

| 용도 | 웹 | Flutter |
|------|-----|---------|
| 사이드바 열기/닫기 | `transition-transform duration-300 ease-out` | `Duration(milliseconds: 300)`, `Curves.easeOut` |
| 오버레이 페이드 | `transition-opacity duration-300` | `AnimatedOpacity` 등 300ms |

---

## 9. Flutter용 요약 (복사용)

```dart
// 색상 (예시)
const Color slate50 = Color(0xFFf8fafc);
const Color slate200 = Color(0xFFe2e8f0);
const Color slate500 = Color(0xFF64748b);
const Color slate600 = Color(0xFF475569);
const Color slate700 = Color(0xFF334155);
const Color slate900 = Color(0xFF0f172a);
const Color amber600 = Color(0xFFd97706);
const Color emerald600 = Color(0xFF059669);
const Color red600 = Color(0xFFdc2626);

// 간격
const double spacingXs = 4.0;
const double spacingSm = 8.0;
const double spacingMd = 16.0;
const double spacingLg = 24.0;
const double spacingXl = 32.0;

// 폰트 크기
const double fontSizeXs = 12.0;
const double fontSizeSm = 14.0;
const double fontSizeTitle = 24.0;

// 레이아웃
const double sidebarWidth = 224.0;
const double mobileAppBarHeight = 56.0;
const double breakpointMd = 768.0;
```

---

이 문서는 웹 프로젝트의 `app/globals.css`, `components/layout/*`, `components/dashboard/*`, `app/**/page.tsx` 등을 기준으로 추출한 값입니다.  
Flutter에서 디바이스 밀도나 가독성 이슈로 약간 조정이 필요하면, 위 수치를 기준으로 비율만 맞춰 적용하면 됩니다.
