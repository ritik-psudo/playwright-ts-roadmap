//Practice Questions:

//1. Declare two number variables expectedStatus = 200 and actualStatus = 404. Compare them with === and print the result.
console.log("Problem 1")
let expectedStatus : number = 200;
let actualStatus : number = 404;

console.log(actualStatus === expectedStatus);

//2. Take a number called responseTime = 850. Increment it by 150 using +=, then print the new value.
console.log("Problem 2");
let responseTime = 850;
console.log(responseTime += 150);

//3. Use the modulus operator to check if a number called testId is even or odd, and print "even" or "odd" using a ternary.
console.log("Problem 3");
 let testID = 54;
 let mod = testID % 2;
 console.log(mod == 0 ? "even" : "odd");


 //4. Declare isElementVisible = true and isElementEnabled = false. Use && to check if both are true, print the result.
 console.log("Problem 4");
 let isElementVisible : boolean = true;
 let isElementEnabled : boolean = false;
console.log(isElementEnabled && isElementVisible);

//5. Using the same two variables from Q4, use || to check if at least one is true, print the result.
console.log("Problem 5");
console.log(isElementEnabled || isElementVisible);

//6. Use ! to flip isElementEnabled and print the flipped value.
console.log("Problem 6");
console.log(!isElementEnabled);

//7. Compare 5 == "5" and 5 === "5" — print both results and explain in a comment why they differ.
console.log("Problem 7")
// console.log(5 == "5"); //true - it compares only the value and ignores the type.
// console.log(5 === "5"); //flase - it compares both value and the type.

//8. Create a ternary that checks if retryCount (a number) is greater than 3, printing "Max retries reached" or "Retrying...".
console.log("Problem 8");
let retryCount = 1;
console.log(retryCount > 3 ? "Max Tries Reached" : "Retrying...");

//9. Calculate the average of three response times (320, 450, 290) using arithmetic operators, and print the result.
console.log("Problem 9");
console.log((320 + 450 + 290)/3);

//10. Challenge: Write a single expression using && and a ternary together — check if isTestPassed and retryCount < 3, and print "Continue" or "Stop" based on that combined condition.
console.log("Problem 10");
let isTestPassed : boolean = true;
console.log((isTestPassed && (retryCount < 3)) ? "Continue" : "Stop");