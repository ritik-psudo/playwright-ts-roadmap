//Conditional Statements(if, else, switch)

// 1. If : Runs a piece of code only when a certain condition is met.

let isElementVisible : boolean = true;
if (isElementVisible) {
    console.log("Element found, proceed with the click");
}

// 2. If-Else : Runs a piece of code only when a certain condition is met and another when that condition fails.

let responseStatus : number = 404;
if (responseStatus === 200) {
    console.log("Status is OK");
} else {
    console.log("Status is not OK");
}

// 3. If-Else-If : For multiple condition when a different piece of code has to be run, this conditional statement is used.
let responseCode : number = 403;
if (responseCode === 200) {
    console.log("Response Successful");
} else if (responseCode === 403 || responseCode === 404) {
    console.log("Authorization Error");
} else if (responseCode === 500) {
    console.log("Server Error");
} else {
    console.log("Unknown Error")
}

//4. Nested If : when a if condition is present inside another if staement, it is known as Nested If

let isLoggedIn : boolean = false;
let hasPermisson : boolean = true;

if (isLoggedIn) {
    if  (hasPermisson) {
        console.log("User is logged in with permission.");
    } else {
        console.log("User is logged in but with no permission");
    }
} else {
    if  (hasPermisson) {
        console.log("User is not logged in with permission.");
    } else {
        console.log("User is not logged in and with no permission");
    }
}

// 5. Switch Statement : When one value is checked against multiple values then switch is used.

let browserName : string = "firefox";

switch (browserName) {
    case "chromium" : //different possible values expected in the variable is stored in "case".
        console.log("Browser is Chromium");
        break; //it stops the code to execute below code when the case condition is met.

    case "firefox" :
        console.log("Browser is Firefox");
        break;
    
    case "edge" :
        console.log("Browser is Edge");
        break;
    
    case "safari" :
        console.log("Browser is Safari");
        break;
    
}

//excercise

let environment : string = "staging";
let baseURL : string;

switch (environment) {
    case "dev" :
        baseURL = "https://dev.example.com";
        break;
    case "staging" :
        baseURL = "https://staging.example.com";
    break;
    case "production" :
        baseURL = "https://prod.example.com";
        break;
    default :
        baseURL = "https://staging.example.com";
    }

console.log(`Running test against: ${baseURL}`);