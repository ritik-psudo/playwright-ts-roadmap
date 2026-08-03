//Create & Run first playwright test

//1. The anatomy of a playwright test

import { test, expect } from "@playwright/test";

test("homepage title", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await expect(page).toHaveTitle(/Playwright/);
});

//multiple test in one file

test.describe("homepage tests", () => {
  //test.describe clubs or groups muliple test under one bracket
  test("has correct title", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(/Playwright/);
  });

  test("has shop link", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const getStarted_link = await page.getByRole("link", {
      name: "Get started",
    });
    await expect(getStarted_link).toBeVisible();
  });
});

//common locators

test.skip("multiple locators", async ({ page }) => {
  await page.getByRole("button", {
    name: "Submit",
  });
  await page.getByText("Welcome Back");
  await page.getByLabel("Username");
  await page.getByPlaceholder("Enter your email");
  await page.locator("#submit-btn");
});

//common actions

/*test("common actions", async ({page})=>{
    await page.goto(URL);  navigate to a URL
    await page.click(); clicking on an element
    await page.fill(selector, "text"); passing a value in a element
    await page.check(selector); selecting a value for the check boxes
    await page.selectOption(selector,"value"); selecting a value from a dropdown
})*/

//common assertions with "expect"

/*test("common assertions", async ({page})=>{
    await expect(page).toHaveTitle(/text or regex/);
    await expect(page).toHaveURL(/text or regex/);
    await expect(locator).toBeVisible();
    await expect(locator).toHaveText("exact text");
    await expect(locator).toContainText("partial text");
    await expect(locator).toBeEnabled();
})*/

//commands to run tests fro  terminal

/*
npx playwright test tests/homepage.spec.ts      ----run just this specific file
npx playwright test --headed                    ----run all the tests with browser visible
npx playwright test --debug                     ----run the test in debug mode
npx playwright test --project="chromium"        ----run all the test only in chrome browser
*/
