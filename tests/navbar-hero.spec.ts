import { test, expect } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";

test.describe("Navbar + Hero Milestone QA", () => {
  test("Desktop & Mobile rendering, console errors, and screenshots", async ({ page }) => {
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

    // 1. Desktop Test (1440px x 900px)
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

    // Assert wordmark and headline specifically in body/header
    await expect(page.locator("header").getByText("LAKSHYA")).toBeVisible();
    await expect(page.locator("main").getByText("Padhai ka matlab,")).toBeVisible();
    await expect(page.locator("main").getByText("clarity")).toBeVisible();
    await expect(page.locator("main").getByText("BATCH PROGRESSION REPORT CARD")).toBeVisible();

    // Verify WhatsApp link on primary CTA
    const demoButton = page.locator("main").getByRole("button", { name: "Book a Free Demo Class" });
    await expect(demoButton).toBeVisible();
    const demoHref = await demoButton.locator("xpath=..").getAttribute("href");
    expect(demoHref).toContain("wa.me/919000000000");

    // Wait 1 second for animations and counter to settle
    await page.waitForTimeout(1500);

    // Screenshot Desktop
    await page.screenshot({
      path: path.join(screenshotsDir, "navbar-hero-1440px.png"),
      fullPage: true,
    });

    // 2. Mobile Test (375px x 812px)
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(500);

    // Ensure mobile hamburger is visible
    const hamburger = page.locator("button[aria-label='Toggle navigation menu']");
    await expect(hamburger).toBeVisible();

    // Open mobile menu
    await hamburger.click();
    await expect(page.locator("header").getByText("Kakadeo offline centre")).toBeVisible();

    // Screenshot Mobile (with drawer open or closed; let's capture drawer open first, then close to see hero)
    await page.screenshot({
      path: path.join(screenshotsDir, "navbar-hero-375px-menu.png"),
    });

    // Close menu to inspect mobile hero layout
    await hamburger.click();
    await page.waitForTimeout(300);

    await page.screenshot({
      path: path.join(screenshotsDir, "navbar-hero-375px.png"),
      fullPage: true,
    });

    // Zero console errors assertion
    expect(consoleErrors).toEqual([]);
  });
});
