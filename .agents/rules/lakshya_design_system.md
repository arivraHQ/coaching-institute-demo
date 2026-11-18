# LAKSHYA ACADEMY — WORKSPACE RULES & DESIGN CONTRACT

## DESIGN SYSTEM (MANDATORY TOKENS)
Never hardcode raw colors or fonts in JSX/TSX. Always reference the unified tokens:
- `bg`: `#F6F5F0` (warm notebook paper)
- `surface`: `#FFFFFF` (crisp paper slip)
- `text`: `#101820` (deep ink)
- `primary`: `#101820`
- `highlighter`: `#FFE14D` (vibrant marker yellow)
- `redpen`: `#E5383B` (teacher's correction red pen)
- `muted`: `#6B7280` (pencil gray / secondary)

### Typography
- Headings: `Bricolage Grotesque` (bold, tight)
- Body: `Public Sans`
- Margin Notes ONLY: `Caveat` (small teacher-style annotations, never used for headings or primary body copy)
- Scale:
  - Hero: 84px desktop / 44px mobile
  - H2: 52px desktop / 34px mobile
  - Body: 17px

### Shape & Tactile Motifs
- Border Radius: `10px`
- Borders: `2px solid #101820` on key blocks and cards
- Background: Faint graph-paper grid pattern on section backgrounds (`4%` opacity)
- Signature Motifs:
  - Yellow highlighter swipe (`#FFE14D`) behind key words (e.g. "clarity")
  - Red-pen circles and underlines (`#E5383B`) as hand-drawn inline SVGs with `stroke-dashoffset` animation
  - Handwritten tick marks and teacher margin notes
  - Asymmetric, notebook-margin layout feel; stat blocks styled like marks on a report card

### Motion & Interaction
- Easing: `[0.22, 1, 0.36, 1]`
- Duration: 500ms – 700ms
- Highlighter swipes draw in once on scroll
- Red-pen circles draw in via `stroke-dashoffset`
- Animated counter numerals for stat blocks
- Mandatory `prefers-reduced-motion` compliance

---

## BANNED PATTERNS (ZERO TOLERANCE)
- ❌ NO purple/blue SaaS gradients, NO glassmorphism, NO floating gradient blobs.
- ❌ NO Inter, Roboto, Poppins, or Montserrat fonts.
- ❌ NO emoji or generic icon-in-circle decorations.
- ❌ NO uniform 3-equal-cards grids or centered-everything lazy layouts.
- ❌ NO AI buzzwords: "revolutionize", "elevate", "seamless", "unlock your potential", "shape your future", "100% selection guaranteed".
- ❌ NO stock graduation-cap, lightbulb, or fake smiling corporate stock photos.
- ❌ NO generic edtech blue-orange cookie-cutter template looks.
- ❌ NO unverified "done" claims. Every milestone must be validated in headless Chrome.
