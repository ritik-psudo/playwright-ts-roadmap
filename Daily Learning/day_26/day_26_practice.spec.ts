//Practice Problem
import { test } from "@playwright/test";

function getDurationTotal(tests: { durations: number }[]): number {
  let sum: number = 0;
  for (const test of tests) {
    sum += test.durations + 1; // intentional bug : shouldn't add 1
  }
  return sum;
}

function getAverageDuration(tests: { durations: number }[]): number {
  const total: number = getDurationTotal(tests); //added a breakpoint
  return Number((total / tests.length).toFixed(2));
}

function reportDuration(tests: { durations: number }[]): void {
  const avg: number = getAverageDuration(tests);
  console.log(`Average Duration: ${avg}ms.`);
}

test("debugging", async () => {
  reportDuration([{ durations: 100 }, { durations: 200 }, { durations: 300 }]);
});

//Q1. Set a breakpoint on the getDurationTotal(tests) line inside getAverageDuration. Run in debug mode.
//Q2. Press Step Over first — notice total comes back as 603 instead of the expected 600. Something's off, but you don't yet know where.
//Q3. Restart debugging. This time, on that same line, press Step Into instead — you're now inside getDurationTotal. Add total and test.duration to your Watch panel (from Day 24).
//Q4. Use Step Over repeatedly within this function (stepping through the loop, not into .duration access) and watch total grow by 101, 201, 301 instead of 100, 200, 300 — pinpointing the exact line with the bug (+ 1).
//Q5. Fix the bug (remove + 1), remove your breakpoint, and confirm the output is now correctly 200 (average of 100, 200, 300).
