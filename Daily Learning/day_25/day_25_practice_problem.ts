//Practice Problems

//Q1. What command opens playwright inspector?

// npx playwright test --debug

//Q2. Which command pauses the test at a particular step?

// await page.pause();

//Q3. A locator resolved to 5 elements. What could be the issue?

/*The possible reasons could be:
1. Incorrect Locators
2. Locator is not unique
*/

//Q4. Which debugging artifact is useful?

// TraceViewer

//Q5. How do you open a trace path?

// npx playwright show-trace trace.zip

//Q6. What event captures the browser console logs?

// await page.on('console',....);

//Q7. Why is this bad? await page.waitForTimeout(5000);

//Because itpauses the page 5 sec even when the element or assertion expecting is done in first seconds. Increases execution time.

//Q8. Which locator strategy is preferred?

// await page.getByRole();

//Q9. What does this mean? Expected visible, Received hidden?

//It means that the expected element exists but nor visible in the current DOM or the page is taking too long to load.

//Q10. A test passes locally but fails in CI, why?

/*
1. Environment Issue
2. Configuration Issue
3. Browser Version
4. Missing Test Data
*/