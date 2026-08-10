import { test, expect } from "@playwright/test";

//Multiple Tabs & Windows: How to validate new tab opened, interact with it, check whether initial page reflect the changes made by new tab.

//1. Page vs Context:

/*
A page is a single browser page / tab or window.

Whereas a context is a browser profile which can contail multiple tabs & windows of a browser.
*/

//2. Waiting for the new page "context.waitForEvent("page")"

test("open new tab and verify", async ({ page, context }) => {
  await page.goto("https://vinothqaacademy.com/multiple-windows/");

  //Setup a listener for a new Page BEFORE triggering it
  const [newPage] = await Promise.all([
    context.waitForEvent("page"), //wait for new page to open
    page.click('button[name="145newbrowsertab234"]'), //click on a link that open new tab
  ]);
  //now the new tab is openend
  await newPage.waitForLoadState();
  //prinitng the new url
  console.log(newPage.url()); //https://vinothqaacademy.com/webtable/
});

//3. Accessing multiple page sequentially

test("interact with multiple pages", async ({ page, context }) => {
  await page.goto("https://www.amazon.com");
  //open a fresh page
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.click('a[target="_blank"]'), //open a link that opens in a new tab
  ]);
  //wait for the new tab to open
  await newPage.waitForLoadState();

  //perform an action on the new page
  await newPage.fill('input[id="twotabsearchtextbox"]', "Manga");
  await newPage.click('input[id="nav-search-submit-button"]');

  //perform action on original page
  await page.click('a[href="/gp/goldbox?ref_=nav_cs_gb"]');
  console.log(page.url()); //https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb

  //switch back to new page
  await expect(newPage).toHaveURL(/sprefix=mang/);

  //close new page
  await newPage.close();

  //close original page
  await page.close();
});

//4. Mutliple Windows (Pop Ups):

test("multiple window (pop ups)", async ({ page, context }) => {
  await page.goto("https://www.automationtesting.co.uk/popups.html");

  const [popUp] = await Promise.all([
    context.waitForEvent("page"),
    page.click('button[onClick="popup()"]'),
  ]);

  await popUp.waitForLoadState();

  await expect(popUp.locator("body")).toBeVisible();
  await popUp.close();

  await page.close();
});

//5. Real world scenaio: external web login in new tab

test("login flows in new tab", async ({ page, context }) => {
  await page.goto("https://www.medium.com");

  const [loginPage] = await Promise.all([
    context.waitForEvent("page"),
    page.click('button:has-text("Google")'),
  ]);

  await loginPage.waitForLoadState();

  await expect(loginPage).toHaveURL(/account.google.com/);

  await loginPage.close();

  await expect(page).toHaveURL(/medium.com/);
});

//6. Collecting data from multiple pages

test("collecting datas from multiple pages", async ({ page, context }) => {
  await page.goto("https://vinothqaacademy.com/multiple-windows/");

  const [newPage1, newPage2] = await Promise.all([
    context.waitForEvent("page"),
    context.waitForEvent("page"),

    page.click('button[name="145newbrowsertab234"]'),
    page.click('button[name="newbrowserwindow123"]'),
  ]);

  await newPage1.waitForLoadState();

  await newPage2.waitForLoadState();

  const pageTitle1 = await page.title();
  const pageTitle2 = await newPage1.title();
  const pageTitle3 = await newPage2.title();

  console.log(`Pages: ${pageTitle1}, ${pageTitle2}, ${pageTitle3}`);
  //Pages: Demo Site – Multiple Windows – Vinoth Tech Solutions, Demo Site – WebTable – Vinoth Tech Solutions, Demo Site – WebTable – Vinoth Tech Solutions
});

//7. Handling unplanned popups

test("auto close unplaned pop ups", async ({ page, context }) => {
  context.on("page", (popup) => {
    console.log("Pop Up Detected", popup.url());
    popup.close();
  });

  await page.goto("https://www.wikipedia.org");

  await page.click('a[href*="/wiki/"]');
});
