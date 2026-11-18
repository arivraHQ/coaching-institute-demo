import { test, expect } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";

test.describe("Lakshya Academy Full Site QA Suite", () => {
  test("Desktop (1440px) full audit & section screenshots", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    const screenshotsDir = path.join(process.cwd(), "screenshots");
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    // Assert all 12 sections exist and are visible
    // 01. Navbar
    await expect(page.locator("header").getByText("LAKSHYA")).toBeVisible();
    // 02. Hero
    await expect(page.locator("main").getByText("Padhai ka matlab,")).toBeVisible();
    // 03. Results
    await expect(page.locator("#results")).toBeVisible();
    await expect(page.locator("#results").getByText("Aarav Srivastava")).toBeVisible();
    // 04. Courses
    await expect(page.locator("#courses")).toBeVisible();
    await expect(page.locator("#courses").getByText("Lakshya Shikhar Foundation")).toBeVisible();
    // 05. Method
    await expect(page.locator("#method")).toBeVisible();
    await expect(page.locator("#method").getByText("First-Principle Concepts")).toBeVisible();
    // 06. Faculty
    await expect(page.locator("#faculty")).toBeVisible();
    await expect(page.locator("#faculty").getByRole("heading", { name: "Er. Alok Sharma" })).toBeVisible();
    // 07. Analytics
    await expect(page.locator("#analytics")).toBeVisible();
    await expect(page.locator("#analytics").getByText("Sunday Mock Score Progression")).toBeVisible();
    // 08. Scholarship
    await expect(page.locator("#scholarship")).toBeVisible();
    await expect(page.locator("#scholarship").getByText("Top 3 Rankers")).toBeVisible();
    // 09. Fees
    await expect(page.locator("#fees")).toBeVisible();
    await expect(page.locator("#fees").getByText("Annual Tuition Fee")).toBeVisible();
    // 10. Testimonials
    await expect(page.locator("#testimonials")).toBeVisible();
    await expect(page.locator("#testimonials").getByText("Dr. Rajeshwar Bajpai")).toBeVisible();
    // 11. FAQ
    await expect(page.locator("#faq")).toBeVisible();
    // 12. Footer
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.locator("footer").getByText("Pehla class free hai.")).toBeVisible();

    // Test Course Filter interaction
    const class11Btn = page.locator("#courses").getByRole("button", { name: "Class 11" });
    await class11Btn.click();
    await expect(page.locator("#courses").getByText("JEE Pinnacle (Class 11 PCM)")).toBeVisible();
    await expect(page.locator("#courses").getByText("Lakshya Shikhar Foundation (Class 9)")).not.toBeVisible();

    // Reset filter
    await page.locator("#courses").getByRole("button", { name: "All" }).first().click();
    await expect(page.locator("#courses").getByText("Lakshya Shikhar Foundation (Class 9)")).toBeVisible();

    // Test FAQ Accordion interaction
    const secondFaq = page.locator("#faq").getByText("Demo class kaise book karein");
    await secondFaq.click();
    await expect(page.locator("#faq").getByText("attend 2 consecutive days")).toBeVisible();

    // Take Desktop Full Page Screenshot
    await page.screenshot({
      path: path.join(screenshotsDir, "full-site-1440px.png"),
      fullPage: true,
    });

    // Zero console errors assertion
    expect(consoleErrors).toEqual([]);
  });

  test("Mobile (375px) full audit & section screenshots", async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    const screenshotsDir = path.join(process.cwd(), "screenshots");

    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    // Verify all key sections in mobile
    await expect(page.locator("header").getByText("LAKSHYA")).toBeVisible();
    await expect(page.locator("#results")).toBeVisible();
    await expect(page.locator("#courses")).toBeVisible();
    await expect(page.locator("#scholarship")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    // Verify no horizontal scroll overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalOverflow).toBe(false);

    // Take Mobile Full Page Screenshot
    await page.screenshot({
      path: path.join(screenshotsDir, "full-site-375px.png"),
      fullPage: true,
    });

    // Zero console errors assertion
    expect(consoleErrors).toEqual([]);
  });
});
