# Lakshya Academy — Project Memory & Architecture Log

## Project Identification
- **Client**: Lakshya Academy, Kanpur (Coaching for Class 9–10 Foundation, Class 11–12 PCM/PCB, JEE Main/Advanced, NEET)
- **Primary Archetype**: High-Ticket Editorial & Tactile Academic Notebook (Anti-AI-Slop)
- **Studio Standard**: Bespoke boutique product design, hand-crafted feel, zero generic templates.
- **Key Decision Makers**: Parents (credibility, fee transparency, safety, rigor).
- **Core Audience**: Students (clarity, doubt resolution, peer benchmarks, motivation).
- **Primary Conversion Hook**: WhatsApp demo class booking & Sunday 9 AM Scholarship Test registration.

---

## Architectural Log & Solved Problems
1. **Design Persona Alignment**:
   - Committed to "Tactile Academic Notebook" aesthetic: Faint graph-paper grids (4% opacity), 2px solid ink borders (`#101820`), warm parchment background (`#F6F5F0`), crisp paper slip cards (`#FFFFFF`), energetic marker highlighter (`#FFE14D`), and authentic correction red pen (`#E5383B`).
   - Strictly banned AI-slop tropes: no purple/indigo SaaS gradients, no bouncy Tailwind cards, no stock photos, no Inter/Roboto/Poppins, no buzzwords.
2. **Typography System**:
   - Headings: `Bricolage Grotesque` (bold, tight tracking, editorial sharpness).
   - Body & UI: `Public Sans` (clean, legible, authoritative).
   - Margin Notes & Editorial Annotations: `Caveat` (authentic teacher marginalia only).
3. **Data Architecture**:
   - Absolute Single Source of Truth at `/content/site.ts`. No hardcoded strings, pricing, phone numbers, or teacher bios in JSX components.
   - WhatsApp deep links generated via helper with prefilled URL-encoded messages tailored to each action.
4. **Motion Principles**:
   - Bespoke easing: `cubic-bezier(0.22, 1, 0.36, 1)` with 500–700ms duration.
   - Framer Motion integrated with `useReducedMotion` fallback to prevent layout thrashing and respect user accessibility preferences.
   - Hand-drawn SVG stroke animations for red-pen circles and marker swipe reveals.
5. **Milestone 1 — Navbar + Hero Review & Self-Critique**:
   - **Playwright Test**: `tests/navbar-hero.spec.ts` passed with Exit Code 0 and 0 console errors on Desktop Chrome (1440px) and Mobile Chrome (375px).
   - **Self-Critique Resolution**:
     - *Issue 1*: Initial `-z-10` on highlighter swipe pushed it behind section background without CSS isolation. Fixed by adding `isolate` and `z-0` on container and `z-10` on text.
     - *Issue 2*: Mobile card height clipping on photo placeholder box. Fixed with `aspect-auto sm:aspect-[16/9] min-h-[220px]`.
     - *Issue 3*: Next.js dev indicator badge in viewport. Disabled via `devIndicators: false` in `next.config.ts`.
   - **Current Status**: Awaiting user review & approval on Navbar + Hero before proceeding to remaining sections.
