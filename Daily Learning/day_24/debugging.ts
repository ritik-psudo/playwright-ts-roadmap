//Debugging in VS Code

import { test, expect } from "@playwright/test";

//1. Console Output: Basic way of debugging

console.log("Simple Message");
console.table([
  { name: "Login", status: "passed" },
  { name: "SignUp", status: "passed" },
  { name: "Checked", status: "passed" },
]);
console.warn("This is a warning");
console.error("This is an error");

/*output:
Simple Message
┌─────────┬───────────┬──────────┐
│ (index) │ name      │ status   │
├─────────┼───────────┼──────────┤
│ 0       │ 'Login'   │ 'passed' │
│ 1       │ 'SignUp'  │ 'passed' │
│ 2       │ 'Checked' │ 'passed' │
└─────────┴───────────┴──────────┘
This is a warning
This is an error*/

//2. Breakpoints - pausing a test execution at a specific line

//Adding a break point at any specific point in the test allows us to pause the entire test at that step and then we can execute the test step by step. When execution hits that line, everything pauses — the rest of your code hasn't run yet, giving you a chance to inspect the current state.

/*3. The Debug Toolbar: Once paused at a breakpoint, a small toolbar appears with:

a. Continue (▶️ / F5) — resume running until the next breakpoint
b. Step Over (F10) — run the current line, then pause on the next line (doesn't go into function calls)
c. Step Into (F11) — if the current line calls a function, jump inside that function to debug it too
d. Step Out (Shift+F11) — finish the current function and pop back up to wherever it was called from
e. Restart — restart the whole debug session
f. Stop — end debugging*/

//4. Watch variables — tracking specific values across multiple pauses

//5. Inspecting variables while paused

/*While paused, hover your mouse over any variable in your code — VS Code shows its current value in a small popup, right there. You can also check the Variables panel in the left sidebar (appears automatically during debugging), which lists every variable currently in scope with its live value.*/

//6. The Debug Console — running code while paused

/*While paused at a breakpoint, open the Debug Console tab (next to your regular Terminal tab). You can type any expression there and it evaluates using the current paused state — e.g., typing testUser.name shows its value right now, even though you didn't write a console.log for it in your actual code. Extremely useful for quick "what if" checks without editing your file.*/

test("check login status", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  const statusText = await page.locator("#submit").textContent(); //set a breakpoint
  expect(statusText).toBe("Submit");
});
