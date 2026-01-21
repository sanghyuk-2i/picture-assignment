# Picture Assignment

Turborepo 기반 모노레포 프로젝트

## 프로젝트 구조

```
picture-assignment/
├── apps/
│   ├── web/          # 메인 웹 애플리케이션 (Vite + React)
│   └── storybook/    # UI 컴포넌트 문서 (Storybook)
└── packages/
    ├── ui/           # 공유 UI 컴포넌트 라이브러리
    ├── eslint-config/    # ESLint 공유 설정
    ├── prettier-config/  # Prettier 공유 설정
    ├── tailwind-config/  # Tailwind CSS 공유 설정
    └── typescript-config/ # TypeScript 공유 설정
```

## 사전 요구사항

- Node.js 18 이상
- pnpm 8.15.6 이상

## 설치

```bash
pnpm install
```

## 개발 실행

### 모든 앱 동시 실행

```bash
pnpm dev
```

### 개별 앱 실행

```bash
# 웹 애플리케이션만 실행
pnpm dev:web

# Storybook만 실행
pnpm dev:storybook

# UI 패키지만 빌드 (watch 모드)
pnpm dev:ui
```

## 빌드

### 모든 앱 빌드

```bash
pnpm build
```

### 개별 앱 빌드

```bash
# 웹 애플리케이션만 빌드
pnpm build:web

# Storybook만 빌드
pnpm build:storybook

# UI 패키지만 빌드
pnpm build:ui
```

## 린트

```bash
# 모든 패키지 린트
pnpm lint

# 포맷 자동 수정
pnpm format
```

## 기술 스택

### 웹 애플리케이션
- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- Zustand
- Tailwind CSS 4

### UI 라이브러리
- React
- Tailwind CSS 4
- tsup (번들러)

### 개발 도구
- Turborepo (모노레포 관리)
- pnpm (패키지 매니저)
- ESLint
- Prettier
- Storybook

## 제품 기능 

1. 시작 페이지 (Home)
   - 환영 화면에 사용자 이름("이상혁") 표시
   - "시작" 버튼을 클릭하면 이미지 데이터 페칭 시작
   - 깔끔한 중앙 정렬 레이아웃

2. 결과 페이지 (Result)
   - 고화질 이미지를 블러 처리된 배경과 함께 표시
   - 이미지 메타데이터를 카드 형식으로 정리:
     - 사진 ID 및 작가 정보
     - 이미지 크기 (width/height, 천단위 콤마 포맷팅)
     - Raw/Download URL (클릭 가능한 링크)
   - "이전" 버튼으로 시작 페이지로 복귀
   - 데이터가 없을 경우 1초 카운트다운 후 자동 리다이렉트

3. 에러 처리
   - 전역 에러 페이지
   - 404 페이지
   - 한국어 에러 메시지

<br />

![제품 흐름도](/docs/product-flow.png)

## 웹사이트 링크

웹: https://picture-assignment-web.vercel.app
스토리북: https://picture-assignment-storybook.vercel.app/?path=/docs/components-button--docs

