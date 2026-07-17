/*Q11. Create a third file, reportGenerator.ts. In it, import getPassPercentage and the TestCase type from testUtils.ts. Write and export a function generateReport(tests: TestCase[]): string that:

Counts passed/failed/skipped from the array
Uses getPassPercentage to calculate the pass rate
Returns a formatted summary string

Then in main.ts, import generateReport from reportGenerator.ts and call it with your test array from Q6, printing the result.*/

import getPassPercentage from "./testUtils";
import { TestCase } from "./testUtils";

export function generateReport (tests: TestCase[]): string  {
    const passed: number = tests.filter((test) => test.status==="Passed").length;
    const failed: number = tests.filter((test) => test.status==="Failed").length;
    const skipped: number = tests.filter((test) => test.status==="Skipped").length;
    const passRate: number = getPassPercentage(passed, tests.length);
    return `Testcases Passed: ${passed}, Testcases Failed: ${failed}, Testcases Skipped: ${skipped}, Total Testcases: ${tests.length}, Pass Rate: ${passRate}`;
};
