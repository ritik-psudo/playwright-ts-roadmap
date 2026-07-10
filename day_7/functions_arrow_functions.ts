//Functions and Arrow Functions

//break logic into reusable functions to create frameworks and reduce scope of errors.

// 1. Basic function decalaration (with return value):

//function nameOfFunction (parameter: type): returnType {}
function greetUser (user: string) : string {
    return(`${user} Hello World!`);
}
console.log(greetUser("Ritik"));

// 2. Basic fucntion (without return values "void")

function logTestStart (testName: string): void {
    console.log(`Starting test: ${testName}`);
} //this nothing return by itself as return type is void

logTestStart("Login");

// 3. Operational & Default Parameters:

//default paraments: isHeadless's value is set as tru by default while decalaring the function itself
function launchBrowser (browserName: string, isHeadless: boolean = true): void {
    console.log(`Launching Browser: ${browserName}, Headless: ${isHeadless}`);
}

launchBrowser("chromiumn"); //when not specified the isHeadless parameter value is true;
launchBrowser("firefox",false); //passing isHeadless as False

//optional parameters: "parameterName"? shows that it is optional and function run fine even when it is skipped.
function runTest (testName: string, retries?: number): void {
    console.log(`Test Name: ${testName}, Retries: ${retries ?? "unspecified"}`);
    // ${retries ?? "unspecified"} "??" returns the later when the parameter is not passed.
}

runTest("SignUp");

// 4. Function returnins value that you actually use:

function isStatusSuccessful (statusCode: number) : boolean {
    return statusCode >= 200 && statusCode < 300;
} //functions return true only when both condition are met.

const result: boolean = isStatusSuccessful(404);
//function returning is saved into a variable which is later used.
//instead of repeating that if check everywhere, you call this one function whenever you need it.
console.log(result);

// 5. Arrow Functions: When function body is just one line or expression then arrow functions should be used

const greeting = (userName: string) : string =>{
    return (`Hello! ${userName}`);
};

console.log(greeting("Ritik"));

//or even shorter way

const isStatusPassed = (statusCode: number) : boolean => statusCode >= 200 && statusCode < 300;
console.log(isStatusPassed(404));

//use

const testUsers: string[] = ["alice", "james", "pete"];
testUsers.forEach((user: string): void =>{
    console.log(`Hello ${user}`);
})

//Function declaration vs arrow function — when to use which
/* Can be called before the decalaration (function decalaration)
Should be delared first (arrow function)*/

//practice:

function calculateAverage (times: number[]) : number {
    let sum: number = 0;
    for (const time of times) {
        sum += time;
    }
    return (sum/times.length);
}

const responseTimes : number[] = [200, 340, 150];
console.log(calculateAverage(responseTimes));

const isSlow = (time: number) : boolean => time > 300
console.log(isSlow(350));
