//Practice Problems

// 1. Create a string[] called testSuites with 3 names. Use push to add two more, then pop one off. Print the array after each step.

const testSuites: string[] = ["login", "signup", "checkout"];

testSuites.push("forgotPassword", "products");
console.log(testSuites);

testSuites.pop();
console.log(testSuites);

// 2. Create a number[] called statusCodes with mixed values. Use filter to get only the codes >= 400, print the result.

const statusCodes: number[] = [200, 404, 305, 402, 455, 399];

console.log(statusCodes.filter((code: number): boolean => code>= 400));

// 3. Create a string[] called browserNames. Use map to convert each into "Browser: {name}", print the new array.

const browserNames: string[] = ["chromium", "webkit", "firefox", "edge"];

const newArray: string[] = browserNames.map((browser: string)=> `Browser: ${browser}`);

console.log(newArray);

// 4. Create an array of test objects { name: string, duration: number } (at least 5 entries). Use filter to get only tests with duration > 300.

const testDuration : {name: string, duration: number}[] = [
    {
        name: "Log In",
        duration: 209
    },
    {
        name: "Sign Up",
        duration: 312
    },
    {
        name: "Checkout",
        duration: 401
    },
    {
        name: "Create Account",
        duration: 209
    },
    {
        name: "Forgot Password",
        duration: 301
    }
];

const filterTime = testDuration.filter((time): boolean => time.duration > 300);
console.log(filterTime);

// 5. Using the same array from Q4, use find to get the first test with duration > 300, print it.

const moreTime = testDuration.find((time):boolean => time.duration > 300);
console.log(moreTime);

// 6. Create a number[] called responseTimes. Use reduce to calculate the sum, then calculate the average by dividing by .length.

const responseTime: number[] = [200, 404, 305, 402, 455, 399];
const total: number = responseTime.reduce((sum: number, time: number)=> sum + time, 0);
console.log(total);
console.log((total/responseTime.length).toFixed(2));

// 7. Create an array of objects { testName: string, status: string } (at least 6 entries, mix of "passed"/"failed"/"skipped"). Use filter + map chained to produce an array of strings like "Failed: {testName}" only for failed tests.

const testResults : {testName: string, status: string}[] = [
    {
        testName: "Login",
        status: "Passed"
    },
    {
        testName: "Signup",
        status: "Failed"
    },
    {
        testName: "Checkout",
        status: "Failed"
    },
    {
        testName: "Forgot Password",
        status: "Passed"
    },
    {
        testName: "Create Account",
        status: "Failed"
    },
    {
        testName: "ProfileIcon",
        status: "Passed"
    }
]

const failedTests = testResults.filter((test): boolean => test.status === "Failed").map((test): string => `Failed: ${test.testName}`);

console.log(failedTests);

// 8. Create an object testConfig with keys browser, headless, retries. Use Object.keys and Object.entries to print its structure.

const testConfig: {browser: string, headless: boolean, retries: number} = {
    browser: "chromium",
    headless: true,
    retries: 8
}

console.log(Object.keys(testConfig));
console.log(Object.entries(testConfig));

// 9. Create a baseConfig object with { retries: 1, headless: true }. Use the spread operator to create a stagingConfig that overrides retries to 3, without modifying baseConfig. Print both to prove the original wasn't changed.

const baseConfig: {retries: number, headless: boolean} = {
    retries: 8,
    headless: false
}

const stagingConfig = {...baseConfig, retries: 3};
console.log(baseConfig);
console.log(stagingConfig);

// 10.  Create an array of test result objects { name: string, status: string, duration: number } (at least 6 entries). In a single chain, use filter to keep only "passed" tests, then map to transform them into strings like "{name} passed in {duration}ms", and finally use reduce to count how many of those passed tests took longer than 200ms. Print the final count.

const testReport : {testName: string, status: string, duration: number}[] = [
    {
        testName: "Login",
        status: "Passed",
        duration: 200
    },
    {
        testName: "Signup",
        status: "Failed",
        duration: 301
    },
    {
        testName: "Checkout",
        status: "Failed",
        duration: 104
    },
    {
        testName: "Forgot Password",
        status: "Passed",
        duration: 211
    },
    {
        testName: "Create Account",
        status: "Failed",
        duration: 198
    },
    {
        testName: "ProfileIcon",
        status: "Passed",
        duration: 110
    }
];

const passedTest = testReport.filter((test): boolean => test.status==="Passed").map((test): string => `${test.testName} passed in ${test.duration}ms` );

console.log(passedTest);

const slowPassTest = testReport
    .filter((test): boolean => test.status==="Passed")
    .reduce((count: number, test): number => count + (test.duration>200 ? 1 : 0 ),0);

console.log(slowPassTest);



