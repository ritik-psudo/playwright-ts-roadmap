//Practice Problem

// 1. Write a for loop that prints numbers from 1 to 5.
console.log("Problem 1");

for (let i : number = 1; i <= 5; i++) {
    console.log(`${i}`);
}

// 2. Write a for loop that prints only even numbers between 1 and 10 (hint: use modulus % from Day 3).
console.log("Problem 2");

for (let num : number = 1; num <= 10; num++) {
    if(num % 2 === 0) {
        console.log(num);
    }
}

// 3. Create a number[] called responseTimes with 5 values. Use a for loop to print each value along with its index.
console.log("Problem 3");

const responseTimes : number[] = [2, 4, 4.2, 4.6, 5];
for (let i = 0; i < responseTimes.length; i++) {
    console.log(`${responseTimes[i]} at index ${i}`);
}

// 4. Write a while loop that starts a retryCount at 0 and keeps printing "Retrying..." until retryCount reaches 3, incrementing each time.
console.log("Problem 4");

let retryCount : number = 1;

while (retryCount <= 3) {
    console.log(`Retrying ${retryCount}th time`);
    retryCount++;
}

// 5. Write a do...while loop that prints "Checking element..." at least once, even if the starting condition would normally be false (e.g., start with attempts = 5 and condition attempts < 3).
console.log("Problem 5");

let attempts : number = 5;

do {
    console.log("Checking element...");
    attempts--;
} while (attempts < 3);

// 6. Create a string[] called browserList with "chromium", "firefox", "webkit". Use for...of to print "Launching {browser}" for each.
console.log(" Probelm 6");

const browserList : string[] = ["chromium", "firefox", "webkit"];
for(let browser of browserList) {
    console.log(`Launching ${browser}`);    
}

// 7. Create a string[] called testSuites with at least 4 names. Use forEach to print each suite name with its index (e.g., "Suite 1: Login Tests").
console.log("Problem 7");

let testSuites : string[] = ["Login Tests", "Sign Up Tests", "Deactivate Tests", "Referal Tests"];

testSuites.forEach((tests : string, index : number)=>{
    console.log(`Suite ${index + 1}: ${tests}`);
});

// 8. Combine a loop with a conditional: create a number[] called httpStatusCodes with mixed values (200, 404, 500, 200, 301). Loop through and print "Success" for 200, otherwise print "Failure: {code}".

console.log("Problem 8");

const httpStatusCodes : number[] = [200, 404, 500, 200, 301];

for(const codes of httpStatusCodes) {
    if(codes === 200) {
        console.log("Success");
    } else {
        console.log(`Failure: ${codes}`);
    }
}

// 9. Use a for loop to calculate and print the sum of all numbers in a number[] called loadTimes (e.g., [120, 340, 250, 400]).
console.log("Problem 9");

let loadTimes : number[] = [120, 340, 250, 400, 325];
let sumOfLoadTimes : number = 0;

for(let time of loadTimes) {
    sumOfLoadTimes += time;
}

console.log(sumOfLoadTimes);

// 10. Create a boolean called isTestPassed = false and a number called maxAttempts = 4. Use a while loop that keeps "attempting" (just print "Attempt X") until either isTestPassed becomes true or maxAttempts is reached. Inside the loop, set isTestPassed = true when attempt === 3 to simulate a test passing on the 3rd try, and make sure the loop stops immediately after.
console.log("Problem 10");

let isTestPassed : boolean = false;
let attempt : number = 1;
let maxAttempts : number = 4;

while(!isTestPassed && attempt <= maxAttempts) { //check isTestPassed is true and attempt is less than max attempt.
    console.log(`Attempt ${attempt}`);
    if(attempt === 3) {
        isTestPassed = true; //changes value to true
        console.log(`Test passed on attempt ${attempt}`);
    }
    attempt++;
}