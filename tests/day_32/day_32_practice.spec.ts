import { test, expect } from "@playwright/test";

test("failed test for trace", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  //await expect(page).toHaveTitle(/NonExistingTitle/); //failing intentionally
  await expect(page).toHaveTitle(/Playwright/);
});

test("another trace practice", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.click("#non-exisiting-button"); //this locator doesn't exist
  await expect(page).toHaveTitle(/Playwright/);
});
