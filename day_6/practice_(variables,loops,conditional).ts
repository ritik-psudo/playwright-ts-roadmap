//Practice Excercise Question: Variables, Loops, Conditional

//Q1. Create a string[] called testEnvironments with "dev", "qa", "staging", "prod". Loop through it and print "Setting up environment: {env}" for each.

let testEnvironments: string[] = ["dev", "qa", "staging", "prod"];
for(let environment of testEnvironments) {
    console.log(`Setting up environment: ${environment}`);
}

//Q2. Create a number[] called apiResponseTimes with 5 values (in ms). Loop through and print "SLOW" for any value above 1000, otherwise print "OK", alongside the value.

let apiResponseTimes: number[] = [4100, 1912, 1230, 812, 293];

for(let time of apiResponseTimes) {
    if(time > 1000) {
        console.log(`SLOW: ${time} ms`);
    } else {
        console.log(`OK: ${time} ms`);
    }
}

//Q3. Create a boolean[] called testResults representing pass/fail for 5 tests (mix true/false). Loop through and count how many passed and how many failed, then print both totals.

let testResults: boolean[] = [true, false, true, true, false];
let passedTests: number = 0;
let failedTests: number = 0;

for( let result of testResults) {
    if(result === true) {
        passedTests += 1;
    } else {
        failedTests += 1;
    }
}

console.log(`Number of passed tests: ${passedTests}`);
console.log(`Number of failed tests: ${failedTests}`);
console.log(`Total tests: ${passedTests + failedTests}`);


//Q4. Create a number[] called httpStatusCodes with at least 6 mixed values (200, 201, 400, 401, 404, 500, etc). Loop through and classify each using if/else if: (2xx → "Success"), (4xx → "Client Error"), (5xx → "Server Error")

let httpStatusCodes: number[] = [200, 401, 400, 201, 204, 500, 202, 404, 301, 304, 422];

for(let code of httpStatusCodes) {
    if(code>=200 && code<300) {
        console.log(`2XX → "Success"`);
    } else if(code>=300 && code<400) {
        console.log(`3XX → "Redirection"`);
    } else if(code>=400 && code<500) {
        console.log(`4XX → "Client Error"`);
    } else if(code>=500 && code<600) {
        console.log(`5XX → "Server Error"`);
    } else {
        console.log("Unknown Status");
        
    }
}

//Q5. Create a string[] called browserQueue with "chromium", "firefox", "webkit", "edge". Use a switch statement inside a loop to print the correct launch command for each browser, and "Unsupported browser" for "edge" (since Playwright doesn't support it directly).

let browserQueue: string[] = ["chromium", "firefox", "webkit", "edge"];

for(let browser of browserQueue) {
    switch (browser) {
        case "chromium" : {
            console.log(`Launch ${browser} broswer`);
            break;
        }
        case "firefox" : {
            console.log(`Launch ${browser} broswer`);
            break;
        }
        case "webkit" : {
            console.log(`Launch ${browser} broswer`);
            break;
        }
        case "edge" : {
            console.log(`Unsupported broswer`);
            break;
        }
    }
}

//Q6. Simulate a retry mechanism: create a number called maxRetries = 5 and a boolean called isElementFound = false. Use a while loop that keeps attempting (print "Attempt X: checking element") and randomly-simulate success by setting isElementFound = true when the attempt number equals 3. Loop should stop as soon as element is found OR retries are exhausted — print a final message stating which one happened.

let maxRetries: number = 5;
let attempts: number = 1;
let isElementFound: boolean = false;

while (!isElementFound && attempts <= maxRetries) {
    console.log(`Attempt ${attempts}: checking element`);
    if(attempts === 3) {
        console.log(`Element found at: Attempt ${attempts}`);
        isElementFound = true;
    } else if (attempts === maxRetries) {
        console.log("No Element Found");
    }
    attempts++;
}

/*Q7. Create an array of test objects, each with name: string and status: string (status being "passed", "failed", or "skipped"), with at least 6 entries. Loop through and:

Count totals for each status
Print a final summary: "Total: X, Passed: X, Failed: X, Skipped: X"
Calculate and print the pass percentage (passed / total × 100), rounded to 2 decimal places
*/

let passed: number = 0;
let failed: number = 0;
let skipped: number = 0;
let testStatuses : {name: string, status: string}[] = [
    {
        name: "Login",
        status : "Passed"
    },
    {
        name: "Sign Up",
        status : "Failed"
    },
    {
        name: "Create Account",  
        status: "Skipped"
    },
    {
        name: "Forgot Password",  
        status: "Skipped"
    },
    {
        name: "Captcha",  
        status: "Passed"
    },
    {
        name: "Save Login Info",  
        status: "Failed"
    },
    {
        name: "Forgot Username",  
        status: "Skipped"
    }
]

