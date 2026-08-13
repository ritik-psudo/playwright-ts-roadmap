/*
Real tests aren't isolated — they combine multiple browser operations in one flow. A user searches, navigates through results, opens a product in a new tab, compares prices, fills a form, goes back, searches again. Your test needs to handle all of this seamlessly. This consolidation day proves you can write realistic, end-to-end test scenarios, not just isolated single-action tests.
*/

import { test, expect } from "@playwright/test";
import { log } from "node:console";

//1. Amazon product search and navigation flow:

test.describe("comprehensive browser scenarios", () => {
  test("product search navigation", async ({ page }) => {
    await page.goto("https://automationteststore.com/");

    await expect(page).toHaveURL("https://automationteststore.com/");

    const searchBox = page.locator('input[id="filter_keyword"]');

    await expect(searchBox).toBeVisible();

    await searchBox.fill("men");

    await page.click('div[class="button-in-search"]');

    const products = await page.locator('a[class="prdocutname"]');

    const productsCount = await products.count();

    await page.waitForLoadState("networkidle");
    await expect(productsCount).toBeGreaterThan(0);

    await products.first().click();
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveURL(/product_id=121/);

    await page.goBack();
    await expect(page).toHaveURL(
      "https://automationteststore.com/index.php?rt=product/search&keyword=men&category_id=0",
    );
  });

  test("Wikipedia article exploration with back/forward", async ({ page }) => {
    // Start at Wikipedia main article
    await page.goto("https://en.wikipedia.org/wiki/Artificial_intelligence");
    const mainArticleUrl = page.url();
    await expect(page).toHaveURL(/Artificial_intelligence/);

    // Get initial article title
    const mainTitle = await page.locator("h1").first().textContent();
    expect(mainTitle).toContain("Artificial");

    // Click related link (find a valid link)
    const relatedLinks = page.locator(
      'a[href*="/wiki/"]:not([href*="redlink"])',
    );
    const linkCount = await relatedLinks.count();
    expect(linkCount).toBeGreaterThan(0);

    // Click first link
    await relatedLinks.first().click();
    await page.waitForLoadState("networkidle");

    // Verify we navigated to a different article
    const newUrl = page.url();
    expect(newUrl).not.toBe(mainArticleUrl);

    // Navigate forward through multiple articles
    const nextLinks = page.locator('a[href*="/wiki/"]:not([href*="redlink"])');
    if ((await nextLinks.count()) > 0) {
      await nextLinks.nth(1).click();
      await page.waitForLoadState("networkidle");
    }

    // Use back navigation multiple times
    await page.goBack();
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL(/wiki/);

    await page.goBack();
    await page.waitForLoadState("networkidle");

    // Verify we're back at the main article
    await expect(page).toHaveURL(/Artificial_intelligence/);
  });

  test("Dev.to article interaction with reload", async ({ page }) => {
    // Navigate to Dev.to
    await page.goto("https://dev.to");
    await expect(page).toHaveURL(/dev.to/);

    // Search for articles
    const searchButton = page
      .locator("button")
      .filter({ has: page.locator("svg") })
      .first();
    if (await searchButton.isVisible()) {
      await searchButton.click();
    }

    // Try to find and interact with search or navigation
    const articleLinks = page
      .locator('a[href*="/"]')
      .filter({ has: page.locator("h2, h3") });
    const linkCount = await articleLinks.count();

    if (linkCount > 0) {
      // Click an article
      await articleLinks.first().click();
      await page.waitForLoadState("networkidle");

      // Get article URL
      const articleUrl = page.url();
      expect(articleUrl).not.toContain("dev.to/"); // different from homepage

      // Scroll down
      await page.evaluate(() => window.scrollBy(0, 200));
      const scrollPosition = await page.evaluate(() => window.scrollY);
      expect(scrollPosition).toBeGreaterThan(0);

      // Reload the page
      await page.reload();
      await page.waitForLoadState("networkidle");

      // Verify we're still at the same article
      await expect(page).toHaveURL(articleUrl);

      // Verify scroll position reset (most sites)
      const scrollAfterReload = await page.evaluate(() => window.scrollY);
      expect(scrollAfterReload).toBeLessThan(scrollPosition);
    }
  });
  test("Multi-tab comparison scenario", async ({ page, context }) => {
    // Start on Amazon
    await page.goto("https://www.amazon.com");

    // Search for a product
    await page.fill("input[name='k']", "laptop");
    await page.press("input[name='k']", "Enter");
    await page.waitForURL(/field-keywords=laptop/);

    // Get initial results count
    const initialProductLinks = page.locator('a[href*="/dp/"]');
    const initialCount = await initialProductLinks.count();
    expect(initialCount).toBeGreaterThan(0);

    // Create a second page/tab for comparison
    const page2 = await context.newPage();
    await page2.goto("https://www.amazon.com");

    // Search for different product on page 2
    await page2.fill("input[name='k']", "tablet");
    await page2.press("input[name='k']", "Enter");
    await page2.waitForURL(/field-keywords=tablet/);

    // Verify page 2 has results
    const page2Products = page2.locator('a[href*="/dp/"]');
    expect(await page2Products.count()).toBeGreaterThan(0);

    // Go back to page 1
    await page.bringToFront(); // switch focus back to page 1

    // Verify page 1 still has laptop results
    await expect(page).toHaveURL(/field-keywords=laptop/);

    // Each page maintained its own state
    expect(page.url()).toContain("laptop");
    expect(page2.url()).toContain("tablet");

    // Clean up
    await page2.close();
  });
});
