//Practice Question

//1. Create an object testUser = { username: string, password: string, role: string }. Destructure username and role into separate variables and print them using a template literal.

const testUser: {username: string, password: string, role: string} = {
    username: "Ritik",
    password: "Secret123",
    role: "admin"
}
const {username, password, role} = testUser;
console.log(`${username} has logged in with password ${password} as ${role}`);


//2. Write a function formatTestResult(name: string, status: string = "pending"): string that returns a template literal like "{name}: {status}". Call it once with both args, once with just name.

function formatTestResult(name: string, status: string = "pending"): string {
    return (`${name}: ${status}`);
}

console.log(formatTestResult("Sign Up"));
console.log(formatTestResult("Login", "passed"));

//3. Create an object apiResponse = { statusCode: number, body: string }. Destructure it directly inside a function parameter and print "Response {statusCode}: {body}".

const apiResponse: {statusCode: number, body: string} = {
    statusCode: 200,
    body: "OK"
}

function printStatus ({statusCode, body}: {statusCode: number, body: string}): string {
    return (`Response ${statusCode}: ${body}`);
}

console.log(printStatus(apiResponse));

//4. Create a string[] called testEnvironments with 4 values. Use array destructuring to get the first and third items into separate variables (skip the second using a comma).

const testEnvironments: string[] = ["dev", "prod", "qa", "stage"];

const [first,,third] = testEnvironments;
// const [,,third] = testEnvironments;

console.log(first, third);

//5. Create an object browserConfig = { browser: string, headless?: boolean } where headless is optional. Destructure it with a default value of true for headless, print the result — test with an object that omits headless.

const browserConfig : {browser: string, headless?: boolean} = {
    browser: "chrome"
} 

const {browser, headless = true} = browserConfig;
// const {browser} = browserConfig;

console.log(`Browser: ${browser}, Headless: ${headless}`);
// console.log(`Browser: ${browser}`);

//6. Write a function buildTestUrl(env: string, path: string = "/login"): string that returns a template literal combining a base URL pattern with env and path, e.g. `https://${env}.example.com${path}`. Call it with just env, then with both args.

function buildTestUrl (env: string, path: string = "/login"): string {
    return (`https://${env}.example.com${path}`);
}

console.log(buildTestUrl("stage")); //https://stage.example.com/login
console.log(buildTestUrl("stage","/signup")); //https://stage.example.com/signup

//7. Create an object testCase = { name: string, duration: number, tags: string[] }. Destructure name and tags, then use a template literal with a ternary inside ${} to print "{name} is slow" if duration > 300, else "{name} is fast" (you'll need duration too — destructure it as well).

const testCase : {name: string, duration: number, tags: string[]} = {
    name: "LogIn",
    duration: 438,
    tags: ["Home", "Account", "Help"]
}

const {name, duration, tags} = testCase;

console.log(duration > 300 ? `${name} is slow` : `${name} is fast`);

//8. Write a function logRetry({ attempt, maxAttempts }: { attempt: number; maxAttempts: number }): void that prints a multi-line template literal showing the attempt number, max attempts, and whether it's the final attempt (attempt === maxAttempts).

function logRetry ({attempt, maxAttempts}: {attempt: number, maxAttempts: number}): void {
    console.log(`
        Attempt Number: ${attempt},
        Max Attempts: ${maxAttempts},
        is Final Attempt: ${attempt === maxAttempts}    
    `);
}

const retry: {attempt: number, maxAttempts: number} = {
    attempt: 4,
    maxAttempts: 9
}

logRetry(retry);

//9. Create an array of test names string[] with at least 5 entries. Destructure the first two into named variables primaryTest and secondaryTest (using renaming isn't possible in array destructuring the same way — just name your variables directly), print both.

const testNames: string[] = ["Login", "SignUp", "Checkout", "Account", "About"];

const [primaryTest, secondaryTest] = testNames;

console.log(primaryTest, secondaryTest);

//10. Create an object testRun = { suiteName: string, results: { passed: number, failed: number, skipped: number } } (nested object). Destructure suiteName at the top level, and passed, failed from the nested results object in a single destructuring statement (hint: const { suiteName, results: { passed, failed } } = testRun;). Use a multi-line template literal to print a formatted report combining all destructured values, including a manually calculated total (passed + failed).

const testRun : {suiteName: string, results: {passed: number, failed: number, skipped: number}} = {
    suiteName: "Homepage",
    results: {
        passed: 6,
        failed: 8,
        skipped: 2
    }
}

const {suiteName, results:{passed, failed,skipped}} = testRun;

console.log(`
        Suit Name: ${suiteName},
        Passed Test Cases: ${passed},
        Failed Test Cases: ${failed},
        Skipped Test Cases: ${skipped},
        Total Test Cases: ${passed+failed+skipped};    
    `);