for(let testSummary of testStatuses) {
    if(testSummary.status === "Passed") {
        passed++;
    } else if(testSummary.status === "Failed") {
        failed++;
    } else if(testSummary.status === "Skipped") {
        skipped++;
    }
}
let total : number = passed + failed + skipped;
console.log(`Total: ${total}, Passed: ${passed}, Failed: ${failed}, Skipped: ${skipped}`);

let passPercent: number = Number((passed/(total)*100).toFixed(2)) ; //toFixed(2) makes the number to string, to convert it back to Number, Number() is used.
console.log(`Pass Percent: ${passPercent}`);


/*Q8.  Create a number[] called loadTimes with 8 values. Using a loop and conditionals (no built-in Math.max/Math.min — do it manually), find and print:

The fastest (minimum) load time
The slowest (maximum) load time
The average load time
*/

const loadTimes: number[] = [200 ,120, 245, 345, 215, 220, 101, 177, 216];
let min: number = loadTimes[0];
let max: number = loadTimes[0];
let sum: number = 0;

for(let i: number = 0; i<loadTimes.length; i++) {
    sum += loadTimes[i];
} 

for(let i: number = 1; i<loadTimes.length; i++) {
    if (loadTimes[i]<min) {
        min = loadTimes[i];
    } else if (loadTimes[i]>max){
        max = loadTimes[i];
    }
} 

console.log(`Fastest (minimum) load time: ${min} ms`);
console.log(`Slowest (maximum) load time: ${max} ms`);
let average: number = Number((sum / loadTimes.length).toFixed(2));
console.log(`Average Load Time: ${average} ms`);


/*Q9. Simulate a login test with flaky retry logic: create a number called attempt = 0, maxAttempts = 4, and a boolean called loginSuccessful = false. Use a loop where each attempt has a fixed pattern (not random) — attempts 1 and 2 fail, attempt 3 succeeds. For each attempt, print whether it passed or failed. If successful, print "Login successful after X attempts" and stop immediately. If all attempts are exhausted without success, print "Login failed after {maxAttempts} attempts, aborting test".
*/

let attempt: number = 1;
let maxAttempts: number = 4;
let loginSuccessful: boolean = false;

while(!loginSuccessful && (attempt <= maxAttempts)) {
    if(attempt === 3) {
        console.log(`Attempt ${attempt}: passed`);
        console.log(`Login successful after ${attempt} attempts`);
        loginSuccessful = true;
    } else {
        console.log(`Attempt ${attempt}: failed`);
    }
    attempt++;
}

if (!loginSuccessful) {
    console.log(`Login failed after ${maxAttempts} attempts, aborting test`);
}

/*Q10. You're validating an API test suite's results. Create an array of objects, each representing a test case with:
{ testName: string, expectedStatus: number, actualStatus: number }
Include at least 6 test cases with a mix of matching and mismatching statuses. Loop through all of them and:
If expectedStatus === actualStatus, print "{testName}: PASS"
Otherwise, print "{testName}: FAIL — expected {expectedStatus} but got {actualStatus}"
Track and print a final count: "X/Y tests passed"
Bonus: if pass rate is below 70%, print an additional warning: "⚠️ Build quality gate failed"
*/
let apiPass: number = 0;
let apiFail: number = 0;
let apiTotal: number = 0;
let apiPercent: number = 0;
const apiTestSuite : {testName : string, expectedStatus: number, actualStatus: number}[] = [
    {
        testName : "Login",
        expectedStatus : 200,
        actualStatus : 200
    },
    {
        testName : "SignUp",
        expectedStatus : 404,
        actualStatus : 401
    },
    {
        testName : "Create Account",
        expectedStatus : 200,
        actualStatus : 200
    },
    {
        testName : "Forgot Password",
        expectedStatus : 501,
        actualStatus : 404
    },
    {
        testName : "Save Info",
        expectedStatus : 301,
        actualStatus : 304
    },
    {
        testName : "Profile Avatar",
        expectedStatus : 200,
        actualStatus : 200
    },
    {
        testName : "My Profile",
        expectedStatus : 401,
        actualStatus : 200
    }
]

for(let apiTest of apiTestSuite) {
    if(apiTest.actualStatus === apiTest.expectedStatus) {
        console.log(`${apiTest.testName}: PASS`);
        apiPass++;
    } else {
        console.log(`${apiTest.testName}: FAIL — expected ${apiTest.expectedStatus} but got ${apiTest.actualStatus}`);
        apiFail++;
    }
}

apiTotal = apiPass + apiFail;
console.log(`${apiPass}/${apiTotal} tests passed`);

apiPercent = ((apiPass/apiTotal)*100);

if (apiPercent < 70) {
    console.log("⚠️ Build quality gate failed");
       
}