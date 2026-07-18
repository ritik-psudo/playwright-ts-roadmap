//Practice Questions:

//Q1. Write a function delay(ms: number): Promise<void> that resolves after ms milliseconds using setTimeout. Call it inside an async function with await and log a message before and after.

function delay (ms: number): Promise<void> {
    return new Promise ((resolve)=> setTimeout(resolve,ms));
}

async function waitTime():Promise<void> {
    console.log("Before Test"); //Before Test
    await delay(2000); //Waits for 2sec
    console.log("Step 1"); //After Test
    await delay(4000); //Waits for 4sec
    console.log("After Test"); //After Test
}

waitTime();

//Q2. Write an async function getBrowserName(): Promise<string> that returns "chromium" wrapped in a Promise (use Promise.resolve("chromium") as a shortcut). Await it and print the result.

function getBrowserName() : Promise<string> {
    return Promise.resolve("chromium"); //shortcut to mention return condition
}

async function main(): Promise<void> {
    const browser: string = await getBrowserName();
    console.log(browser);
}

main();

//Q3. Write an async function runSteps(): Promise<void> that logs "Step 1", waits 500ms (using your delay function from Q1), then logs "Step 2", waits 500ms again, then logs "Step 3".

async function runSteps(): Promise<void> {
    console.log("Step 1"); //Step 1
    await delay(500); //Waits for 500ms
    console.log("Step 2"); //Step 2
    await delay(500); //Waits for 500ms
    console.log("Step 3"); //Step 3
}

runSteps();

//Q4. Write a function fetchStatusCode(): Promise<number> that resolves with 200 after a 1-second delay. Await it in an async function and check isStatusSuccessful (reuse from Day 10/12) on the result.

function fetchStatusCode(): Promise<number> {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(400);
        },5000);
    });
}

function isStatusSuccessful(status: number): boolean {
    return (status>= 200) && (status < 300);
}

async function handleStatusCheck(): Promise<void> {
    const statusCode = await fetchStatusCode();
    console.log(`Received Code: ${statusCode}`);
    if(isStatusSuccessful(statusCode)) {
        console.log("Status is successful");
    } else {
        console.log("Status is not successful");
    }
}

handleStatusCheck();

//Q5. Write an async function simulateFailure(): Promise<string> that rejects with the string "Element not found" after a delay. Call it using try/catch and print the caught error.

async function simulateFailure(): Promise<string> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            reject("Element not found");
        },3000);
    })
}

async function failure(): Promise<void> {
    try{
        const message: string = await simulateFailure();
        console.log("Element is visible");
    } catch(error) {
        console.log(`${error}`);
    }
}

failure();

//Q6. Create an array of 3 "test names" (string[]). Write an async function runAllTests(names: string[]): Promise<void> that loops through the array with a for...of loop, and for each name, awaits a delay(300) then prints "Running: {name}". (This mirrors running multiple tests sequentially.)

const testNames: string[] = ["Login", "LogOut", "SignUp", "Search", "Checkout"];

function delayTest(ms: number): Promise<void> {
    return new Promise ((resolve) => setTimeout(resolve, ms));
}

async function runAllTests(names: string[]): Promise<void> {
    for (let name of names) {
        await delayTest(2000);
        console.log(`Running: ${name}`);
    };
}

runAllTests(testNames);

//Q7. Write an async function getTestResult(name: string): Promise<{ name: string; status: string }> that resolves with an object after a short delay. Await it and destructure the result to print name and status separately.

function delayTest2(ms: number): Promise<void> {
    return new Promise ((resolve) => setTimeout(resolve, ms));
}

async function getTestResult(name: string): Promise<{name: string, status: string}> {
    await delayTest2(3000);
    return{name, status: "Passed"};
}

async function main1() {
    const {name, status} = await getTestResult("Login");
    console.log(`Name: ${name}, Status: ${status}`);
}

main1();
