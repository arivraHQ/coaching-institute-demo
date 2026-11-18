# Lakshya Academy — Kanpur (Coaching Institute Web Experience)

<p align="center">
  <img src="public/logo.png" alt="Lakshya Academy Logo" width="120" height="120" />
</p>

<p align="center">
  <b>A boutique agency-grade web experience for Lakshya Academy, Kakadeo, Kanpur.</b><br/>
  Coaching for Class 9–10 Foundation, Class 11–12 (PCM / PCB), JEE Main & Advanced, and NEET UG.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Playwright-E2E_Verified-green?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright" />
</p>

---

## 📌 Project Overview & Purpose

This repository contains the complete production-ready source code for **Lakshya Academy**, an offline classroom coaching institute located in Uttar Pradesh's prime student hub (Kakadeo, Kanpur).

The project was created to demonstrate an **anti-AI-slop, hand-crafted aesthetic** for high-ticket academic institutes. Rather than relying on generic EdTech SaaS gradients, floating gradient blobs, and fake smiling corporate stock photos, the UI is architected around the tactile visual language of a serious student's marked-up study notebook.

### Key Goals & Conversion Funnels
- **Primary Audience**: Students seeking concept clarity, peer benchmarks, and daily faculty doubt-clearing.
- **Decision Makers**: Parents evaluating fee transparency, faculty stability (IIT/NIT credentials), and weekly test rigor.
- **Conversion Pipelines**: Direct, frictionless WhatsApp bookings for **Free Demo Classes** and Sunday 9:00 AM **Scholarship Aptitude Tests (LSAT)**.

---

## 🎨 Design System: "Tactile Academic Notebook"

All styling references a centralized, unified design token architecture in `tailwind.config.ts`:

| Token | Hex Value | Representation |
| :--- | :--- | :--- |
| **`bg`** | `#F6F5F0` | Warm, unbleached notebook paper with faint 4% graph-paper grid lines |
| **`surface`** | `#FFFFFF` | Crisp white index cards and paper slips with 2px solid ink borders |
| **`text` / `primary`** | `#101820` | Deep contrast fountain pen ink |
| **`highlighter`** | `#FFE14D` | Vibrant fluorescent marker swipe layered organically behind key words |
| **`redpen`** | `#E5383B` | Teacher's grading ink for margin notes, checkmarks, and hand-drawn SVG animated circles |
| **`muted`** | `#6B7280` | Pencil graphite for batch timings, metadata, and exam guidelines |

### Typography Pairing
- **Headings**: `Bricolage Grotesque` (bold, tight `-0.03em` tracking, editorial authority)
  - Hero Display: `84px` desktop / `44px` mobile
  - Section Headings (H2): `52px` desktop / `34px` mobile
- **Body & UI**: `Public Sans` (clean, legible, natural English-Hindi conversational mix)
  - Standard Body: `17px`
- **Margin Notes ONLY**: `Caveat` (strictly reserved for teacher marginalia, advice stamps, and scorecard remarks)

---

## 📐 The 12 Sections Architecture

Every section features a distinct, non-uniform layout tailored to its editorial purpose:

1. **Navbar & Announcement**: Lakshya logo, live countdown timer (*"Sunday Scholarship Test: Sunday 9 AM"*), navigation anchors, ink CTA with yellow hover, and a responsive mobile drawer menu.
2. **Hero Section**: 84px display headline (*"Padhai ka matlab, [clarity] hona chahiye."*) with yellow highlighter swipe, dual WhatsApp CTAs, candid classroom photo wireframe brief, and an authentic report-card scorecard block (*94% improvement, 38 in top 500, max 40 students/batch*).
3. **Results Board**: Asymmetric wall of topper tiles in varied sizes (featured AIR 142 IIT Bombay, NEET 705/720, compact percentile tiles) with tilt rotations and physical Kanpur ledger verification banner.
4. **Courses & Batches**: Filterable list by Class (9, 10, 11, 12, Dropper) and Target Exam. Tabular batch rows (strictly **not cards**) featuring seat scarcity trackers (*"Only 5 seats left"*), fee schedules, and direct WhatsApp enquiry.
5. **Teaching Method**: 4-step notebook cycle (*Buniyaad, Riyaaz, Pariksha, Nidaan*) styled as ruled pages with handwritten Caveat teacher margin notes.
6. **Faculty Showcase**: Horizontal smooth-scroll deck of permanent core teachers (IIT Kanpur, GSVM Medical, IIT Roorkee, IIT BHU backgrounds, 13–16 years experience, and teaching philosophies).
7. **Weekly Analytics Dashboard**: Vector SVG mock diagnostics dashboard featuring a 5-week score progression curve comparing student vs. batch average, plus chapter-wise mastery progress bars.
8. **Scholarship Aptitude Test**: High-contrast dark block (`#101820`), merit discount matrix up to 100%, and interactive WhatsApp slot registration form with prefilled admit card request.
9. **Fees & EMI Structure**: Transparent batch fee matrix with installment breakdowns, included test series and study material checkmarks, and a 4-point *"No Hidden Charges Pledge"*.
10. **Parent & Student Voices**: 5 handwritten-style paper slips (including 2 detailed parent testimonials from a medical officer and local business owner in Kanpur).
11. **FAQ Accordion**: 7 real questions with accessible keyboard accordion toggles covering batch sizes (35-40 cap), free demos, refund policies, same-day doubts, and lecture app backups.
12. **Footer**: Iconic *"Pehla class free hai."* stamp, complete Kakadeo campus address and landmarks, map wireframe, operating hours, and direct call/WhatsApp triggers.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or 20.x or 22.x
- npm 9+ or pnpm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/arivraHQ/coaching-institute-demo.git

# Navigate to directory
cd coaching-institute-demo

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Verification Suite

The repository includes a Playwright test suite validating visual layout, zero hydration errors, and Core Web Vitals thresholds.

```bash
# Run all end-to-end tests across Desktop & Mobile
npx playwright test

# Run performance and accessibility audit
npx playwright test tests/lighthouse-audit.spec.ts

# Production build check
npm run build
```

### Audit Results
- **Core Web Vitals**: LCP = 1.38s (< 2.0s threshold), FCP = 1.38s, CLS < 0.02
- **Console Errors**: 0 uncaught exceptions or hydration warnings
- **Responsive Layout**: Verified on 1440px Desktop and 375px Mobile with 0 horizontal overflow
- **Accessibility**: Semantic landmark HTML5 structure, ARIA expanded state toggles, keyboard focus rings

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components + static export optimization)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animation**: [Framer Motion v12](https://motion.dev/) (SSR-safe, hardware-accelerated transforms, reduced-motion compliant)
- **Icons**: [Lucide React](https://lucide.dev/) (Clean inline SVG vectors, 0 emojis)
- **Fonts**: Next.js Google Fonts (`Bricolage Grotesque`, `Public Sans`, `Caveat`)
- **Testing**: [Playwright](https://playwright.dev/)

---

## 📄 License & Attribution

Designed and developed as an agency portfolio demonstration by [arivraHQ](https://github.com/arivraHQ).
All rights reserved.
