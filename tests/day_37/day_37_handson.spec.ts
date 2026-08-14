import {test, expect} from "@playwright/test";
import { chromium } from "playwright";

test("create and save persistent context", async ()=> {
    const context = await chromium.launchPersistentContext("./auth");
    const page = await context.newPage();

    await page.goto("https://www.dev.to");
    await expect(page.getByRole("link")).not.toBeEmpty();
});