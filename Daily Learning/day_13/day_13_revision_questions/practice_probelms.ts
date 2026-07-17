//Pratcie problems

//Q1. (Variables/Types) Create a const called testEnvironment typed as a union "dev" | "qa" | "prod", set to "qa". 

const testEnvironment: "dev"|"qa"|"prod" = "prod";
console.log(testEnvironment); //output: prod

//Q2. (Operators/Conditionals) Write a function getStatusCategory(code: number): string that returns "Success", "Client Error", "Server Error", or "Unknown" based on the status code range.

function getStatusCategory(code: number) : string {
    if(code>= 200 && code < 400) {
        return "Success";
    } else if (code >= 400 && code < 500) {
        return "Client Error";
    } else if (code >= 500 && code < 600) {
        return "Server Error";
    } else {
        return "Unknown";
    }
}

console.log(getStatusCategory(204)); //Success
console.log(getStatusCategory(404)); //Client Error
console.log(getStatusCategory(504)); //Server Error
console.log(getStatusCategory(4)); //Unknown
console.log(getStatusCategory(41000)); //Unknown

//Q3. (Loops) Write a function sumArray1(numbers: number[]): number that manually sums an array using a for loop (no reduce).

function sumArray1(numbers: number[]): number {
    let sum: number = 0;
    for(const num of numbers) {
        sum += num;
    }
    return sum;
}

const numArray: number[] = [34, 21, 72, 89, 90, 27];
console.log(sumArray1(numArray)); //Output: 333

//Q4. (Functions/Arrow functions) Convert your sumArray1 function from Q3 into an arrow function sumArray2 version, and use it inside a new function getAverage(numbers: number[]): number.

const sumArray2= (numbers: number[]): number => {
    let sum: number = 0;
    for(const num of numbers) {
        sum += num;
    }
    return sum;
}

const getAverage = (numbers: number[]):number => {
    return Number((sumArray2(numbers)/numbers.length).toFixed(2));
}

console.log(getAverage([23, 24, 25, 26, 27, 28, 29, 30])); //output: 26.5

//Q5. (Arrays/Objects methods) Create an array of test objects { name: string; status: "passed" | "failed" | "skipped" } (at least 6 entries, using the union type from Day 12!). Use filter + map to get an array of names of only the "failed" tests.

let testStatus: {name: string, status: "passed"|"failed"|"skipped"}[] = [
    {
        name: "Login",
        status: "passed"
    },
    {
        name: "SignUp",
        status: "failed"
    },
    {
        name: "Checkout",
        status: "failed"
    },
    {
        name: "Account",
        status: "passed"
    },
    {
        name: "ProfilePic",
        status: "skipped"
    },
    {
        name: "LogOut",
        status: "failed"
    }
]

console.log(testStatus.filter((test): boolean => test.status === "failed").map((test): string => test.name));

//Q6. (Modules — conceptual) Without actually creating separate files, write a comment explaining which two functions from Q3-Q5 you'd move into a testUtils.ts file if this were a real multi-file project, and why.

//Answer: The functions from Q3, Q4 & Q5 which can and shall be put in the testUtils.ts file are "sumArray1" (Q3), "sumArray2" & "getAverage" (Q4) and a function to save name of all failed testcases in to an array.

//Q7. (Destructuring + Template literals) Create an object { suiteName: string; total: number; passed: number }. Destructure all three fields, then print a template literal summary including a manually calculated fail count (total - passed).

const testSuite: {suiteName: string, total: number, passed: number} = {
    suiteName: "Create Account",
    total: 34,
    passed: 32
};

const {suiteName, passed, total} = testSuite;

console.log(`Suite Name: ${suiteName}, Passed: ${passed}, Failed: ${total - passed}, Total: ${total}`);

//Q8. (TypeScript safety — Day 12 concepts) Write an interface TestConfig { browser: "chromium" | "firefox" | "webkit"; retries: number; headless?: boolean }. Create one valid object using it, destructure it with a default value of 2 for retries (in case it's ever made optional later), and print the result.

interface TestConfig {browser: "chromium"|"firefox"|"webkit", retries: number, headless?: boolean};

const test1: TestConfig = {browser: "chromium", retries: 4, headless: false};
const {browser, retries = 2, headless} = test1;
console.log(browser, retries, headless); //this returns "retries" with value 4, it sticks to default only when it is undefined.

/* Q9.  (Combining everything) Write a function generateTestReport(tests: { name: string; status: "passed" | "failed" | "skipped" }[]): string that:

Counts each status using filter().length
Calculates pass percentage (rounded to 2 decimals)
Returns a multi-line template literal summary
*/

function generateTestReport(tests: {name: string, status: "passed"|"failed"|"skipped"}[]): string {
    const failedTest: number = tests.filter((test): boolean => test.status === "failed").length;
    const passedTest: number = tests.filter((test): boolean => test.status === "passed").length;
    const skippedTest: number = tests.filter((test): boolean => test.status === "skipped").length;
    const total: number = tests.length;

    const passPercent: number = Number(((passedTest/total)*100).toFixed(2));

    return (
        `Passed Test Cases: ${passedTest},
        Failed Test Cases: ${failedTest},
        Skipped Test cases: ${skippedTest},
        Total Test Cases: ${total},
        Pass Percentage: ${passPercent}`
    )
}

const tests : {name: string, status: "passed"|"failed"|"skipped"}[] = [
    {
        name: "Login",
        status: "passed"
    },
    {
        name: "SignUp",
        status: "skipped"
    },
    {
        name: "Checkout",
        status: "failed"
    },
    {
        name: "Account",
        status: "passed"
    },
    {
        name: "ProfilePic",
        status: "skipped"
    },
    {
        name: "LogOut",
        status: "failed"
    }
]

console.log(generateTestReport(tests));

/*Q10. Write a function runTestsWithRetry(testName: string, maxAttempts: number, succeedOnAttempt: number): void that:

Uses a while loop to simulate attempts
Prints each attempt's pass/fail status (fails until succeedOnAttempt, then succeeds)
Stops immediately once successful, or once maxAttempts is reached
*/

function runTestsWithRetry({testName, maxAttempts, succeedOnAttempt}:{testName: string, maxAttempts: number, succeedOnAttempt: number}): void {
    let attempt: number = 1;
    let isTestPassed: boolean = false;   

    while (isTestPassed === false && attempt !== maxAttempts) {
            if (attempt === succeedOnAttempt) {
                isTestPassed = true;
                console.log(`Test Name: ${testName}, Status: ${isTestPassed}, Attempt: ${attempt}`);
            } else {
                console.log(`Test Name: ${testName}, Status: ${isTestPassed}, Attempt: ${attempt}`);
            }
        attempt++;
    }
}

runTestsWithRetry({testName: "Login", maxAttempts: 8, succeedOnAttempt: 7});