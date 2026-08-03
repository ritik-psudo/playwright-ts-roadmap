//Q1. Write a test that navigates to https://playwright.dev and asserts the title contains "Playwright" (use toHaveTitle with a regex like /Playwright/).

import { test, expect } from "@playwright/test";

test("first test", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await expect(page).toHaveTitle(/Playwright/);
});

//Q2. Write a test that navigates to the same page and asserts the URL is correct (toHaveURL).

test("second test", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await expect(page).toHaveURL("https://playwright.dev");
});

//Q3. Write a test using page.getByRole("link", { name: "Get started" }) and assert it toBeVisible().

test("third test", async ({ page }) => {
  await page.goto("https://playwright.dev");
  const link = await page.getByRole("link", {
    name: "Get started",
  });
  await expect(link).toBeVisible();
});

//Q4. Click that "Get started" link (await page.getByRole(...).click()), then assert the resulting page's URL contains "intro" (Playwright's docs intro page).

test("fourth test", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await page
    .getByRole("link", {
      name: "Get started",
    })
    .click();
  await expect(page).toHaveURL(/intro/);
});

//Q5. Group tests 1-4 inside a test.describe("Playwright docs site", () => { ... }) block.

test.describe("fifth test", () => {
  test("title_test", async ({ page }) => {
    await page.goto("https://playwright.dev");
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("url_test", async ({ page }) => {
    await page.goto("https://playwright.dev");
    await expect(page).toHaveURL("https://playwright.dev");
  });
  test("link_test", async ({ page }) => {
    await page.goto("https://playwright.dev");
    const link = page.getByRole("link", {
      name: "Get started",
    });
    await expect(link).toBeVisible();
  });
  test("new_page_test", async ({ page }) => {
    await page.goto("https://playwright.dev");
    await page
      .getByRole("link", {
        name: "Get started",
      })
      .click();
    await expect(page).toHaveURL(/intro/);
  });
});

//Q6. Run all your tests with npx playwright test tests/day28_practice.spec.ts --headed and watch the browser actually perform each step.

/*
Running 24 tests using 4 workers
  24 passed (18.4s)
*/

//Q7. Deliberately break one assertion (e.g., change the expected title regex to something wrong like /WrongTitle/) and run again — observe the failure output, including the screenshot Playwright automatically captures on failure (check test-results/ folder, or run npx playwright show-report to see it visually).

/*
  3 failed
    [chromium] › tests\day_28\day_28_practice.spec.ts:5:1 › first test ─────────────────────────────
    [firefox] › tests\day_28\day_28_practice.spec.ts:5:1 › first test ──────────────────────────────
    [webkit] › tests\day_28\day_28_practice.spec.ts:5:1 › first test ────
*/

//Q8. Fix the assertion back, confirm all tests pass again.

/*
Running 24 tests using 4 workers
[24/24] [webkit] › tests\day_28\day_28_practice.spec.ts:57:3 › fifth test › new_page_test
*/

//Q9. Try npx playwright test --debug on one test — use the Playwright Inspector window that pops up to step through the test action-by-action (this previews Day 31's topic).

/*
npx playwright test tests/day_28/day_28_practice.spec.ts --debug

Running 24 tests using 1 worker
  24 passed (2.3m)

*/

//Q10. Write one more independent test navigating to https://playwright.dev/docs/intro directly (skip the click step) and assert something on that page — proving you can jump straight to any page, not just navigate via clicks.

test("new_page", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");
  await expect(page).toHaveURL(/intro/);
});
