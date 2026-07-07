//Practice Problem:

// 1. Create a boolean called isButtonEnabled. Write an if statement that prints "Button is clickable" only if true.
console.log("Problem 1");
let isButtonEnabled : boolean = true;
if (isButtonEnabled) {
    console.log("Button is clickable");
}

// 2. Create a number called httpStatus. Write if/else to print "Success" if it's 200, otherwise "Failure".
// 3. Extend Q2 into if/else if/else: print "Success" for 200, "Client Error" for any status between 400-499, "Server Error" for 500+, and "Unknown" otherwise.
console.log("Problem 2 & 3");
let httpStatus : number = 200;
if (httpStatus === 200) {
    console.log("Success"); //Q2 Ends here
} else if (httpStatus >= 400 && httpStatus <= 499){
    console.log("Client Error");
} else if (httpStatus >= 500) {
    console.log("Server Error");
} else {
    console.log("Unknown");
}

// 4. Create two booleans: isVisible and isEnabled. Write nested if statements to print 3 different messages depending on their combinations (both true, only one true, both false).
console.log("Problem 4");
let isVisible : boolean = true;
let isEnabled : boolean = true;

if (isVisible) {
    if (isEnabled) {
        console.log("Element is visible and enabled");
    } else {
        console.log("Element is visible but disabled");
    }
} else {
    if (isEnabled) {
        console.log("Element is not visible but enabled");
    } else {
        console.log("Element is neither visible nor enabled");
    }
}

// 5, Create a string called testEnvironment with value "qa". Use a switch statement to print a different message for "dev", "qa", "prod", and a default case.

console.log("Problem 5");
let testEnvironment : string = "qa";
switch (testEnvironment) {
    case "qa" :
        console.log("Environment is qa");
        break;
    case "dev" :
        console.log("Environment is dev");
        break; 
    case "prod" :
        console.log("Environment is prod");
        break; 
    default :
        console.log("Unknown Environment");
}


// 6. Write a switch statement on a string called browserType ("chromium", "firefox", "webkit") that sets a let variable launchCommand accordingly, then print it.
console.log("Problem 6");
let launchCommand : string;
let browserType : string = "firefox";
switch (browserType) {
    case "chromium" :
        launchCommand = "Open Chrome Browser";
        break;
    case "firefox" :
        launchCommand = "Open Firefox Browser";
        break;
    case "webkit" :
        launchCommand = "Open Safari Browser";
        break;
    default :
        launchCommand = "Unsupported Browser";
}

console.log(`Launch Command: ${launchCommand}`);

// 7. Create a number called retryCount. Write an if statement: if it's >= 3, print "Max retries reached, stopping test", otherwise print "Retrying...".

console.log("Problem 7");
let retryCount : number = 4;

if (retryCount >= 3) {
    console.log("Max retries reached, stopping test");
} else {
    console.log("Retrying...");
}

// 8. Using a ternary (from Day 3) and an if/else, write both versions of a check: isTestPassed prints "PASS" or "FAIL". Compare the two approaches in a comment — which is cleaner here?
console.log("Problem 8");

let isTestPassed : boolean = true;

//using ternary operator
console.log((isTestPassed) ? "PASS" : "FAIL"); //this is way cleaner

//using if else statement
if (isTestPassed) {
    console.log("PASS");
} else {
    console.log("FAIL");
}

// 9. Create a number called testPriority (1, 2, or 3). Use switch to print "Critical", "Medium", "Low" respectively, and "Invalid priority" as default.

console.log("Problem 9");
let testPriority : number = 2;
switch (testPriority) {
    case 1 :
        console.log("Critical");
        break;

    case 2 :
        console.log("Medium");
        break;

    case 3 :
        console.log("Low");
        break;

    default :
        console.log("Invalid Priority");
}

// 10. Simulate an assertion check — create expectedTitle and actualTitle as strings. Write an if/else that prints "Title matches" if equal, otherwise prints both values so you can see the mismatch (e.g., `Expected: ${expectedTitle}, but got: ${actualTitle}`).

console.log("Problem 10");

let expectedTitle : string = "Hello New World";
let actualTitle : string = "Helllo Neww wOrld";

if (actualTitle === expectedTitle) {
    console.log("Title Matches");
} else {
    console.log(`Expected Title: ${expectedTitle} , but got: ${actualTitle}`);
}
