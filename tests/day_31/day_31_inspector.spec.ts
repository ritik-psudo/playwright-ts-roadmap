import { test, expect } from "@playwright/test";
/*
Q1. Launch debug mode on one of your tests:

npx playwright test tests/day28_practice.spec.ts --debug

Confirm the Inspector window and browser both open. Use Step Over to walk through a few lines and watch the page update in real-time.
*/

test("first test", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await expect(page).toHaveTitle(/Playwright/);
});

/*
npx playwright test tests/day_31/day_31_inspector.spec.ts --debug

Running 3 tests using 1 worker
  3 passed (47.7s)
*/

//Q2. Set a breakpoint (in VS Code, click the gutter next to a line in your test file), run --debug again, and confirm execution pauses there.

test("third test", async ({ page }) => {
  await page.goto("https://playwright.dev"); //added breakpoint
  const link = await page.getByRole("link", {
    name: "Get started",
  });
  await expect(link).toBeVisible();
});

//Q3. Click the Pick Locator icon (crosshair in the Inspector), then click an element on the page (like a link or button). Confirm the Inspector suggests a locator — copy it.

//getByRole('link', { name: 'Get started' });

//Q4. import { test, expect } from "@playwright/test";

test("example with inspector practice", async ({ page }) => {
  await page.goto("https://playwright.dev");
  // You'll fill in real locators below using the Pick Locator feature
  await expect(
    page.getByRole("link", { name: "Star microsoft/playwright on" }),
  ).toBeVisible(); //locator given using pick locator
  await expect(page.getByRole("link", { name: "TypeScript" })).toBeVisible(); ////locator given using pick locator
});

// Running 1 test using 1 worker,       1 passed (13.8s)

//Q5. Add an assertion using a locator you found via Pick Locator — something like checking the page title or a heading. Run the test normally (not debug) to confirm it passes.

/*
    await expect(page.getByRole('link', { name: 'Star microsoft/playwright on' })).toBeVisible(); //locator given using pick locator
    await expect(page.getByRole('link', { name: 'TypeScript' })).toBeVisible(); ////locator given using pick locator
*/

/*Q6. Try Codegen for 2-3 minutes — just explore:

npx playwright codegen https://example.com

Click around the page, type in a field if there is one, navigate to another page. Watch the right panel auto-generate test code. No need to save this code (it's just for learning), just observe how goto, click, fill, expect get generated automatically.*/

test("test youtube", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await page.getByRole("combobox", { name: "Search" }).click();
  await expect(page.getByRole("combobox", { name: "Search" })).toBeEmpty();
  await page.getByRole("combobox", { name: "Search" }).fill("cars");
  await page.goto("https://www.youtube.com/watch?v=L9ZYdShgtPE");
  await expect(page.locator("#info-container")).toContainText("114M views");
  await expect(page.locator("ytd-video-owner-renderer")).toContainText(
    "Disney Jr.",
  );
  await page.goto("https://www.youtube.com/");
});

//Running 1 test using 1 worker,    1 passed (44.5s)
