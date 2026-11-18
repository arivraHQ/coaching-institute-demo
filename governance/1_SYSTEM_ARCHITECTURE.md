# 1. SYSTEM ARCHITECTURE BLUEPRINT

## 1. Project Overview & Objectives
- **Application**: Lakshya Academy Web Experience
- **Client**: Lakshya Academy, Kanpur
- **Archetype**: Bespoke Boutique Agency Portfolio Piece / Tactile Academic Notebook
- **Core Goals**:
  1. High-trust parent conversion (transparency, academic rigor, transparent fees).
  2. Student engagement (clarity, doubt resolution, realistic peer success).
  3. Frictionless direct WhatsApp booking for Free Demo Classes & Sunday 9 AM Scholarship Test.
  4. Showcase recorded-lecture companion app and structured weekly testing system.

---

## 2. Technology Stack
- **Framework**: Next.js 15 (App Router, Server Components + targeted Client Components)
- **Language**: Strict TypeScript (`strict: true`, zero `any`, strict null checks)
- **Styling**: Tailwind CSS v3/v4 configured with custom semantic tokens and graph-paper utilities
- **Animation**: Framer Motion (`framer-motion`), optimized with `useReducedMotion` and hardware-accelerated transforms
- **Fonts**: `next/font/google` with preloaded `Bricolage Grotesque`, `Public Sans`, and `Caveat`
- **Quality & Testing**: Playwright Headless Browser testing, Chrome DevTools console audit, Lighthouse CI audit

---

## 3. Directory & File Structure
```text
/
├── .agents/
│   ├── rules/
│   │   └── lakshya_design_system.md
│   └── PROJECT_MEMORY.md
├── governance/
│   ├── 1_SYSTEM_ARCHITECTURE.md
│   ├── 2_DESIGN_SYSTEM.md
│   ├── 3_DATA_CONTRACTS.md
│   ├── 4_QA_PLAYBOOK.md
│   └── 5_DEPLOYMENT_RUNBOOK.md
├── content/
│   └── site.ts               <-- SINGLE SOURCE OF TRUTH (All copy, NAP, fee slabs, faculty, FAQs)
├── public/
│   ├── fonts/
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.tsx         <-- Font injection, metadata, JSON-LD Schema
│   │   ├── page.tsx           <-- Assembled sections in sequence
│   │   └── globals.css        <-- Graph paper utility, token definitions, custom animations
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx     <-- Ink button with yellow hover & active state
│   │   │   ├── Highlighter.tsx <-- Yellow swipe reveal effect
│   │   │   ├── RedPenCircle.tsx <-- SVG hand-drawn circle with stroke-dashoffset
│   │   │   ├── MarginNote.tsx <-- Caveat teacher margin annotations
│   │   │   └── ImagePlaceholder.tsx <-- Plain wireframe block with explicit photo brief
│   │   └── sections/
│   │       ├── 01-Navbar.tsx
│   │       ├── 02-Hero.tsx
│   │       ├── 03-ResultsBoard.tsx
│   │       ├── 04-Courses.tsx
│   │       ├── 05-Method.tsx
│   │       ├── 06-Faculty.tsx
│   │       ├── 07-WeeklyAnalytics.tsx
│   │       ├── 08-ScholarshipTest.tsx
│   │       ├── 09-FeesTable.tsx
│   │       ├── 10-Testimonials.tsx
│   │       ├── 11-Faq.tsx
│   │       └── 12-Footer.tsx
│   └── lib/
│       ├── utils.ts           <-- cn helper, WhatsApp link generator
│       └── motion.ts          <-- Unified transition tokens [0.22, 1, 0.36, 1]
├── tests/
│   ├── visual.spec.ts         <-- Playwright desktop & mobile viewport checks
│   └── interaction.spec.ts    <-- Filter courses, WhatsApp link triggers, form submission
├── GEMINI.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 4. State & Rendering Rules
1. **Server-First Architecture**:
   - Content from `/content/site.ts` is rendered server-side wherever possible for optimal SEO, LCP < 2.0s, and instant initial paint.
   - Client components (`'use client'`) are strictly isolated to interactive subtrees:
     - Course filter tabs (Class / Exam selection)
     - Scholarship registration form (local state + WhatsApp redirection)
     - Accordion FAQ toggles
     - Framer Motion scroll and viewport triggers
2. **Zero Hardcoded Data**:
   - Never write inline student names, ranks, phone numbers, or fees in JSX components. Everything flows strictly from `content/site.ts`.
3. **Accessibility & Progressive Enhancement**:
   - Semantic HTML5 landmark tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - All interactive controls have visible focus rings (`focus-visible:ring-2 focus-visible:ring-ink`).
   - SVG icons must provide aria-hidden="true" or appropriate text descriptions.
