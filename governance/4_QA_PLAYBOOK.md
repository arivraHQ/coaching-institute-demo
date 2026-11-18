# 4. QA PLAYBOOK & ACCEPTANCE CRITERIA

## 1. Zero Fake Passes Philosophy
No task or milestone is marked complete based on code compilation alone. Every section and interactive flow must pass automated and manual headless browser verification with **Exit Code 0** and **0 console errors**.

---

## 2. Target Viewports & Responsive Breakpoints
1. **Mobile Baseline**: `375px × 812px` (iPhone 13 mini / standard viewport)
2. **Tablet Breakpoint**: `768px × 1024px` (iPad portrait)
3. **Desktop Primary**: `1440px × 900px` (MacBook / Standard HD monitor)
4. **Large Desktop**: `1920px × 1080px` (Full HD container integrity)

---

## 3. Section-by-Section Acceptance Checklist

| Section | Key Interaction & Visual Criteria | Pass Condition |
| :--- | :--- | :--- |
| **01. Navbar** | Announcement bar countdown ticks accurately; Logo sharp; "Book Free Demo" button transitions to yellow on hover; Mobile menu drawer works cleanly on 375px. | 0 overflow, no horizontal scroll. |
| **02. Hero** | Desktop 84px / Mobile 44px headline; Highlighter SVG draws behind "clarity"; Red-pen circle loops without jitter; Stats counter animates to values; Both CTAs open valid WhatsApp links. | Visual hierarchy verified; LCP < 1.8s. |
| **03. Results Board** | Asymmetric wall of tiles with staggered heights; student ranks, exams, and years legible; no uniform rigid 3x3 grid. | Smooth scrolling, zero image cutoffs. |
| **04. Courses** | Filter buttons for Class (9, 10, 11, 12, Dropper) and Exam (Foundation, JEE, NEET); Tabular row layout (NOT cards); Seat counter indicates scarcity; "Enquire" button prefills batch name into WhatsApp message. | Filter changes instant (<50ms), rows animate gracefully. |
| **05. Method** | 4-step sequential notebook pages with authentic Caveat margin notes; step numbers clearly delineated; tactile borders. | Legible typography, clear instructional hierarchy. |
| **06. Faculty** | Horizontal scroll layout with teacher backgrounds (IIT/NIT), years of experience, teaching philosophies; custom image wireframe briefs intact. | Horizontal touch scroll works smoothly without breaking page vertical scroll. |
| **07. Weekly Analytics** | SVG mock analytics dashboard displaying score trend curve and chapter-wise mastery bars; accessible tooltips or indicators. | 100% vector SVG, zero pixelation or SVG layout distortion. |
| **08. Scholarship Test** | High-contrast dark block; clear scholarship slabs (up to 100%); interactive form validating Name, Class, and School before opening WhatsApp with structured prefilled text. | Form validation works; WhatsApp link generated correctly. |
| **09. Fees & EMI** | Transparent fee table per batch; installment schedule detailed; clear "No Hidden Charges" guarantee note. | 100% financial clarity, parent trust verified. |
| **10. Testimonials** | 5 handwritten-style slips with 2 from parents; dates and student batches clear; authentic voices without hyperbolic corporate praise. | Tactile rotation/offset, zero visual clutter. |
| **11. FAQ** | 7 real questions with accessible accordion disclosure (`aria-expanded`, keyboard navigable with Tab and Enter). | Accordion transitions smooth without height jitter. |
| **12. Footer** | Complete Kanpur address, contact numbers, map wireframe, operating hours, and bold "Pehla class free hai." anchor line. | Semantic `<footer>` landmark, valid links. |

---

## 4. Automated Testing Suite (Playwright)
```bash
# Run headless browser test suite
npx playwright test

# Key automated assertions:
# 1. Page loads with HTTP 200 and zero uncaught JavaScript exceptions.
# 2. Hero highlighter SVG renders and stroke animation triggers.
# 3. WhatsApp CTA buttons contain encoded 'wa.me' targets with valid phone '+919000000000'.
# 4. Course filter tabs toggle correctly between Class 9, 10, 11, 12, and Droppers.
# 5. Mobile viewport (375px) has zero horizontal overflow (scrollWidth === clientWidth).
# 6. Lighthouse Performance >= 90 and Accessibility >= 95.
```

---

## 5. Console & Network Thresholds
- **Console Errors**: 0 (zero)
- **Console Warnings**: 0 (zero deprecation or hydration warnings)
- **LCP (Largest Contentful Paint)**: < 2.0s
- **CLS (Cumulative Layout Shift)**: < 0.05
- **FID / INP**: < 100ms
