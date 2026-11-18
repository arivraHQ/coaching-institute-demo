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
5. **Governance Blueprints**:
   - Phase 0 blueprints generated under `/governance/` before any feature implementation.
