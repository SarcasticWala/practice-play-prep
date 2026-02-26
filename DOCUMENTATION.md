# TCS NQT Practice Platform — Technical Documentation

> **Version:** 1.0.0  
> **Last Updated:** February 26, 2026  
> **Author:** Ayan Das ([LinkedIn](https://www.linkedin.com/in/ayan-das-cse39/))  
> **Status:** Production-Ready

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [System Architecture](#2-system-architecture)
3. [Technology Stack](#3-technology-stack)
4. [Project Structure](#4-project-structure)
5. [Module Documentation](#5-module-documentation)
6. [Data Models & Interfaces](#6-data-models--interfaces)
7. [Feature Specifications](#7-feature-specifications)
8. [Routing & Navigation](#8-routing--navigation)
9. [State Management](#9-state-management)
10. [Design System](#10-design-system)
11. [Configuration](#11-configuration)
12. [Build & Deployment](#12-build--deployment)
13. [Testing](#13-testing)
14. [Known Limitations & Future Scope](#14-known-limitations--future-scope)
15. [Changelog](#15-changelog)

---

## 1. Executive Summary

### 1.1 Purpose
The **TCS NQT Practice Platform** is a browser-based quiz application designed to help candidates prepare for the TCS National Qualifier Test (NQT). It provides topic-wise practice tests and a full-length mock test simulating the actual TCS NQT examination pattern.

### 1.2 Key Capabilities
| Feature | Description |
|---|---|
| **Topic-Wise Practice** | 33 topics across Quantitative Aptitude & Logical Reasoning, each with up to 50 questions |
| **Mock Test Engine** | Full-length 56-question exam (26 Numerical + 30 Reasoning) with 60-minute timer |
| **Instant Feedback** | Answers revealed immediately with correct/incorrect highlighting and explanations |
| **Progress Tracking** | Persistent localStorage-based tracking of attempts, best scores, and percentages |
| **Bookmarking** | Save difficult questions for later review from any test |
| **Responsive Design** | Mobile-first UI with adaptive layouts for all screen sizes |

### 1.3 Target Users
- TCS NQT exam aspirants
- Campus placement candidates
- Aptitude practice seekers

---

## 2. System Architecture

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────┐
│                  CLIENT (Browser)                │
│                                                   │
│  ┌──────────┐  ┌──────────┐  ┌───────────────┐  │
│  │  React    │  │  React   │  │  React Router  │  │
│  │  Pages    │  │  Hooks   │  │  (v6)          │  │
│  └────┬─────┘  └────┬─────┘  └───────┬───────┘  │
│       │              │                │           │
│  ┌────▼──────────────▼────────────────▼───────┐  │
│  │           Application State                 │  │
│  │   (React useState + localStorage)           │  │
│  └────────────────────┬───────────────────────┘  │
│                       │                           │
│  ┌────────────────────▼───────────────────────┐  │
│  │         Static Question Bank               │  │
│  │   (TypeScript modules — no backend)        │  │
│  └────────────────────────────────────────────┘  │
│                                                   │
│  ┌────────────────────────────────────────────┐  │
│  │         localStorage Persistence           │  │
│  │   • tcs-nqt-progress (scores/attempts)     │  │
│  │   • tcs-nqt-bookmarks (saved questions)    │  │
│  └────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

### 2.2 Design Decisions

| Decision | Rationale |
|---|---|
| **No backend / database** | Offline-capable, zero infrastructure cost, instant load |
| **localStorage for persistence** | Simple, reliable for single-user progress tracking |
| **Static question bank** | Fast access, no API latency, bundled with app |
| **Instant answer reveal** | Better learning experience vs. end-of-test review only |
| **Client-side routing** | SPA for seamless navigation, no server round-trips |

---

## 3. Technology Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | React | 18.3.x | UI rendering, component architecture |
| **Language** | TypeScript | 5.x | Type safety, developer experience |
| **Build Tool** | Vite | 5.x | Fast HMR, optimized production builds |
| **Styling** | Tailwind CSS | 3.x | Utility-first CSS with design tokens |
| **UI Components** | shadcn/ui | latest | Accessible, customizable component library |
| **Routing** | React Router | 6.30.x | Client-side page routing |
| **State Fetching** | TanStack Query | 5.x | Async state management (future use) |
| **Fonts** | Inter + JetBrains Mono | — | Body text + timer display |

### 3.1 Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-router-dom": "^6.30.1",
  "tailwindcss-animate": "^1.0.7",
  "lucide-react": "^0.462.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0"
}
```

---

## 4. Project Structure

```
src/
├── App.tsx                     # Root component, route definitions
├── main.tsx                    # Application entry point
├── index.css                   # Global styles, design tokens, animations
├── vite-env.d.ts               # Vite type declarations
│
├── components/
│   ├── NavLink.tsx             # Navigation link component
│   └── ui/                    # shadcn/ui component library (50+ components)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── toast.tsx
│       └── ... (full shadcn/ui suite)
│
├── data/
│   ├── topics.ts              # Topic catalog (33 topics with metadata)
│   └── questions/
│       ├── index.ts           # Question bank aggregator & query function
│       ├── percentages.ts     # Percentage questions
│       ├── number-system.ts   # Number System, LCM & HCF questions
│       ├── profit-loss.ts     # Profit & Loss questions
│       ├── ratio.ts           # Ratios & Proportions questions
│       ├── work-time.ts       # Work & Time questions
│       ├── speed-time.ts      # Speed, Time & Distance questions
│       ├── geometry.ts        # Geometry questions
│       ├── area-perimeter.ts  # Area, Shapes & Perimeter questions
│       ├── equation.ts        # Equations questions
│       ├── age.ts             # Ages questions
│       ├── clock&calender.ts  # Clocks & Calendar questions
│       ├── series.ts          # Series & Progressions questions
│       ├── prob.ts            # Probability questions
│       ├── pnc.ts             # Permutations & Combinations questions
│       ├── allegation.ts      # Allegations & Mixtures questions
│       └── reasoning.ts       # General reasoning questions
│
├── hooks/
│   ├── use-progress.ts        # Progress tracking (localStorage)
│   ├── use-bookmarks.ts       # Question bookmarking (localStorage)
│   ├── use-mobile.tsx         # Mobile breakpoint detection
│   └── use-toast.ts           # Toast notification hook
│
├── lib/
│   └── utils.ts               # Utility functions (cn, etc.)
│
├── pages/
│   ├── Index.tsx              # Home page — topic grid, progress, bookmarks
│   ├── TestPage.tsx           # Topic practice test page
│   ├── MockTestPage.tsx       # Full mock test (TCS NQT pattern)
│   ├── ResultPage.tsx         # Test results & solutions review
│   └── NotFound.tsx           # 404 page
│
├── test/
│   ├── setup.ts               # Test environment setup
│   └── example.test.ts        # Example test file
│
└── types/
    └── quiz.ts                # Core type definitions
```

---

## 5. Module Documentation

### 5.1 Pages

#### `Index.tsx` — Home Page
**Responsibility:** Main landing page displaying topic catalog, progress dashboard, bookmarks panel, and mock test CTA.

| Section | Description |
|---|---|
| Header | App title and tagline |
| Mock Test CTA | Gradient card with "Start Mock Test" button |
| Progress Summary | Topics practiced, total attempts, bookmarks count |
| Bookmarks Panel | Expandable section showing all bookmarked questions with solutions |
| Topic Grid (Quantitative) | 18 topic cards with icons, names, question counts, and best scores |
| Topic Grid (Reasoning) | 15 topic cards with the same structure |
| Footer | Disclaimer + LinkedIn follow link |

**Key State:**
- `showBookmarks: boolean` — toggles bookmark panel visibility

---

#### `TestPage.tsx` — Topic Practice Test
**Responsibility:** Loads 50 questions for a selected topic with a per-question timer, instant feedback, skip/bookmark functionality.

| Feature | Implementation |
|---|---|
| Timer | `questions.length * 60` seconds (1 min per question), auto-submits at 0 |
| Answer Selection | Locks on first click, reveals correct answer immediately |
| Skip | Marks question as skipped (yellow), advances to next |
| Bookmark | Toggle via `useBookmarks()` hook, indicated by 📌/📎 icons |
| Navigation | Previous/Next buttons, clickable question number grid |
| Submit | Navigates to `/result` with full state payload |

**URL Pattern:** `/test/:topicId`

**State Shape:**
```typescript
{
  questions: Question[]          // Loaded from question bank
  currentIndex: number           // Active question index
  answers: Record<string, number | null>  // User selections
  revealed: Record<string, boolean>       // Shown answers
  skipped: Record<string, boolean>        // Skipped questions
  timeLeft: number               // Countdown in seconds
  submitted: boolean             // Prevents double-submit
}
```

---

#### `MockTestPage.tsx` — Full Mock Test
**Responsibility:** Simulates a complete TCS NQT exam with two sections and a 60-minute global timer.

**Exam Pattern:**
| Section | Questions | Topics Drawn From |
|---|---|---|
| Numerical Ability | 26 | 18 quantitative topics |
| Reasoning Ability | 30 | 15 reasoning topics |
| **Total** | **56** | **60 minutes** |

**Question Selection Algorithm:**
```
1. For each section, collect ALL questions from its topic pool
2. Shuffle the combined pool using Fisher-Yates algorithm
3. Slice to required count (26 or 30)
4. Flatten both sections into a single ordered array
```

**Section Management:**
- Tab-based section switching with answer counts
- "Skip Section" button to mark all unanswered questions as skipped
- Auto-detects current section based on `currentIndex`

---

#### `ResultPage.tsx` — Results & Solutions
**Responsibility:** Displays test performance metrics and optional question-by-question solutions.

**Data Flow:** Receives full test state via `react-router-dom` `location.state`.

**Metrics Displayed:**
| Metric | Calculation |
|---|---|
| Score Percentage | `(correct / totalQuestions) * 100` |
| Time Taken | `totalTime - timeLeft` → formatted as `Xm Ys` |
| Correct | Count of matching answers |
| Incorrect | `attempted - correct` |
| Unattempted | `totalQuestions - attempted` |

**Color Coding:**
- ≥70%: Green (success)
- ≥40%: Yellow (warning)
- <40%: Red (destructive)

**Solutions View:** Togglable per-question breakdown showing selected answer, correct answer (highlighted), and explanation text.

---

### 5.2 Custom Hooks

#### `useProgress()` — Progress Tracking Hook

**Storage Key:** `tcs-nqt-progress`

**Interface:**
```typescript
interface TopicProgress {
  topicId: string;
  bestScore: number;        // Highest correct count achieved
  bestPercentage: number;   // Highest percentage achieved
  totalQuestions: number;
  attempts: number;         // Number of test attempts
  lastAttempt: string;      // ISO 8601 timestamp
}
```

**API:**
| Method | Signature | Description |
|---|---|---|
| `progress` | `Record<string, TopicProgress>` | Current progress data |
| `saveResult` | `(topicId, correct, total) => void` | Records a test attempt |
| `getTopicProgress` | `(topicId) => TopicProgress \| null` | Gets single topic data |
| `clearProgress` | `() => void` | Resets all progress |

**Persistence:** Auto-syncs to `localStorage` via `useEffect` on state change.

---

#### `useBookmarks()` — Bookmark Management Hook

**Storage Key:** `tcs-nqt-bookmarks`

**Interface:**
```typescript
interface Bookmark {
  question: Question;     // Full question object
  topicId: string;
  topicName: string;
  addedAt: string;        // ISO 8601 timestamp
}
```

**API:**
| Method | Signature | Description |
|---|---|---|
| `bookmarks` | `Bookmark[]` | All bookmarked questions |
| `toggleBookmark` | `(question, topicId, topicName) => void` | Add/remove bookmark |
| `isBookmarked` | `(questionId) => boolean` | Check bookmark status |
| `clearBookmarks` | `() => void` | Remove all bookmarks |

---

### 5.3 Data Layer

#### `data/topics.ts` — Topic Catalog

Exports `topics: Topic[]` — a static array of 33 topics.

**Categories:**
- **Quantitative Aptitude** (18 topics): Percentages, Number System, Profit & Loss, Ratios, Work & Time, Speed/Time/Distance, Geometry, Area & Shapes, Equations, Ages, Clocks & Calendar, Series & Progressions, Probability, P&C, Allegations, Divisibility, Decimal Fractions, Averages
- **Logical Reasoning** (15 topics): Arrangements, Blood Relations, Coding-Decoding, Odd Man Out, Directions, Statement & Conclusion, Seating (Easy/Complex), Analogy, Math Operations, Symbols, Data Sufficiency, Meaningful Word, Number Series, General Reasoning

#### `data/questions/index.ts` — Question Bank

**Exports:** `getQuestions(topicId: string, count: number = 50): Question[]`

**Architecture:**
- Maintains a `Record<string, Question[]>` mapping topic IDs to question arrays
- 16 dedicated question files with unique content
- Remaining topics use remapped questions with unique IDs (e.g., `alg-1`, `br-1`)
- Returns sliced array up to `count` parameter

---

## 6. Data Models & Interfaces

### `quiz.ts` — Core Types

```typescript
// Individual question
interface Question {
  id: string;              // Unique identifier (e.g., "pct-1", "ns-3")
  question: string;        // Question text
  options: string[];       // Array of 4 answer options
  correctAnswer: number;   // Index (0-3) of correct option
  explanation: string;     // Solution explanation text
}

// Topic metadata
interface Topic {
  id: string;              // URL-safe identifier
  name: string;            // Display name
  icon: string;            // Emoji/symbol icon
  category: 'quantitative' | 'reasoning';
  questionCount: number;   // Expected question count (50)
}

// User's answer to a question
interface UserAnswer {
  questionId: string;
  selectedOption: number | null;  // null = unattempted
}

// Complete test result
interface TestResult {
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  score: number;
  timeTaken: number;       // Seconds
  answers: UserAnswer[];
  questions: Question[];
}
```

---

## 7. Feature Specifications

### 7.1 Instant Answer Feedback

**Trigger:** User clicks any option button.

**Behavior:**
1. Selected option is locked (disabled state)
2. Correct answer highlighted green (`border-success bg-success/10`)
3. If wrong: selected answer highlighted red (`border-destructive bg-destructive/10`)
4. Feedback banner displayed with ✅/❌ + explanation text
5. Question dot in nav grid updates color accordingly

**Constraint:** Answer cannot be changed once revealed (single-attempt per question).

### 7.2 Timer System

| Context | Duration | Behavior on Expiry |
|---|---|---|
| Topic Practice | `N × 60s` (N = question count) | Auto-submits test |
| Mock Test | 3600s (60 minutes) | Auto-submits test |

**Visual Indicators:**
- Normal: White/transparent background
- Low time (<60s for practice, <120s for mock): Red pulsing animation (`timer-pulse`)

### 7.3 Question Navigation

**Navigation Grid:** Horizontal scrollable row of numbered buttons.

**Color States:**
| State | Color | Indicator |
|---|---|---|
| Current | Accent (teal) | Scale 110% |
| Correct | Green | `bg-success/20` |
| Incorrect | Red | `bg-destructive/20` |
| Skipped | Yellow | `bg-warning/20` |
| Unanswered | Gray | `bg-muted` |

### 7.4 Mock Test Sections

Users can freely switch between sections via tabs. Each tab shows `answered/total` count. "Skip Section" marks all unanswered questions in the current section as skipped and moves to the next section.

---

## 8. Routing & Navigation

| Path | Component | Description |
|---|---|---|
| `/` | `Index` | Home page with topic grid |
| `/test/:topicId` | `TestPage` | Topic-specific practice test |
| `/mock-test` | `MockTestPage` | Full mock test |
| `/result` | `ResultPage` | Test results (receives state via `navigate`) |
| `*` | `NotFound` | 404 fallback |

**Data Flow Between Routes:**
```
Index → /test/:topicId → (submit) → /result (via location.state)
Index → /mock-test     → (submit) → /result (via location.state)
```

**Result State Payload:**
```typescript
{
  totalQuestions, attempted, correct, incorrect, unattempted,
  score, timeTaken, answers: UserAnswer[], questions: Question[],
  topicName: string, topicId: string
}
```

---

## 9. State Management

### 9.1 Strategy
The application uses **React local state** (`useState`) for ephemeral UI state and **localStorage** for persistent user data. No global state management library is used.

### 9.2 State Distribution

| State | Scope | Persistence | Location |
|---|---|---|---|
| Current question index | Page | Session only | `TestPage` / `MockTestPage` |
| User answers | Page | Session only | `TestPage` / `MockTestPage` |
| Timer countdown | Page | Session only | `TestPage` / `MockTestPage` |
| Revealed/skipped flags | Page | Session only | `TestPage` / `MockTestPage` |
| Progress data | Global | localStorage | `useProgress` hook |
| Bookmarks | Global | localStorage | `useBookmarks` hook |
| Show/hide bookmarks panel | Page | Session only | `Index` |

### 9.3 localStorage Schema

**Key: `tcs-nqt-progress`**
```json
{
  "percentages": {
    "topicId": "percentages",
    "bestScore": 42,
    "bestPercentage": 84,
    "totalQuestions": 50,
    "attempts": 3,
    "lastAttempt": "2026-02-26T10:30:00.000Z"
  }
}
```

**Key: `tcs-nqt-bookmarks`**
```json
[
  {
    "question": { "id": "pct-1", "question": "...", "options": [...], "correctAnswer": 2, "explanation": "..." },
    "topicId": "percentages",
    "topicName": "Percentages",
    "addedAt": "2026-02-26T10:15:00.000Z"
  }
]
```

---

## 10. Design System

### 10.1 Color Tokens (HSL)

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--background` | `216 20% 95%` | `213 30% 10%` | Page background |
| `--foreground` | `213 30% 15%` | `210 20% 92%` | Primary text |
| `--card` | `0 0% 100%` | `213 30% 14%` | Card surfaces |
| `--primary` | `213 50% 20%` | `174 60% 45%` | Headers, primary buttons |
| `--accent` | `174 60% 40%` | `174 60% 40%` | CTAs, interactive elements |
| `--success` | `142 60% 40%` | — | Correct answers |
| `--destructive` | `0 72% 51%` | `0 62.8% 30.6%` | Wrong answers, errors |
| `--warning` | `38 92% 50%` | — | Skipped questions |
| `--muted` | `210 20% 90%` | `213 25% 18%` | Inactive elements |

### 10.2 Typography

| Usage | Font | Weight |
|---|---|---|
| Body text | Inter | 400–800 |
| Timer display | JetBrains Mono | 500, 700 |

### 10.3 Custom Utility Classes

| Class | Purpose |
|---|---|
| `.font-mono-timer` | Monospace font for timer display |
| `.topic-card-hover` | Lift + shadow animation on topic cards |
| `.option-radio` | Styled radio-button option with border transitions |
| `.timer-pulse` | Pulsing opacity animation for low-time warning |
| `.fade-in` | Slide-up fade entrance animation |

### 10.4 Border Radius
Global: `--radius: 0.75rem` (12px)

---

## 11. Configuration

### 11.1 Vite Configuration (`vite.config.ts`)

```typescript
{
  server: { host: "::", port: 8080, hmr: { overlay: false } },
  plugins: [react(), componentTagger()],  // Tagger in dev only
  resolve: { alias: { "@": "./src" } }
}
```

### 11.2 Path Aliases
`@/` → `src/` (configured in `vite.config.ts` and `tsconfig.app.json`)

### 11.3 Build Output
Default Vite output to `dist/` directory.

---

## 12. Build & Deployment

### 12.1 Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev
```

### 12.2 Production Build

```bash
# Build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

### 12.3 Deployment
Deploy via Lovable's built-in publish feature:
**Project → Share → Publish**

Custom domain configuration available at:
**Project → Settings → Domains → Connect Domain**

---

## 13. Testing

### 13.1 Test Framework
- **Runner:** Vitest
- **Config:** `vitest.config.ts`
- **Setup:** `src/test/setup.ts`

### 13.2 Running Tests

```bash
npm run test
```

### 13.3 Test Coverage
Current test coverage is minimal (`example.test.ts`). Recommended areas for test expansion:

| Priority | Area | Type |
|---|---|---|
| P0 | `getQuestions()` function | Unit |
| P0 | `useProgress` hook | Unit |
| P0 | `useBookmarks` hook | Unit |
| P1 | Answer selection & reveal logic | Integration |
| P1 | Timer countdown & auto-submit | Integration |
| P2 | Mock test section navigation | E2E |

---

## 14. Known Limitations & Future Scope

### 14.1 Current Limitations

| # | Limitation | Impact |
|---|---|---|
| L1 | localStorage only — no cross-device sync | Progress lost on device/browser change |
| L2 | Some topics use remapped question sets | Repeated content across similar topics |
| L3 | No user authentication | Cannot track multiple users |
| L4 | No backend API | Cannot update questions without redeployment |
| L5 | Single-attempt per question | No "review & change" mode |

### 14.2 Future Roadmap

| Feature | Priority | Effort |
|---|---|---|
| Unique questions for all 33 topics | High | Medium |
| User authentication & cloud sync | High | High |
| Leaderboard / peer comparison | Medium | High |
| Detailed analytics dashboard | Medium | Medium |
| Question difficulty levels | Medium | Low |
| Timed section-wise mock tests | Low | Medium |
| PDF report generation | Low | Medium |
| Dark mode toggle UI | Low | Low |

---

## 15. Changelog

### v1.0.0 (February 2026)
- ✅ Initial release with 33 practice topics
- ✅ Full mock test engine (TCS NQT pattern: 56 questions, 60 min)
- ✅ Instant answer feedback with explanations
- ✅ Progress tracking via localStorage
- ✅ Question bookmarking system
- ✅ Skip question / skip section functionality
- ✅ Results page with solutions review
- ✅ Responsive design with light/dark mode support
- ✅ 16 dedicated question banks with 50 questions each

---

## Appendix A: Question ID Conventions

| Prefix | Topic |
|---|---|
| `pct-` | Percentages |
| `ns-` | Number System |
| `pl-` | Profit & Loss |
| `rat-` | Ratios |
| `wt-` | Work & Time |
| `std-` | Speed, Time & Distance |
| `geo-` | Geometry |
| `ap-` | Area & Perimeter |
| `eq-` | Equations |
| `age-` | Ages |
| `cc-` | Clocks & Calendar |
| `sp-` | Series & Progressions |
| `prob-` | Probability |
| `pnc-` | Permutations & Combinations |
| `alg-` | Allegations (remapped) |
| `r-` | Reasoning |

---

*This document is maintained alongside the codebase. For the latest version, refer to the repository's `DOCUMENTATION.md` file.*
