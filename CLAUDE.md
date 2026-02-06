# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소의 코드를 다룰 때 참고하는 지침입니다.

## 프로젝트 목적

Next.js 생태계 라이브러리의 최신 안정 버전을 유지하기 위한 보일러플레이트 프로젝트입니다. 모든 의존성을 안전하고 안정적인 최신 릴리스로 유지하는 것이 목표입니다.

## 언어

모든 주석, 문서, 설명은 반드시 한글로 작성합니다. 코드 자체는 영어를 사용합니다.

## 명령어

```bash
pnpm dev          # 개발 서버 실행
pnpm build        # 프로덕션 빌드
pnpm lint         # ESLint 실행
pnpm ui           # shadcn/ui 컴포넌트 추가 (npx shadcn@latest)
```

## 아키텍처

App Router를 사용하는 Next.js 16 보일러플레이트이며, React 19와 Tailwind CSS v4를 사용합니다.

### 디렉토리 구조

- `src/app/` - Next.js App Router 페이지 및 레이아웃 (Server Component만 허용)
- `src/components/` - 재사용 가능한 UI 컴포넌트
- `src/features/` - 기능별 컴포넌트 (클라이언트 로직 포함)
- `src/services/` - 서비스 래퍼 (logger, storage)
- `src/providers/` - React 컨텍스트 프로바이더 (theme, react-query)
- `src/store/` - Zustand 스토어
- `src/_queries/` - React Query 훅 (백엔드 API 구조 유지)
- `src/lib/` - 유틸리티 함수
- `src/constants/` - 상수 및 설정 값

### 핵심 패턴

**서버/클라이언트 컴포넌트 분리**: `src/app/` 내 파일은 반드시 Server Component를 유지해야 합니다. page.tsx나 layout.tsx에 `'use client'`를 추가하지 않습니다. 클라이언트 로직은 `src/features/` 또는 `src/components/`에 별도 컴포넌트로 분리합니다.

**index.ts 파일 생성 금지**: 직접 파일 import만 사용합니다 (예: `@/features/user/user-profile`, `@/features/user` 금지).

**단일 파일 책임 원칙**: 하나의 파일에 하나의 기능/책임만 담습니다. `auth-actions.ts`를 `login-action.ts`, `logout-action.ts` 등으로 분리합니다.

**외부 API 코드 격리**: 백엔드 API 구조는 `src/_queries/`에 그대로 유지하며, 백엔드 네이밍을 보존합니다.

**컴포넌트 분리 기준**: props에 따른 거대한 `if/else` 분기를 지양합니다. `isAdmin`, `isGuest` 같은 역할 props로 UI를 분기하는 만능 컴포넌트 대신, `AdminHeader`, `UserHeader`처럼 역할별로 명확히 분리합니다. Boolean props가 2개 이상이거나 props 이름이 권한/역할을 나타내면 컴포넌트를 분리합니다.

### features 디렉토리 구조

`src/features/`는 기능(도메인) 단위로 클라이언트 컴포넌트를 관리하는 디렉토리입니다.

- **구조**: `src/features/<도메인>/` 하위에 해당 기능의 컴포넌트, 훅, 유틸리티를 배치합니다.
- **역할**: `src/app/`의 Server Component에서 import하여 사용하는 Client Component의 주요 위치입니다.
- **`src/components/`와의 구분**: 여러 기능에서 공통으로 재사용하는 UI는 `src/components/`에, 특정 기능에 종속된 UI는 `src/features/`에 배치합니다.
- **예시**:
  - `src/features/auth/login-form.tsx` - 로그인 폼 (auth 기능 전용)
  - `src/features/user/user-profile-card.tsx` - 사용자 프로필 카드 (user 기능 전용)
  - `src/components/ui/button.tsx` - 범용 버튼 (여러 기능에서 공통 사용)

## 코딩 표준

**로깅**: `@/services/logger`의 `logger`를 사용합니다. 직접적인 `console.*` 호출은 ESLint에 의해 차단됩니다.

**스토리지**: `@/services/local-storage`의 `localStorage` 또는 `@/services/session-storage`의 `sessionStorage`를 사용합니다. 브라우저 API 직접 접근은 ESLint에 의해 차단됩니다.

**아이콘**: 항상 `Icon` 접미사를 사용합니다 (예: lucide-react에서 `ArrowRight`가 아닌 `ArrowRightIcon`).

**Tailwind**: 정사각 요소에는 `w-4 h-4` 대신 `size-4`를 사용합니다.

**파일 네이밍**: kebab-case, 축약어 금지. 서술적 접미사 사용: `-page`, `-section`, `-card`, `-form`, `-modal`, `-dialog`.

## 주석

구현 세부사항이 아닌, "계약(보존해야 할 동작)"을 설명하는 주석을 작성합니다. 강제 리마운트를 위한 React `key` 변경 등 비자명한 선택의 의도를 문서화합니다.

## 커밋

형식: `<type>(<scope>): <요약>`

타입: feat, fix, docs, style, refactor, test, build, ci, perf, chore
