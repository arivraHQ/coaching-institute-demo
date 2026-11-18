# 2. DESIGN SYSTEM SPECIFICATION

## 1. Visual Direction: "Tactile Academic Notebook"
A pro-studio, hand-crafted aesthetic representing rigorous study, mental clarity, and genuine mentorship. Reminiscent of a high-achieving student's meticulously marked-up notebook rather than a generic venture-backed EdTech app.

---

## 2. Color Palette & Exact Hex Tokens
All colors are configured in Tailwind and CSS variables:

| Token Name | Hex Code | Role | Description |
| :--- | :--- | :--- | :--- |
| `bg` | `#F6F5F0` | Primary Canvas | Warm unbleached notebook paper / parchment |
| `surface` | `#FFFFFF` | Element Surface | Crisp white index cards / paper slips |
| `text` / `primary` | `#101820` | Ink / Contrast | Deep fountain pen ink; high contrast readability |
| `highlighter` | `#FFE14D` | Accent Highlight | Fluorescent yellow highlighter swipe |
| `redpen` | `#E5383B` | Editorial Correction | Teacher's grading red ink for notes, ticks, and circles |
| `muted` | `#6B7280` | Pencil Graphite | Secondary text, subtle borders, metadata labels |
| `border` | `#101820` | Tactile Outline | Crisp 2px ink borders defining key structural blocks |

---

## 3. Typography Scale & Pairings
Loaded via `@next/font/google` with optimal display swap:

1. **Headings**: `Bricolage Grotesque`
   - Weight: `700` (Bold)
   - Tracking: `-0.03em` (Tight, editorial, punchy)
   - Hero: `84px` desktop / `44px` mobile (`line-height: 1.05`)
   - H2 (Section): `52px` desktop / `34px` mobile (`line-height: 1.15`)
   - H3 (Subheadings): `28px` desktop / `22px` mobile
2. **Body & Interface**: `Public Sans`
   - Weights: `400` (Regular), `500` (Medium), `600` (Semi-Bold)
   - Base Body: `17px` (`line-height: 1.6`)
   - Small UI / Labels: `14px` (`line-height: 1.4`)
   - Micro / Metadata: `12px` (`line-height: 1.3`, uppercase tracking `+0.05em`)
3. **Teacher Annotations ONLY**: `Caveat`
   - Weight: `600` (Semi-Bold handwritten)
   - Usage: Margin notes, teacher stamps, handwritten callouts next to stats and course rows. Never used for body paragraphs or primary navigation.

---

## 4. Spacing, Shapes & Tactile Motifs
- **Corner Radius**: `10px` (`rounded-[10px]`)
- **Key Block Borders**: `2px solid #101820`
- **Graph-Paper Grid**: Background SVG pattern with 20px x 20px grid at `4%` opacity (`rgba(16, 24, 32, 0.04)`)
- **Yellow Highlighter**: Hand-drawn swipe SVG or pseudo-element layered behind key words (`z-[-1]`) with organic skew.
- **Red Pen Circles & Underlines**: Inline vector paths animated with `stroke-dasharray` and `stroke-dashoffset` to mimic live hand circling.
- **Stat Blocks**: Styled like graded exam scorecards (e.g. `94/100`, red-ink tick marks, date stamps).

---

## 5. Motion Tokens & Physics
- **Global Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (snappy entry, graceful natural settling)
- **Durations**:
  - Micro-interactions (hover, focus, tab switch): `200ms`
  - Content reveals & scroll entrances: `500ms – 700ms`
  - Highlighter swipe & red pen stroke draw: `600ms`
- **Accessibility**: All animations wrapped in `@media (prefers-reduced-motion: reduce)` returning instantaneous static renders.

---

## 6. Prohibited Patterns (Banned List)
- ❌ No gradients of any kind (strictly ban purple/indigo SaaS blobs).
- ❌ No glassmorphism, blur backdrops (`backdrop-blur`), or floating pastel shapes.
- ❌ No Inter, Roboto, Poppins, or Montserrat typography.
- ❌ No generic emoji icons or icon-in-circle badges.
- ❌ No 3-column equal card grids; every section must use an asymmetric, editorial layout.
- ❌ No false claims or buzzwords ("revolutionize", "elevate", "seamless", "100% guarantee").
