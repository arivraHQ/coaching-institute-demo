# 5. DEPLOYMENT & LAUNCH RUNBOOK

## 1. Production Build & Integrity Gate
Before any build is packaged or approved:
1. **TypeScript Verification**: `npx tsc --noEmit` must pass with 0 errors.
2. **ESLint / Next Lint**: `npm run lint` must exit cleanly.
3. **Next.js Production Build**: `npm run build` must compile static SSG/SSR pages without runtime bailout.
4. **Git Hygiene**: Clean working directory, sensible commit messages (`feat: <section> section`).

---

## 2. Environment Variables & Third-Party Config
This project is architected with complete privacy and zero client-side credential leaks:
```env
# Optional Analytics / Environment Flags
NEXT_PUBLIC_APP_ENV=production
NEXT_PUBLIC_SITE_URL=https://lakshya-academy-kanpur.demo
NEXT_PUBLIC_WHATSAPP_NUMBER=+919000000000
```

---

## 3. SEO, Meta Tags & Schema.org JSON-LD
The `src/app/layout.tsx` injects full JSON-LD structured data for local educational institutions:

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Lakshya Academy",
  "description": "Premier Coaching for Class 9-10 Foundation, Class 11-12 PCM/PCB, JEE Main & Advanced, and NEET in Kanpur.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kakadeo Coaching Hub",
    "addressLocality": "Kanpur",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "208025",
    "addressCountry": "IN"
  },
  "telephone": "+91-9000000000",
  "openingHours": "Mo-Sa 08:00-20:00, Su 09:00-14:00",
  "priceRange": "₹₹",
  "areaServed": "Kanpur, Unnao, Lucknow"
}
```

---

## 4. Pre-Launch Verification Checklist
- [ ] No placeholder `lorem ipsum` in any component.
- [ ] All phone links initiate dialer (`tel:+919000000000`) and WhatsApp links initiate web/app WhatsApp with encoded messages.
- [ ] Responsive testing confirmed on iOS Safari and Android Chrome simulations.
- [ ] Favicon, OpenGraph (`og:image`), and Twitter cards configured.
- [ ] Lighthouse audit scores:
  - Performance: ≥ 90
  - Accessibility: ≥ 95
  - Best Practices: ≥ 95
  - SEO: ≥ 95
- [ ] Final git status verified. (Strict mandate: **DO NOT PUSH** to remote).
