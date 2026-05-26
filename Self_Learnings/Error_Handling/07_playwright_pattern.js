// Note: This is a pseudo-code file for Playwright testing.
// It shows the standard SDET pattern for Error Handling in E2E tests.

const { test, expect } = require('@playwright/test');

test("Login with valid credentials", async ({ page }) => {
  try {
    // 🟢 TRY: Perform the test steps
    await page.goto("https://example.com/login");
    await page.fill("#username", "testuser@example.com");
    await page.fill("#password", "SecurePass123");
    await page.click("#loginBtn");

    // Assertion — throws an error if this fails
    await expect(page.locator("#dashboard")).toBeVisible();
    console.log("✅ Login test passed.");

  } catch (err) {
    // 🔴 CATCH: Log exactly what failed and where
    console.log("❌ Login test failed:", err.message);

    // Take a screenshot so you can debug visually
    await page.screenshot({ path: "login_failure.png" });

    // Re-throw so Playwright marks the test as FAILED (not just logged)
    throw err; 

  } finally {
    // 🔵 FINALLY: Always close the session cleanly
    await page.close();
    console.log("🧹 Browser page closed.");
  }
});
