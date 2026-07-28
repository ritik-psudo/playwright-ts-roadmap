//Step into & step over debugging techniques

/*Real playwright framework calls fucntions which internally calls other functions, eg: runTestSuite function calls getSummary function. In case of a failure it has to be decided whether you look into each function that are being called (directly or indirectly) or you trust a functions logic and ready to move past it.
 */

/* 1. Recap: the four stepping controls
Control     Shortcut        What it does
Continue	F5	            Resume until the next breakpoint
Step Over	F10	            Run current line fully, pause on next line — does NOT go inside function calls
Step Into	F11             If current line calls a function, jump inside it
Step Out	Shift+F11       Finish current function, return to where it was called from
*/

//2. Step Over (F10) - default choice: Use this when you dont have to look into a function and don't need to inspect at the moment.

function calculateAverage(numbers: number[]): number {
  let sum: number = 0;
  for (const num of numbers) {
    sum += num;
  }
  return Number((sum / numbers.length).toFixed(2));
}

function generateReport(numbers: number[]): string {
  const avg: number = calculateAverage(numbers);
  return `Average: ${avg}`;
}

console.log(generateReport([3, 5, 1, 9, 4, 7, 2]));

//In case generateReport fails and it is sure that calculateAverage is working fine maybe tested thoroughly before, then using "step over" debuging F10 runs the fucntion calculateAverage in the background and brings the line of debugging directly to the next line after calling that function. It skips to debug the function called indirectly.

//3. Step Into F(11) - Use this when you are not sure at what level of fucntions the root cause of the bug could be present. It moves the debug line to each and every functions.

//4. Step Out (Shift+F11) - When you have used "Step Into" and now after debugging first few lines of the function, it is noticed that the function is working as expected. Then "Step Out" is used to move out of debugging the child function.

//5. Nested function calls - example:

function getPassedTests(tests: { status: string }[]): number {
  return tests.filter((test) => test.status === "Passed").length;
}

function getSummary(tests: { status: string }[]): string {
  const passed = getPassedTests(tests); //--> add a breakpoint here
  return `Passed: ${passed}`;
}

function runTestSuite(tests: { status: string }[]): void {
  const summary = getSummary(tests);
  console.log(summary);
}

runTestSuite([
  { status: "Passed" },
  { status: "Failed" },
  { status: "Passed" },
  { status: "Failed" },
  { status: "Passed" },
]);

/*
If your breakpoint is on the getPassedTests(tests) line inside getSummary:

a. Step Over → skips straight past it, passed is now populated, you're still in getSummary
b. Step Into → jumps inside getPassedTests, where you could watch the .filter() call happen (though stepping into built-in array methods like ".filter" often just jumps back out immediately, since they're native, highly-optimized code, not your own TypeScript)
c. From inside getPassedTests, Step Out → finishes it and returns you to getSummary, right after the call, with passed now set
*/

//6. The practical debugging strategy:
/*
a. Set your breakpoint at the point where output looks wrong
b. Step Over everything you trust
c. The moment a variable looks unexpected after a Step Over, that's your signal: go back and re-run, but Step Into that specific call to find exactly where it goes wrong
d. Once you've found and understood the issue, Step Out repeatedly to get back to a normal running state, or just hit Continue
*/

