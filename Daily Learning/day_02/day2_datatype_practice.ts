//practice problems

//1. Declare a const called pageTitle of type string with any value, and print it.
const pageTitle : string = "Hello Page";
console.log(pageTitle);

//2. Declare a let called elementCount of type number, set it to 0, then reassign it to 5.
let elementCount : number = 0;
console.log(elementCount);
elementCount = 5;
console.log(elementCount);

//3. Create a boolean called isElementVisible and use it inside an if statement to print different messages.
let isElementVisible : boolean = true;

if (isElementVisible) {
    console.log("Element is Visible");
    console.log("Element Found");
    console.log("Finding Attributes");
} else {
    console.log("Element is not Visible");
}

//4. Create a string[] called testTags containing "smoke", "regression", "api". Print the second item using its index.
let testTags : string[] = ["smoke", "regression", "api"];
console.log(testTags[1]);

//5. Create a number[] called loadTimes with 4 sample response times (in ms). Print the total using .length and a loop (or reduce if you know it).
let loadTimes : number[] = [5, 9, 12, 34, 21, 89];
let sum : number = 0
for (let i : number = 0; i < loadTimes.length; i++) {
    sum = sum + loadTimes[i];
}

console.log(sum);

//6. Create an object called browserConfig with keys: name (string), version (number), headless (boolean). Print the whole object.
let browserConfig : {name : string, version : number, headless : boolean} = {
    name : "Automation 2",
    version : 25.4,
    headless : true
}

console.log(browserConfig);

//7. Try assigning a string value to a variable typed as number. What error do you get? Paste it.
//let errorNumber : number = "Hello";
//error : Type 'string' is not assignable to type 'number'.

//8. Use typeof to print the type of 3 different variables you've declared above.
console.log(typeof browserConfig);
console.log(typeof loadTimes);
console.log(typeof isElementVisible);
console.log(typeof sum);


//9. Create an array of objects called testUsers, where each object has username: string and age: number. Add at least 2 users. Print the array.

let testUsers : {username : string, age : number}[] = [
    {
        username : "Adam",
        age : 25
    },
    {
       username : "Hailey",
        age : 23 
    }
]

for (let i : number = 0; i < testUsers.length; i++) {
    console.log(testUsers[i]);
}

//10. Challenge: Create a const object called testSummary with keys passed (number), failed (number), skipped (number). Write one line of code that calculates and prints the total tests run (passed + failed + skipped).
const testSummary : {passed : number, failed : number, skipped : number} = {
    passed : 23,
    failed : 12,
    skipped : 13
}

console.log((testSummary.passed) + (testSummary.failed) + (testSummary.skipped));