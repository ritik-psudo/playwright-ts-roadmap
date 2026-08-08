import { test, expect } from "@playwright/test";

//Many times bugs appears while moving forward and backward on a browser page - page state not persisting while going back, page loads but user input is not visible, forward doesn't work as expected, all these are handled at script level

//1. Four navigation methods

test("navigations options", async ({ page }) => {
  await page.goto("https://example.com"); //navigates the page to a specific url

  await page.goBack(); //navigates the page to one level back

  await page.goForward(); //navigates the page to one level ahead

  await page.reload(); //reloads the page
});

//2. Page.goto with options

test("goto with options", async ({ page }) => {
  await page.goto("https://example.com"); //basic navigation

  await page.goto("https://example.com", {
    waitUntil: "domcontentloaded", //waits for the DOM to load (faster)
  });

  await page.goto("https://example.com", {
    waitUntil: "networkidle", //waits until there's no pending network state is pending (waits till the entire page is completely loaded, slower but more reliable).
  });
});

//3. goBack() - navigating back to previous page

test("goback option", async ({ page }) => {
  await page.goto("https://en.wikipedia.org/wiki/Playwright"); //open an url

  await page.locator("#mwFw").click(); //click on a link to navigate

  await page.goBack(); // perform the back option on the page

  await expect(page).toHaveURL(/Playwright/); //verify if page shows correct url
});

//4. goForward() - navigating to next page

test("goforward option", async ({ page }) => {
  await page.goto("https://en.wikipedia.org/wiki/Playwright"); //open an url

  await page.locator("#mwFw").click(); //click on a link to navigate

  await page.goBack(); // perform the back option on the page

  await page.goForward(); //move forward

  await expect(page).toHaveURL(/English_literature/); //verify if page shows correct url
});

//5. reload() - refreshes the page

test("reload option", async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  await page.locator('input[name="search_query"]').fill("Playwright");

  await page.reload();

  await expect(page.locator('input[name="search_query"]')).toHaveValue("");
});

//6. Verify that saved data persists, but unsaved input doesn't

test("navigation pattern", async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  await page.fill('input[name="search_query"]', "playwright");

  await page.click('button[title="Search"]');

  await page.click(`a[href="/@Playwrightdev"]`);

  await page.goBack();

  await expect(page).toHaveURL(/search_query=playwright/);
});
