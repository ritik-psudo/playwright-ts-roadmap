import { test, expect } from "@playwright/test";

//1. Persistent Context :

/*
A context is a browser profile — it contains cookies, local storage, session storage, and auth tokens. By default, Playwright creates a fresh context for each test (no state carries over). A persistent context saves that profile to disk so you can reuse it.
*/

test("test1", async ({ page }) => {
  //fresh new page is opened
});

test("test2", async ({ page }) => {
  //fresh new page is opened without any context of test1
});

//2. Creating a persistent context manually

import { chromium } from "@playwright/test";

const browser = await chromium.launch();

const context = await browser.createPersistentContext("./auth");

const page = await context.newPage();

await page.goto("https://www.amazon.com");

await context.close();

//3. reusing a persistent context in a test

test.beforeAll(async () => {
  const browser = await chromium.launch();
  const context = await browser.createPersistentContext("./auth");
  const page = await context.newPage();

  await page.goto("https://www.dev.to");

  await page.close();
  await context.close();
});

//What all get persisted:

/*
    Cookies - stored and reused ✅
    Local storage - stored and reused ✅
    Session storage - stored and reused ✅
    IndexedDB - stored and reused ✅
    Auth tokens in memory - NOT persisted ❌ (need to be in cookies/storage)
*/

