//practice questions

//Q1. Write a function calculateTotal(price: number, quantity: number): number. Call it correctly once, then try calling it with a string for price (e.g. "100") — comment on the error TypeScript gives you.

function calculateTotal (price: number, quantity: number) : number {
    return (price * quantity);
}

console.log(calculateTotal(250, 9)); //runs perfectly fine
console.log(calculateTotal("100", 12)); // returns error "Argument of type 'string' is not assignable to parameter of type 'number'."

//Q2. Create a variable let testStatus: string = "passed";. Try reassigning it to true (a boolean) — paste the error you get and explain in a comment why this is useful in test code.

let testStatus: string = "passed";

testStatus = true; // errors are : "Type 'boolean' is not assignable to type 'string'." and "Cannot redeclare block-scoped variable 'testStatus'."

//Q3. Write a function getBrowserConfig(name: string): { name: string; headless: boolean } that returns an object. Deliberately return an object missing the headless field and observe the compiler error.

const getBrowserConfig = (name: string) : {name: string, headless: boolean} => ({
    name: "Hero",
}); // error is: "Property 'headless' is missing in type '{ name: string; }' but required in type '{ name: string; headless: boolean; }'."

//Q4. Create an interface (new keyword — look it up briefly) interface TestUser { username: string; password: string; }. Create a variable of this type, then try creating one that's missing password — note the error.

interface TestUser {username: string, password: string};

let user1:TestUser = {username: "Ritik", password: "pass123"};
console.log(user1);

let user2:TestUser = {username: "Alice"}; //error is "Property 'password' is missing in type '{ username: string; }' but required in type 'TestUser'."
console.log(user2);

//Q5. Write a function isValidStatusCode(code: number): boolean. Call it with a number correctly, then try calling it with null — explain what error (if any) you get and why.

function isValidStatusCode(code: number): boolean {
    return (code >= 200 && code < 600);
};

console.log(isValidStatusCode(604));
console.log(isValidStatusCode(null)); //error is "Argument of type 'null' is not assignable to parameter of type 'number'." because the function isValidStatusCode expects arguement of type number and we are passing a arguement of type null.

//Q6. Create a const testEnv: "dev" | "qa" | "prod" = "dev"; (this is called a union type — a variable restricted to specific values). Try assigning "staging" to it and observe the error. Explain why this is safer than using a plain string for environment names in a real framework.

const testEnv: "dev" | "qa" | "prod" = "dev"; //it's an union type variable where the value stored in it should be amongst the one mentioned while decalaration

testEnv = "staging"; //error is "Cannot assign to 'testEnv' because it is a constant." because while decalaration we made the variable as a const, so we can not reassign or mutate the variable.

let testEnv2: "dev" | "qa" | "prod" = "dev";

testEnv2 = "staging"; //error when variable is let instead of a const "Type '"staging"' is not assignable to type '"dev" | "qa" | "prod"'."

//Q7. Write a function retryTest(attempts: number): void that only accepts a number. Try calling it with undefined — what happens, and how would this have behaved differently in plain JavaScript?

function retryTest (attempts: number) : void {
    console.log(`Number of attempts: ${attempts}`);
}

retryTest(undefined); //error is "Argument of type 'undefined' is not assignable to parameter of type 'number'."
//in JS while function decalartion we don't have to explicitly mention the type of arguement (number in this case). So while calling it with undefined it would acces the function and consider attempts variable as a type "undefined". No error is expected in JS.

//Q8. Create an array const browsers: string[] = ["chromium", "firefox"];. Try pushing a number (e.g. browsers.push(123)) — note the compiler error and explain why this matters for keeping test data consistent.

const browsers: string[] = ["chromium", "firefox"];

browsers.push(123); // error is "Argument of type 'number' is not assignable to parameter of type 'string'."
// it is important for better consistency of test data as it would highlight immediately value of different type is getting pushed to the variable.

//Q9. Write a function compareStatus(expected: number, actual: number): boolean that returns expected === actual. Call it with two numbers, then try calling it with one number and one string — explain how this prevents the classic 200 === "200" (false) bug from silently passing in a real assertion.

function compareStatus (expected: number, actual: number): boolean {
    return (expected === actual);
}

console.log(compareStatus(201, 404));
console.log(compareStatus(201,"401")); //error is "Argument of type 'string' is not assignable to parameter of type 'number'."
// if we get response from the API for status specifc key as "401" string but we expected it to be number then even though it may look test is passed from a high level but in reality it is not correct and return value which should not be there.

//Q10.  Write a short function validateTestResult(result: { name: string; status: "passed" | "failed" | "skipped" }): void that only logs a message if status is valid. Try passing status: "unknown" and observe the error. Then, in a comment block, write 3-4 sentences in your own words explaining how this "restricting invalid values" behavior would have caught a real bug in one of your earlier days' exercises (Day 6, 7, 8, or 10) where status was just typed as a plain string.

function validateTestResult (result: {name: string, status: "passed" | "failed" | "skipped"}): void {
    if(result.status === "passed") {
        console.log(result.status);
    } else if (result.status === "failed") {
        console.log(result.status);
    } else {
        console.log(result.status);
    }
}

validateTestResult({
    name: "Login",
    status: "skipped"
});

validateTestResult({
    name: "Login",
    status: "unknown" //Type '"unknown"' is not assignable to type '"passed" | "failed" | "skipped"'.
});

//while we were studying in our earlier day we had a question where the object has to accept value only from a set of values (ie "passed", "skipped", "failed") but as we didn't restrict the values the function would accept any random plain string and the code logic would run without any errors which is incorrect.