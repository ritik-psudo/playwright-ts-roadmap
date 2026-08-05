import { test, expect } from "@playwright/test";
import { log } from "node:console";

//  1. Most used fixtures -

test("example", async ({ page }) => {
  //  `page` is a fixture that is provided to each test. A clean & fresh new browser page is assigned to each test so that one test page doesn't leak to anothers.
  await page.goto("https://example.com");
});

//  2. Other fixtures in playwright

test("with multiple fixture", async ({ page, browser, context, request }) => {
  //page: a single browser page is assigned
  //browser: a full fledged actual browser instance is provided
  //context: a full browser context with (multiple pages, cookies, cache)
  //request: APIRequestContext (HTTP requests)
});

//"browser" is not used frequently, it is used only when multiple page test is concerned). "page" is used for single pages tests.

//"context" is used when in a multiple page test is required to share cookies or caches, like signing out of all pages if signed from any one page.

//  3. APIRequestContext - making HTTP requests

//The "request" fixtures lets you make direct HTTP request without any browser.

test("fetch user via API", async ({ request }) => {
  const response = await request.get("https://api.restful-api.dev/collections");
  expect(response.status()).toBe(200);

  const product = await response.json();
  expect(product.collectionName).toBe("phones");
});

//  4. API Test - UI Test

test("user can update profile after account creation", async ({
  request,
  page,
}) => {
  const createResponse = await request.post("https://api.example.com/users", {
    data: { name: "TestUser", email: "test@example.com", password: "Pass123" },
  });
  const user = await createResponse.json();
  const userId = user.id;

  //login; get auth token via api

  const loginResponse = await request.post("https://api.example.com/users", {
    data: { name: "TestUser", email: "test@example.com", password: "Pass123" },
  });
  const token = loginResponse.json();

  //TEST:

  await page.goto("https://example.com/profile");
  // (page automatically sends cookies if the API login set them, or you can manually add the token)
  await page.fill("#bio", "Updated Bio");

  await expect(page.locator("#bio-display")).toContainText("UpdatedBio");
});

//  5. Headers & Authentication:

test("test api with auth headers", async ({ request }) => {
  const response = await request.get("https://api.example.com/users", {
    headers: {
      Authorization: "Bearer my_token_here",
    },
  });
  const users = await response.json();
  expect(users.length).toBeGreaterThan(0);
});

//  6. Fixtures Teardown:

test.afterEach(async ({ request }) => {
  //this request runs after each test
  //used to clean up the changes or data created using the endpoint
  await request.delete("https://api.example.com/users/test-user-id");
});
