import { test, expect } from "@playwright/test";

test("check login status", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  const statusText = await page.locator("#submit").textContent(); //set a breakpoint
  expect(statusText).toBe("Submit");
});
