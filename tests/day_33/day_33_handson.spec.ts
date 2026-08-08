import { test, expect } from "@playwright/test";
import { log } from "console";

test.describe("Navigation Tests", () => {
  //Test goes here

  //Q2. Testing Go Back navigation
  test("Wikipedia back navigation", async ({ page }) => {
    await page.goto("https://en.wikipedia.org/wiki/Main_Page");

    await expect(page).toHaveURL(/Main_Page/);

    await page.click('a[title="English language"]');

    const afterClickURL = page.url();

    console.log(afterClickURL);

    await page.goBack();

    await expect(page).toHaveURL(/Main_Page/);
  });

  //Q3. Testing forward navigation
  test("Wikipedia forward navigation", async ({ page }) => {
    await page.goto("https://en.wikipedia.org/wiki/Main_Page");

    await expect(page).toHaveURL(/Main_Page/);

    await page.click('a[title="English language"]');

    const afterClickURL = page.url();

    await page.goBack();

    await expect(page).toHaveURL(/Main_Page/);

    await page.goForward();

    await expect(page).toHaveURL(afterClickURL);
  });

  //Q4. Reload functionality
  test("Wikipedia reload navigation", async ({ page }) => {
    await page.goto("https://www.youtube.com/");

    await page.fill('input[name="search_query"]', "Antartica");

    await expect(page.locator('input[name="search_query"]')).toHaveValue(
      "Antartica",
    );

    await page.reload();

    await expect(page.locator('input[name="search_query"]')).toHaveValue("");
  });

  //Q5. Test URL based persistency

  test("GitHub search state persists in URL after reload", async ({ page }) => {
    await page.goto("https://github.com/search?q=playwright&type=repositories");

    await expect(page).toHaveURL(/q=playwright/);

    await page.reload();

    await expect(page).toHaveURL(/q=playwright/);
  });

  //Q6. Test rapid back/forward navigation (stress test):
  test("Rapid navigation test", async ({ page }) => {
    await page.goto("https://en.wikipedia.org/wiki/Main_Page");

    await expect(page).toHaveURL(/Main_Page/);

    await page.click('a[title="English language"]');

    const afterClickURL = page.url();

    await page.goBack();
    await page.goForward();
    await page.goBack();
    await page.goForward();

    await expect(page).toHaveURL(afterClickURL);
  });

  //Q7. Test reload with button clicks (simulating user interaction)

  test("test reload with user interaction", async ({ page }) => {
    await page.goto("https://en.wikipedia.org/wiki/");

    await page.evaluate(() => {
      window.scrollBy(0, 100);
    });

    await page.reload();

    const scroll_status = await page.evaluate(() => {
      window.scrollY;
    });

    await expect(scroll_status).toBe(0); //to check if scroll return to the top when reload happens
  });
});
