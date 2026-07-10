//Practice Problems

// 1. Write a function addNumbers that takes two number parameters and returns their sum.

const addNumbers = (num1: number, num2: number) : number => num1 + num2;
console.log(addNumbers(4,9));

// 2. Write a function greetTester that takes a name: string and returns "Welcome, {name}!". Convert it into an arrow function version too.

function greetUser (name: string) : string {
    return (`Welcome, ${name}!`);
};

console.log(greetUser("Alice"));
//arrow function
const greeting = (name: string) : string => (`Welcome, ${name}!`);
console.log(greeting("James"));

// 3. Write a function isEven that takes a number and returns a boolean — true if even, false if odd.

function isEven (num : number) : boolean {
    return (num % 2 === 0);
}

console.log(isEven(10));

// 4. Write a function logBrowserLaunch(browserName: string, headless: boolean = true): void that prints a launch message, and call it twice — once with default headless, once overriding it.

function logBrowserLaunch (browserName : string, headless : boolean = true) : void {
    console.log(`Browser launched: ${browserName}, Headless: ${headless}`);
}

logBrowserLaunch("chromium"); //with default headless
logBrowserLaunch("firefox", false);

// 5. Write a function checkHttpStatus(statusCode: number): string that returns "Success" for 2xx, "Client Error" for 4xx, "Server Error" for 5xx, and "Unknown" otherwise (reuse your Day 4/6 conditional logic inside).

function checkHttpStatus (statusCode: number) : string {
    if (statusCode >= 200 && statusCode < 300) {
        return "Success";
    } else if (statusCode >= 400 && statusCode < 500) {
        return "Client Error";
    } else if (statusCode >= 500 && statusCode < 600) {
        return "Server Error";
    } else {
        return "Unknown";
    }
}

console.log(checkHttpStatus(200));

// 6. Write an arrow function calculateAverage(times: number[]): number that returns the average of an array of numbers (reuse logic from Day 6).

function calculateAverage (times: number[]): number {
    let sum: number = 0;
    for (const time of times) {
        sum += time;
    }
    return (sum/times.length);
}

console.log((calculateAverage([34, 45, 67, 78, 23, 85])).toFixed(2));

// 7. Write a function retryAction(maxAttempts: number): void that simulates retrying — loop from 1 to maxAttempts, printing "Attempt X", and print "Success on attempt 3" if the attempt equals 3, stopping immediately after.

function retryAction (maxAttempts: number): void {
    for(let attempt: number = 1; attempt <= maxAttempts; attempt++) {
        console.log(`Attempt ${attempt}`);
        if(attempt === 3) {
            console.log(`Success on attempt ${attempt}`);
            break;
        }
    }
}

retryAction(7);

// 8. Write a function findSlowTests(times: number[], threshold: number): string[] that returns an array of formatted strings (e.g., "215ms - SLOW") only for times greater than the threshold, using a loop internally.

function findSlowTests (times: number[], threshold: number) : string[] {
    const result : string[] = [];
    for (const time of times) {
        if (time > threshold) {
            result.push(`${time}ms - SLOW`);
        }
    }
    return result;
}

console.log(findSlowTests([200, 450, 300, 201, 302, 480, 299, 321], 270));

// 9. Write an arrow function getPassPercentage(passed: number, total: number): number that returns the pass percentage rounded to 2 decimal places (reuse logic from Day 6, Q7).

const getPassPercentage = (passed: number, total: number) : number => Number(((passed/total)*100).toFixed(2));

console.log(getPassPercentage(7,11));

// 10. Write a function runTestSuite(tests: {name: string, status: string}[]): void that takes an array of test objects (like Day 6, Q7) and internally calls another function you write, getSummary(tests): string, which returns a formatted summary string ("Total: X, Passed: X, Failed: X"). runTestSuite should just call getSummary and print its result. (This introduces the idea of functions calling other functions — very common in real frameworks.)

type TestCase = {name: string, status: string};

function runTestSuite (tests: TestCase[]): void {
    const summary: string = getSummary(tests);
    console.log(summary);
}

function getSummary (tests: TestCase[]): string {
    let passed: number = 0;
    let failed: number = 0;
    for (const test of tests) {
        if (test.status === "Passed") {
            passed += 1;
        } else if (test.status === "Failed"){
            failed += 1;
        }
    }

    const total: number = tests.length;
    return (`Total: ${total}, Passed: ${passed}, Failed: ${failed}`);
}

const myTests: TestCase[] = [
    {
        name: "Login",
        status: "Passed"
    },
    {
        name: "Signup",
        status: "Failed"
    },
    {
        name: "Checkout",
        status: "Passed"
    },
    {
        name: "Search",
        status: "Passed"
    },

];

runTestSuite(myTests);