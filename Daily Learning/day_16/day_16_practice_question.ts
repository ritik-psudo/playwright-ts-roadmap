//Practice Question:

//Q1. Write a callback-style function fetchTestName(callback: (name: string) => void): void that calls back with "Login Test" after a delay. Call it and print the result inside the callback.

function fetchTestName_callback (callback: (name:string)=> void): void {
    setTimeout(()=>{
        callback("Login Test")
    }, 1000);
}

fetchTestName_callback((name: string)=> {
    console.log(`Test Name: ${name}`); 
});

//Q2. Recreate Q1 as a Promise-based function fetchTestNamePromise(): Promise<string> instead. Use .then() to print the result.

function fetchTestName_promise():Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Login Test"), 2000);
    });
}

fetchTestName_promise()
    .then((name) => console.log(`Test Name: ${name}`));


//Q3. Write 3 nested callback functions simulating: fetch test case name → fetch test status → fetch test duration (each depending on the previous). Nest them to intentionally create a "pyramid" — observe how deep the indentation gets.

function fetchTestCaseName_callback(callback:(name:string)=> void): void {
    setTimeout(()=> callback("Login"), 500);
}

function testStatus_callback(callback: (status: string)=> void): void {
    setTimeout(()=> callback("passed"), 500);
}

function testDuration_callback(callback:(duration: number)=>void): void {
    setTimeout(()=> callback(3000), 500);
}

fetchTestCaseName_callback((name)=> {
    testStatus_callback((status)=>{
        testDuration_callback((duration)=>{
            console.log(`${name} has status: ${status} with duration of ${duration}ms.`);
        })
    })
})

//Q4. Rewrite Q3 using Promises with .then() chaining instead of nested callbacks — flatten the pyramid.

function fetchTestCaseName_promise(): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Sign Up"), 500);
    });
}

function fetchTestCaseStatus_promise(): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("failed"), 500);
    });
}

function fetchTestDuration_promise(): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(2198), 500);
    });
}

fetchTestCaseName_promise()
    .then((name)=> {
        return fetchTestCaseStatus_promise().then((status)=> ({name, status}));  
    })
    .then(({name, status})=> {
        return fetchTestDuration_promise().then((duration)=> ({name, status, duration}))
    })
    .then(({name, status, duration})=> {
        console.log(`${name} has status: ${status} with duration of ${duration}ms.`);
    });

//Q5. Rewrite Q4 again using async/await with try/catch — compare all three versions (callback, .then(), async/await) and in a comment, note which felt easiest to read.

async function runFlow(): Promise<void> {
    try{
        const name = await fetchTestCaseName_promise();
        const status = await fetchTestCaseStatus_promise();
        const duration = await fetchTestDuration_promise();
        console.log(`${name} has status: ${status} with duration of ${duration}ms.`);
    }catch(error) {
        console.log(`Error: ${error}`);
    }
}

runFlow();
// asyn/await method appears to be readable and maintainable as compared to other 2 methods.

//Q6. Write a function fetchStatusCode(): Promise<number> that rejects with "Timeout error" after a delay. Handle it using .catch(), then separately handle the same rejection using try/catch with async/await.

function fetchStatusCode(): Promise<number> {
    return new Promise((resolve,reject)=> {
        // setTimeout(()=> resolve(204), 2000);
        setTimeout(()=>reject("Timeout Error"), 2000);
    })
}

fetchStatusCode().catch((error)=> console.log(`Error: ${error}`));

async function runTestCode(): Promise<void> {
    try{
        console.log(await fetchStatusCode());
    } catch(error) {
        console.log(`Error: ${error}`);
    }
}

runTestCode();

//Q7. Write two independent Promise-returning functions: fetchBrowserName(): Promise<string> and fetchRetryCount(): Promise<number>. Use Promise.all to run them together and print both results once resolved.

function fetchBrowserName(): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=> resolve("firefox"), 1000);
    });
}

function fetchRetryCount(): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(7), 1000);
    });
}

async function testDetails(): Promise<void> {
    const[browserName, retryCount] = await Promise.all([fetchBrowserName(),fetchRetryCount()]);
    console.log(`Browser: ${browserName}, Retries: ${retryCount}`);
}

testDetails();

//Q8. Write an async function runTestWithCleanup(): Promise<void> that awaits a Promise which might fail, uses try/catch/finally, and always logs "Cleanup complete" in the finally block regardless of pass/fail.

async function runTestWithCleanup():Promise<void> {
    try{
        await fetchRetryCount();
    } catch(error) {
        console.log(`Error: ${error}`);
    } finally {
        console.log("Clean Up Complete");
    }
}

runTestWithCleanup(); //gives "Clean Up Complete" always whether fucntion runs successfully or not

//Q9. Write a .then() chain of at least 3 steps, where each step transforms the previous result (e.g., step 1 resolves a number, step 2 doubles it, step 3 converts it to a string with a label). Print the final result.

function new_number(): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(5), 500);
    });
}

function double_number(num: number): Promise<number> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(num * 2), 500);
    });
}

function num_to_string(num: number): Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(`Doubled Number: ${num}`), 500);
    });
}

new_number()
    .then((num)=> double_number(num))
    .then((num)=> num_to_string(num))
    .then((text)=> console.log(text));

//Q10. Simulate a real login flow using 3 chained async steps: loginUser() → fetchDashboardData() → validateDashboard(), where each function returns a Promise and depends on the previous step's result. Implement it twice — once with .then() chaining, once with async/await — and add proper error handling (.catch() for one, try/catch for the other) so that if any step "fails" (simulate by rejecting in one of the functions), the whole flow reports a clear failure message instead of crashing.

function loginUser(username: string):Promise<string> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> resolve(`Login for ${username} successful`), 1000);
    })
}

function fetchDashboardData():Promise<string> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> resolve(`Role: Admin`), 1000);
    })
}

function validateDashboard():Promise<string> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> resolve(`Dashboard Validated`), 1000);
    })
}

//using .then method

loginUser("Alice")
    .then((loginText)=> {
        return fetchDashboardData().then((dashText)=> ({loginText, dashText}));
    })
    .then(({loginText, dashText})=>{
        return validateDashboard().then((dashValText)=> ({loginText, dashText, dashValText}));
    })
    .then(({loginText, dashText, dashValText})=> {
        console.log(loginText);
        console.log(dashText);
        console.log(dashValText);
    }).catch((error)=>{
        console.log(`Error: ${error}`);
    });

//using async/await method

async function runSimText(username: string): Promise<void> {
    const loginTest: string = await loginUser(username);
    const dashText: string = await fetchDashboardData();
    const dashValText: string = await validateDashboard();
    console.log(loginTest + "\n" + dashText + "\n" + dashValText);
}

runSimText("James");