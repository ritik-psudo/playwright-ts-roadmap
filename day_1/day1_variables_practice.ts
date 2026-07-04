//constant values that won't be changing through out the code
const browserName = "chromium";
const baseURL = "https://example.com";


//let for the values that will change
let retryCount = 0;
let isTestPassed = false;

console.log("Before:",retryCount, isTestPassed);

retryCount = retryCount + 1;
isTestPassed = true;

console.log("After:",retryCount, isTestPassed);

//block scoping demo
if (true) {
    let insideBlock = "I only exist inside this block";
    console.log(insideBlock);
}

//console.log(insideBlock); uncomment this line to see the error

//const with an object (allowed to mutate)
const testConfig = {retries: 2, headless: true};
console.log(testConfig.retries, testConfig.headless);
//mutating
testConfig.retries = 4;
testConfig.headless = true;
//validation
console.log(testConfig.retries, testConfig.headless);

//challenges

//1. reassigning browserName to "firefox" — confirm you get an error.

//browserName = "firefox"; error "Cannot assign to 'browserName' because it is a constant."

//2. Declare a let variable called pageTitle outside any block, then reassign it inside an if block — confirm it works (since let isn't limited to being reassigned only in its own block, just declared there).

let pageTitle = "Welcome";
console.log ("Before:",pageTitle);
if (true) {
    pageTitle = "Welcome Home";
    console.log ("After:",pageTitle);
}

// "Before: Welcome, After: Welcome Home" is the output.

//3. Try declaring the same const variable twice in the same scope — confirm TypeScript blocks it.

const portNumber = 8080;
//const portNumber = 9090; "Cannot redeclare block-scoped variable 'portNumber'" is typescript blocking to reassign a const variable.