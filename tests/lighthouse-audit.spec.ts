import { test, expect } from "@playwright/test";

test.describe("Performance & Accessibility Audit", () => {
  test("Core Web Vitals & Accessibility Check", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    const startTime = Date.now();
    await page.goto("http://localhost:3000", { waitUntil: "load" });
    const loadTime = Date.now() - startTime;

    // Evaluate Performance Metrics via Performance Navigation Timing API
    const metrics = await page.evaluate(async () => {
      const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType("paint");
      const fcp = paintEntries.find((entry) => entry.name === "first-contentful-paint")?.startTime || 0;

      // Estimate LCP via PerformanceObserver
      let lcp = 0;
      await new Promise<void>((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            lcp = entries[entries.length - 1].startTime;
          }
        });
        observer.observe({ type: "largest-contentful-paint", buffered: true });
        setTimeout(resolve, 500);
      });

      return {
        domInteractive: navEntry.domInteractive,
        domContentLoaded: navEntry.domContentLoadedEventEnd,
        loadComplete: navEntry.loadEventEnd,
        fcp,
        lcp: lcp || fcp,
      };
    });

    console.log("Performance Audit Results:", {
      totalLoadMs: loadTime,
      fcpMs: Math.round(metrics.fcp),
      lcpMs: Math.round(metrics.lcp),
      domContentLoadedMs: Math.round(metrics.domContentLoaded),
    });

    // Assert LCP < 2000ms threshold from Pillar 3
    expect(metrics.lcp).toBeLessThan(2000);

    // Accessibility Checks:
    // 1. Check all images / image placeholders have accessible aria-labels or alt
    const imagesWithoutAlt = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll("img"));
      return imgs.filter((img) => !img.hasAttribute("alt")).length;
    });
    expect(imagesWithoutAlt).toBe(0);

    // 2. Check heading hierarchy
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1); // Exact single primary H1 on page

    // 3. Check all buttons have accessible names
    const buttonAccessibleNames = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll("button"));
      return buttons.filter((b) => !b.innerText.trim() && !b.getAttribute("aria-label")).length;
    });
    expect(buttonAccessibleNames).toBe(0);

    // 4. Check zero broken internal anchors
    const anchorHrefs = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll("a[href^='#']"));
      return anchors.map((a) => a.getAttribute("href")?.substring(1)).filter(Boolean);
    });

    for (const id of anchorHrefs) {
      if (id) {
        const exists = await page.locator(`#${id}`).count();
        expect(exists).toBeGreaterThan(0);
      }
    }
  });
});
