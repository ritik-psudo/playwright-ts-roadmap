//Demo App : https://todomvc.com/examples/react/dist/

//Scenario : Automate Core Todo actions (add, complete, delete) on the todo app

import { test, expect } from "@playwright/test";

test("test to do app @sanity", async ({ page }) => {
  await page.goto("https://todomvc.com/examples/react/dist/");
  await expect(page.getByTestId("header").getByRole("heading")).toContainText(
    "todos",
  );
  await page.getByTestId("text-input").click();
  await page.getByTestId("text-input").press("CapsLock");
  await page.getByTestId("text-input").fill("G");
  await page.getByTestId("text-input").press("CapsLock");
  await page.getByTestId("text-input").fill("Groceries");
  await page.getByTestId("text-input").press("Enter");
  await page.getByTestId("text-input").press("CapsLock");
  await page.getByTestId("text-input").fill("W");
  await page.getByTestId("text-input").press("CapsLock");
  await page.getByTestId("text-input").fill("Walk");
  await page.getByTestId("text-input").press("Enter");
  await page.getByTestId("text-input").press("CapsLock");
  await page.getByTestId("text-input").fill("S");
  await page.getByTestId("text-input").press("CapsLock");
  await page.getByTestId("text-input").fill("Study");
  await page.getByTestId("text-input").press("Enter");
  await page.getByTestId("text-input").press("CapsLock");
  await page.getByTestId("text-input").fill("R");
  await page.getByTestId("text-input").press("CapsLock");
  await page.getByTestId("text-input").fill("Rest");
  await page.getByTestId("text-input").press("Enter");
  await page.getByTestId("text-input").press("CapsLock");
  await page.getByTestId("text-input").fill("G");
  await page.getByTestId("text-input").press("CapsLock");
  await page.getByTestId("text-input").fill("Games");
  await page.getByTestId("text-input").press("Enter");
  await page
    .getByRole("listitem")
    .filter({ hasText: "Groceries" })
    .getByTestId("todo-item-toggle")
    .check();
  await page
    .getByRole("listitem")
    .filter({ hasText: "Study" })
    .getByTestId("todo-item-toggle")
    .check();
  await page
    .getByRole("listitem")
    .filter({ hasText: "Games" })
    .getByTestId("todo-item-toggle")
    .check();
  await page.getByRole("link", { name: "Active" }).click();
  await expect(page.getByText("Walk")).toBeVisible();
  await expect(page.getByText("Rest")).toBeVisible();
  await page.getByRole("link", { name: "Completed" }).click();
  await page.getByText("Groceries").click();
  await expect(page.getByText("Study")).toBeVisible();
  await expect(page.getByText("Games")).toBeVisible();
  await page.getByRole("link", { name: "All" }).click();
  await page.getByRole("button", { name: "Delete todo" }).click();
  await page.getByRole("button", { name: "Delete todo" }).click();
  await page.getByRole("button", { name: "Delete todo" }).click();
  await page.getByRole("button", { name: "Delete todo" }).click();
  await page.getByTestId("todo-item-button").click();
  await expect(page.getByTestId("text-input")).toBeVisible();
});
