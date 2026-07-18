//When your test clicks a button, the browser doesn't responds immediatley - there's some network delay, rendering time, Java Script execution time. Your test need to wait for that time before next action/step is done. That waiting mechanism is what "async" programming is all about.

//1. Synchromous Code: 

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
console.log("Step 4");

//Output alway in order "Step1 > Step 2 > Step 3...". Each line of code blocks the next line until it's finished. This is "synchronous".

//2. Problem that Async solves:

function fetchUserData(): string {
    //imagine this takes 2-3 seconds to fetch in real time
    return "Alice";
}

console.log("Before fetch");
console.log(fetchUserData());
console.log("After fetch");

//In real life function such as retrieving data from the server takes time (api response time, network delay). The browser has to wait entire time then after it can execute next line of code, this would freeze the entire test before this step gets executed.

//Async programming solves this by stating a slow operation and coming it back later once it's ready, without freezing any test.

//3. Promise: Represents a value that will exist for sure eventually.

function fetchData() : Promise<string> {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve("Alice"); //this is the resolution of the promise after the delay
        }, 2000); //simulates a 2 sec wait
    });
}

console.log(fetchData());

//A promise<string> means "this will eventually give you a string, but a delay is expected. Set Timeout is just to simulate delay in the fetchingof data".

//4. Async / Await : clean way to run with promises

async function runTest(): Promise<void> {
    console.log("Start Test");
    const username: string = await fetchUserData();
    console.log(`Fetched user: ${username}`);
    console.log("After Test");
}

runTest();

/*Key Points: 
    1. Any function that has await inside but also have async on the decalaration level
    2. await freezes just that function block untill it returns a value. It does'not freezes the entire code.
    3. Output order: "Start Test" > Waits for 2 sec > Fetches and prints "Fetched user: Alice" > "After Test". The order will always be the same.
*/

//5. How playwright codes looks:

// async function loginTest(): Promise<void> {
//     await page.goto("https://www.example.com/"); //wait for navigation to URL
//     await page.fill("#username","alice"); //wait for the fill action
//     await page.click("Submit"); //wait for the click
//     console.log("Login Test Passed");
// }

//Every playwright action returns a "promise" and you "await" each one. If "await" is missed, the test will be moved to next step before the earlier one is finished.

//6. If you forgot await:

async function badExample(): Promise<void> {
    const user: string = fetchUserData(); //"await" is missing
    console.log(user); //doesn't prints or returns anything
}

badExample();

//7. Handling error in asyn code - try/catch

async function riskyFetch(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject ("Network Error"); //instead of resolve, we have given reject so that catch code runs instead of try
            //resolve ("Network Error"); 
        }, 2000)
    });
}

async function runSafely(): Promise<void> {
    try{
        const result: string = await riskyFetch(); //the returned value from riskyFetch is reject so that value is then passed to error variable in catch block
        console.log(`Try passed: ${result}`);
        
    } catch(error) { //catch block has the returned value form riskyFetch function
        console.log(`Caught Error: ${error}`);
        
    }
}

runSafely();

//Quick Warmup:

function delay(ms: number) : Promise<void> {
    return new Promise((resolve)=> setTimeout(resolve, ms));
}

async function simulateTest() : Promise<void> {
    console.log("Test Starting");
    await delay(1000);
    console.log("Step 1 Complete");
    await delay (2000);
    console.log("Step 2 Complete");
    console.log("Test Finished");
}

simulateTest();