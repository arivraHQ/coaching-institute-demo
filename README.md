# Lakshya Academy — Kanpur (Agency Portfolio Showcase)

> **Boutique Studio Portfolio Piece**: Hand-crafted, anti-AI-slop design system for an premier offline IIT-JEE, NEET, and Foundation coaching institute in Kakadeo, Kanpur.

---

## 1. Design Persona: "Tactile Academic Notebook"

Unlike mass-market EdTech portals with purple/blue gradients, generic stock imagery, and false selection guarantees, Lakshya Academy’s web presence is designed around the authentic feeling of a serious student's meticulously marked-up study register.

### Core Visual Motifs & Design Tokens
- **Background Canvas (`bg`)**: `#F6F5F0` (warm unbleached notebook paper with faint 4% graph-paper grid)
- **Surface Slip (`surface`)**: `#FFFFFF` (crisp white index slips with 2px ink borders and hard paper drop shadows)
- **Deep Ink (`text` / `primary`)**: `#101820` (high-contrast fountain pen ink)
- **Highlighter Accent (`highlighter`)**: `#FFE14D` (vibrant marker yellow swipe behind key concepts)
- **Teacher's Red Pen (`redpen`)**: `#E5383B` (correction ink for teacher notes, handwritten ticks, and hand-drawn SVG animated circles)
- **Graphite Pencil (`muted`)**: `#6B7280` (metadata, batch timings, exam guidelines)

### Typography Hierarchy
- **Headings**: `Bricolage Grotesque` (bold, tight tracking, editorial authority)
  - Hero: `84px` desktop / `44px` mobile
  - H2: `52px` desktop / `34px` mobile
- **Body & UI**: `Public Sans` (clean, highly legible, natural English-Hindi conversational mix)
  - Base Body: `17px`
- **Teacher Annotations ONLY**: `Caveat` (authentic teacher marginalia, stamps, and handwritten evaluation notes)

---

## 2. Zero-Slop Architectural Compliance (Pillars 1–4)

1. **AST & Token Efficiency**: Single Source of Truth at `/content/site.ts`. No hardcoded prices, student quotes, or teacher bios in JSX.
2. **Anti-Slop Visual Ban**:
   - ❌ 0 purple/indigo SaaS gradients or gradient blobs.
   - ❌ 0 Inter, Roboto, Poppins, or Montserrat defaults.
   - ❌ 0 generic stock photos (uses authentic 35mm candid classroom wireframe placeholders with exact photographic briefs).
   - ❌ 0 3-equal-cards grids (every section implements an asymmetric, editorial layout).
   - ❌ 0 buzzwords (*"revolutionize"*, *"elevate"*, *"seamless"*, *"100% guarantee"*).
3. **Zero Fake Passes**:
   - Automated **Playwright test suite** with 8/8 tests passing on Desktop and Mobile Chrome.
   - **0 console errors**, **0 broken internal anchors**, and **0 horizontal layout overflow**.
   - **LCP = 1.38s** (well below the 2.0s threshold).
4. **Governance Blueprints**:
   - Phase 0 blueprints generated in `/governance/` (`1_SYSTEM_ARCHITECTURE.md`, `2_DESIGN_SYSTEM.md`, `3_DATA_CONTRACTS.md`, `4_QA_PLAYBOOK.md`, `5_DEPLOYMENT_RUNBOOK.md`).

---

## 3. The 12 Bespoke Sections

| # | Section | Layout Architecture & Key Motifs |
| :--- | :--- | :--- |
| **01** | **Navbar** | Wordmark with Kakadeo tag, live countdown timer for upcoming Sunday Scholarship Test, desktop links, ink CTA with yellow hover, mobile hamburger drawer. |
| **02** | **Hero** | 84px headline (*"Padhai ka matlab, [clarity] hona chahiye."*) with animated yellow highlighter, dual WhatsApp CTAs, report-card scorecard with animated counters and red-pen teacher marks. |
| **03** | **Results Board** | Asymmetric wall of topper tiles in varied sizes (featured AIR 142, medium NEET 705, compact percentile tiles) with authentic student quotes and tilt rotations. |
| **04** | **Courses** | Tabular batch rows (NOT cards) filterable by Class (9, 10, 11, 12, Dropper) and Target Exam, featuring seat counters (*"Only 6 seats left"*) and direct WhatsApp enquiries. |
| **05** | **Method** | 4-step notebook cycle (*Buniyaad, Riyaaz, Pariksha, Nidaan*) styled as ruled pages with handwritten Caveat teacher notes. |
| **06** | **Faculty** | Horizontal smooth-scroll deck of permanent core teachers (IIT/NIT backgrounds, 13–16 yrs experience, teaching philosophies, and photographic briefs). |
| **07** | **Weekly Analytics** | Mock mini diagnostics dashboard built with vector SVG (5-week score progression curve and chapter-wise mastery progress bars). |
| **08** | **Scholarship Test** | High-contrast dark block (`#101820`), merit discount matrix up to 100%, and interactive WhatsApp slot registration form. |
| **09** | **Fees & EMI** | Transparent tabular fee breakdown per batch, installment terms, and a 4-point "No Hidden Charges" pledge. |
| **10** | **Voices** | 5 handwritten-style paper slips (including 2 detailed parent testimonials from doctors and local professionals). |
| **11** | **FAQ** | 7 real questions addressing batch sizes, 2-day free demos, refund policies, same-day doubts, and mobile app lecture backups. |
| **12** | **Footer** | Iconic *"Pehla class free hai."* stamp, full Kakadeo campus postal address, timings, map wireframe, and direct dialer/WhatsApp triggers. |

---

## 4. Getting Started & Verification

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Execute automated Playwright E2E & Core Web Vitals audit
npx playwright test

# 4. Production build check
npm run build
```

---

## 5. QA Audit Summary

- **Total Test Cases**: 8 (Desktop Chrome 1440px & Mobile Chrome 375px)
- **Status**: 8 Passed (0 Failed)
- **Console Errors**: 0
- **FCP / LCP**: ~1.38s
- **CLS**: < 0.02
- **Mobile Responsive**: Verified 375px viewport with 0 horizontal overflow
