//How to identify, analyze, debug and fix the Playwright test failures effectively

import {test, expect} from "@playwright/test";

//1. Types of failures in Playwright test:

/*
Application Issues:
1. API not returning correct response in required time.
2. UI bug
3. Elements not getting rendered correctly.
4. Broken functionality.

Test Script Issues:
1. Wrong Locators
2. Incorrect assertion for the validations
3. Timing issue between elements presence and assertion.
4. Incorrect test data.

Environment Issue:
1. Instability in the network.
2. Deployment Issue.
3. Configuration Issue
4. Browser Crash
*/

//await pageXOffset.click("#loginBtn"); //error: TimeoutError: locator.click: Timeout 30000ms exceeded

/*Possible reasons for this error:
1. Element not present in the DOM.
2. Mentioning the wrong locator.
3. Page not loaded fully for most of the elements to rendered.
4. Any overlay on the page that is blocking the click.
*/

//2. Reading Playwright error messages:

/*
Error: expect(locator).toHaveText()
Expected: "Success" 
Recevived: "Failed"

from this we know that the assertion at the code level was:

await expect(page.locator(".status")).toHaveText("Success");

Actual text received: "Failed" 

Possible reasons behind this error:
1. Application Bug.
2. Incorrect expectations.
3. Incorrect test data.
*/

//3. Common playwright errors and fixes:

/*
1.) Error 1 - Timeout Error:

await page.locator("#submit").click();                  error: TimeoutError

Root Causes:
1. Incorrect Locator
2. Element not visible
3. App loading slowly

Fixes:

await expect(page.locator("#submit")).toBeVisible(); //checks whether that particular element with id=submit is visible or not

await page.waitForLoadState("networkidle"); //wait till the entire page is loaded fully and there's no backened calls pending

2.) Error 2 - Element Not Found

await page.locator("username").fill("aadmin");          error: locator resolved to 0 elements

Root Cause:
1. Incorrect Test Data
2. Wrong Locator
3. Page loading slowly

Fixes:

await page.locator("#username"); //bad practice

await page.getByLabel("Username") //suggested practice as it is resilient to code changes and user faces label and placeholder only.

3.) Error 3 - Multiple elements found

await page.locator('button');                            error: resolved to 5 elements

Fixes:

page.getByRole('button', {name: 'Submit'}); //Be Specific

4.) Error 4 - Assertion Failure

await expect(page.getByText('Welcome)).toBeVisible();       error: Expected visible, Received hidden

Possible Root Causes:
1. Wrong Page.
2. Element Hidden.
3. Incorrect Test Data.
*/

//4. Locator Debugging: 

/*
1.) npx playwright codegen //best to use "getByLabel" or "getByRole"

2.) npx playwright test --debug //we can pause execution, inpect locators, execute step by step, element state.

3.) Pause manually: await page.pause();
*/

//5. Trace Viewer Debugging:

/*
Enable Trace - 

use: {
    trace: 'on-first-retry'
}

run test

Open Trace - 

npx playwright show-trace trace.zip

Trace Viewer Shows: 
1. Every action
2. Network calls
3. Console logs
4. Screenshots
5. DOM snapshot
*/

//6. Advanced Debugging Methods:

test("Error Console", async ({page})=>{
    await page.on('console',msg => {
        console.log(msg.text()); //Browser Console Logs
    });

    await page.on('pageerror', err => {
        console.log(err.message); //JavaScript Errors
    });

    await page.on('response', response => {
        console.log(response.status(), response.url()); //Network Monitoring
    });

    await page.screenshot({
        path: 'failure.png',
        fullPage: true
    });
});

//Real Project Debugging Approach

/*
Step 1

Read error carefully.

Step 2

Check screenshot.

Step 3

Check video.

Step 4

Open trace viewer.

Step 5

Verify locator.

Step 6

Check API response.

Step 7

Run in debug mode.

Step 8

Fix root cause, not symptom.
*/


