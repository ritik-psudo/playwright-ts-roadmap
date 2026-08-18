import { test, expect } from "@playwright/test";
import { log } from "node:console";

test.describe("user login", () => {
  test("create account", async ({ page }) => {
    //open url
    await page.goto("https://shop.qaautomationlabs.com/index.php");

    //assert correct url is opened
    await expect(page).toHaveURL(/index/);

    //assert page contains "Welcome Back" text
    const welcome_msg = await page.getByText("Welcome back 👋");
    await expect(welcome_msg).toHaveText("Welcome back 👋");

    //click on register link
    await page.locator('a[id="registerLink"]').click();

    //assert create your account page opens
    await expect(page).toHaveURL(/register/);
    //enter first name
    await page.getByPlaceholder("First Name").fill("Alex");
    //enter last name
    await page.getByPlaceholder("Last Name").fill("Jason");

    //enter email
    await page.getByPlaceholder("E-Mail").fill("alex@mail.com");

    //enter telephone number
    await page.getByPlaceholder("Telephone").fill("9876543210");

    //select gender (male)
    await page.locator('input[id="genderMale"]').click();

    //select date of birth
    await page
      .locator('input[id="regdob"]')
      .pressSequentially("12-03-2000", { delay: 50 }); //enters the dob sequentially with delay of 50 ms between each fill

    //select country
    await page.locator('select[id="regcountry"]').selectOption("Canada");

    //enter new password
    await page.locator('input[id="regpassword"]').fill("Pass@1234");
    //confirm password
    await page.locator('input[id="regconfirmpassword"]').fill("Pass@1234");

    //click on register button
    await page.locator('button[id="registerBtn"]').click();

    //verify new account created

    await expect(page).toHaveURL(/index/); //returned to login page

    await expect(welcome_msg).toHaveText("Welcome back 👋"); //Welcome Back text appears
  });
  test("login", async ({ page }) => {
    //got to login page
    await page.goto("https://shop.qaautomationlabs.com/index.php");

    //assert correct url is opened
    await expect(page).toHaveURL(/index/);

    //assert page contains "Welcome Back" text
    const welcome_msg = await page.getByText("Welcome back 👋");
    await expect(welcome_msg).toHaveText("Welcome back 👋");

    //enter email
    await page.getByPlaceholder("Email").fill("demo@demo.com");

    //enter password
    await page.getByPlaceholder("Password").fill("demo");

    //click login button
    await page.getByTitle("Login").click();

    //assert home url after login
    await expect(page).toHaveURL(/shop/);
  });

  test("add to cart", async ({ page }) => {
    //got to login page
    await page.goto("https://shop.qaautomationlabs.com/index.php");

    //assert correct url is opened
    await expect(page).toHaveURL(/index/);

    //assert page contains "Welcome Back" text
    const welcome_msg = await page.getByText("Welcome back 👋");
    await expect(welcome_msg).toHaveText("Welcome back 👋");

    //enter email
    await page.getByPlaceholder("Email").fill("demo@demo.com");

    //enter password
    await page.getByPlaceholder("Password").fill("demo");

    //click login button
    await page.getByTitle("Login").click();

    //click on men's section
    await page.getByTitle("Shop Men Fashion").click();

    //click on first product
    await page.locator('a[title="Black T-Shirt"]').click();

    //verify product page is open
    //product1
    const prod_price1 = await page
      .locator('h3[data-testid="product-detail-price"]')
      .textContent();

    await expect(prod_price1).toMatch("$150");

    //click on add to cart
    await page.getByTitle("Add Black T-Shirt to cart").click();

    await page.goBack();

    //product2
    await page.locator('a[title="White T-Shirt"]').click();

    const prod_price2 = await page
      .locator('h3[data-testid="product-detail-price"]')
      .textContent();

    await expect(prod_price2).toMatch("$500");

    //click on add to cart
    await page.getByTitle("Add White T-Shirt to cart").click();

    await page.goBack();

    //product3
    await page.locator('a[title="Green Shirt"]').click();

    const prod_price3 = await page
      .locator('h3[data-testid="product-detail-price"]')
      .textContent();

    await expect(prod_price3).toMatch("$200");

    //click on add to cart
    await page.getByTitle("Add Green Shirt to cart").click();

    await page.goBack();

    //validate the number on the cart icon
    const cartCount = await page.locator('span[id="cartCount"]').textContent();

    await expect(cartCount).toMatch("3");

    await page.locator('a[id="cartdesk"]').click();

    const actual_total = await page
      .locator('div[id="totalPrice"]')
      .textContent();

    console.log(`${actual_total}`);
  });
});
