import { test, expect } from "@playwright/test";
import { title } from "node:process";
//1. What is Auto Waiting:
/*
It means playwright waits before every action and assertion automatically.
*/

test("auto wait", async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  //page waits for the element to be visible without any wait mentioned explicitly
  await expect(page.getByPlaceholder("Search")).toBeVisible();
});

/*Playwright waits for the element to be:
1. Inside the DOM (actually present in the HTML).
2. Visible (not hiddenn using property such as display: none)
3. Enabled (no disbaled)
4. Stable (not still changing or animating)
*/

//2. Auto Waiting on Actions:
test("auto wait on actions", async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  //page waits for the element to be visible and enabled before clicking.
  await page.getByPlaceholder("Search").click();

  //page waits for the element to be visible and enabled before filling.
  await page.getByPlaceholder("Search").fill("Hero Roadeo");

  await page.locator('button[title="Search"]').click();
});

//Default timeout for actions is 30 seconds (from playwright.config.ts's timeout). If the element doesn't become actionable in 30 seconds, the action fails.

//3. Auto Waiting on Assertions

test("auto wait on assertions", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
  // This WAITS (up to 5 seconds by default, from expect.timeout) for the text to appear
  await expect(page.getByText("Get your game on")).toBeVisible();

  await page.getByPlaceholder("Search Amazon").fill("Laptop");
  // This WAITS for the input to have that value
  await expect(page.getByPlaceholder("Search Amazon")).toHaveValue("Laptop");

  // This WAITS for the element to become visible
  await expect(page.locator('a[id="nav-cart"]')).toBeVisible();
});

//The timeout for assertions is controlled by expect.timeout in your config (default 5 seconds), separate from the action timeout.

//4. What does auto wait and what not

/* Waits for:
page.getByRole(...).click()        // waits for visibility + enabled
page.getByRole(...).fill()         // waits for visibility + enabled
page.getByRole(...).check()        // waits for checkbox visibility
expect(...).toBeVisible()          // waits for visibility
expect(...).toHaveText()           // waits for text to appear
expect(...).toHaveValue()          // waits for input value

Doesn't wait for:
page.url()                         // returns URL immediately
page.title()                       // returns title immediately
await page.locator("...").count()  // counts elements immediately (might be 0)
*/

//5. Real World Scenario:

test("success message after form submit", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");

  await page.getByPlaceholder("First Name").fill("Alex");

  await page.getByPlaceholder("Last Name").fill("Mark");

  await page.getByPlaceholder("name@example.com").fill("alex@email.com");

  await page.locator('input[value="Female"]').click();

  await expect(page.getByText("Female")).toBeChecked();

  await page.locator('input[id="userNumber"]').fill("9876543210");

  await page.locator('input[id="dateOfBirthInput"]').click();

  await page
    .locator('select[class="react-datepicker__year-select"]')
    .selectOption({ value: "2000" });

  await page
    .locator('select[class="react-datepicker__month-select"]')
    .selectOption({ value: "9" });

  await page.getByLabel("Choose Tuesday, October 17th, 2000").click();

  await expect(page.locator('input[id="dateOfBirthInput"]')).toHaveValue(
    "17 Oct 2000",
  );

  await page.locator('input[id="subjectsInput"]').fill("History");

  await page.press('input[id="subjectsInput"]', "Enter");

  await page.locator('input[id="subjectsInput"]').fill("Biology");

  await page.press('input[id="subjectsInput"]', "Enter");

  await page.getByText("Reading").click();

  await page.getByPlaceholder("Current Address").fill("C-201, Home");

  await page
    .locator("#state > .css-13cymwt-control > .css-hlgwow > .css-19bb58m")
    .click();
  await page.getByRole("option", { name: "NCR" }).click();
  await page
    .locator("#city > .css-13cymwt-control > .css-hlgwow > .css-19bb58m")
    .click();
  await page.getByRole("option", { name: "Delhi" }).click();

  await page.locator('button[id="submit"]').click();

  await expect(
    page.locator('div[id="example-modal-sizes-title-lg"]'),
  ).toHaveText("Thanks for submitting the form");
});
