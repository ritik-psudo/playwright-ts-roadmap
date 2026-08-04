/*
Understaning playwright.config.ts file is important as its the control center of the entire framework. 

Instead of setting properties and timeout, retries, browsers, reporting behaviours in each and every test, all are decalred at one place known as config file.

It provides easy way to make changes in any configuration level properties at one place, which makes the test suite more reliable and maintainable.
*/

//typical configuration setup

import { defineConfig, devices, expect, test } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", //where playwright would find the spec.ts files to run
  timeout: 30000, //max time (ms) a SINGLE TEST can run before failing. If a test takes longer than timeout, Playwright kills it and marks it failed — even if it would've eventually passed. Useful for catching genuinely hung tests, but too low a value causes false failures on slow pages.
  expect: {
    timeout: 40000, //max timeout for a single assertion to be succeed or pass
  },
  fullyParallel: true, //run tests within the SAME FILE in parallel too, not just across files
  retries: process.env.CI ? 2 : 0, //If a test fails, Playwright can automatically retry it up to N (2) times before marking it truly failed.
  forbidOnly: !!process.env.CI, //fail the build if someone left a test.only() in the code
  // workers: process.env.CI ? 1: undefined,
  reporter: "html", //generates the html report about the test executed
  use: {
    baseURL: "https://example.com", //use this url wherever base url is needed
    trace: "on-first-retry", //generate a detailed trace only when a test fails and retries
    screenshot: "only-on-failure", //capture a screenshot of the current page only for the first failure
    video: "retain-on-failure", //record vidoes, but delete for every passed one and keep only the fail one
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});

test("web page", async ({ page }) => {
  await page.goto("https://playwright.dev/");
});

test("is visible", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const link = page.getByRole("link", {
    name: "Get started",
  });
  await expect(link).toBeVisible();
});
