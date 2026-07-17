//Ques. Why Types & Interfaces?
//Ans. Every playwright framework has some (most of them) data shared across all the file - eg: Test Data, API Response, Browser Config, Test Environment, Test Results. So mentioning every time in inline object creation ie {name: string, status: string}, we use types and interface to define them once and accessible to all the files. This makes the framework maintainable as it grows to multiple pages.

//1. Type: a named alias for any shape

type TestUser = {
    name: string,
    role: string,
    password: string
}

const user1:TestUser = {name: "Alice", role: "admin", password: "pass123"};

//type can be used to define more than just objects, it can be used for arrays, function, primitives, union etc.

type statusCode = number; //primitive
type Environment = "dev"|"qa"|"prod"; //union
type BrowserList = ["chromium","firefox","webkit"]; //array
type CompareFn = (a: number, b: number)=>boolean; //function

//2. Interface: specifically for describing object shapes

interface TestUser2 { //notice unlike types no "=" is used to define an interface, otherise the syntax would be identical.
    username: string,
    passcode: string,
    profile: string
}

const user2:TestUser2 = {username: "Smith",passcode: "pass123", profile: "support"};

//Difference between "types" and "interfaces"

//a. Interfaces can be "reopened" and extended (declaration merging)

interface TestConfig {
    browser: string
}

interface TestConfig {
    retries: number
}

//interface TestConfig now has both "browser" and "retries" - Typescript merges them
const config:TestConfig = {browser: "chromium",retries: 5};

//types doesn't allow this, defining it more than oce throws error.

//b. Interfaces extends other interfaces using "extends" keyword, for types keyword is "&"

interface BaseConig {
    headless: boolean
}

interface BrowserConfig extends BaseConig { //extended to other interface using "extend" keyword
    browser: string
}

// BrowserConfig now requires both headless and browsers
const setup:BrowserConfig = {headless: true, browser: "webkit"};
console.log(setup);

type baseConfig2 = {headless: boolean};
type browserConfig2 = baseConfig2 & {retries: number}; //extended to other type using "&" keyword
const setup2:browserConfig2 = {headless: false, retries: 7};
console.log(setup2);

//c. Type can represent primitives and unions but interface cannot

type TestStatus = "passed"|"failed"|"skipped";
//interface TestResult = "passed"|"failed"|"skipped"; //snytax error

//If you want to use union type clearly use "type", not "interface"

/*
Rule of thumb, which to use when:
Use case                                                                Choose
Describing a plain object shape (test data, config, API response)       Either works — interface is a very common convention
Need union types ("passed" | "failed" | "skipped")                      type (required)
Might need to extend/merge later, or building a public library          interface
Combining multiple shapes together (&)                                  type
Function signatures, array aliases, primitive aliases                   type
*/

//warmup
type testStatus = "passed"|"failed"|"skipped";

interface testCase {
    name: string,
    status: testStatus,
    duration: number
}

const myTest1: testCase = {name: "Login",status: "passed",duration: 417};
console.log(myTest1); // output: { name: 'Login', status: 'passed', duration: 417 }

interface BasicConfig {
    headless: boolean;
}

interface BrowserSetup extends BasicConfig {
    browser: string;
}

const web1:BrowserSetup = {headless: true, browser: "firefox"};
console.log(web1); //output: { headless: true, browser: 'firefox' }

