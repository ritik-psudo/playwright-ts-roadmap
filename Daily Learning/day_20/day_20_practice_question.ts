//Practice Question

/*Q1. Write an async function fetchBrowserName(): Promise<string> and call it with await inside another async function, printing the result.
*/

async function fetchBrowserName(): Promise<string> {
    return ("chromium");
}

async function browserRunner():Promise<void> {
    const browser = await fetchBrowserName();
    console.log(browser);
}

browserRunner(); //chromium

/*Q2. Write a generic async function fetchFirstItem<T>(items: T[]): Promise<T> that returns the first element. Test with a string[] and a number[].
*/

async function fetchFirstItem<T>(items: T[]):Promise<T> {
    return items[0];
}
const firstString = await fetchFirstItem<string>(["first", "second", "third", "fourth"]);
const firstNumber = await fetchFirstItem<number>([9,4,1,6,3,9]);

console.log(firstString, firstNumber); //"first", 9

/*Q3. Create an interface ApiResponse<T> { statusCode: number; data: T }. Write an async function fetchApiResponse<T>(data: T): Promise<ApiResponse<T>> that returns { statusCode: 200, data }. Test with a string and an object.
*/

interface ApiResponse<T> {
    statusCode: number,
    data: T
}

async function fetchApiResponse<T>(data: T):Promise<ApiResponse<T>> {
    return ({statusCode: 200, data});
}

async function runApi():Promise<void> {
    const apiString = await fetchApiResponse<string>("Passed");
    const apiObject = await fetchApiResponse<{name: string; status: string }>({name: "Login", status: "failed"});

    console.log(apiString, apiObject); //{ statusCode: 200, data: 'Passed' } { statusCode: 200, data: { name: 'Login', status: 'failed' } }

    
}
runApi();

/*Q4. Write an async function that throws an Error. Catch it using catch (error: unknown), narrow with instanceof Error, and print error.message.
*/

async function failedOperation():Promise<string> {
    throw new Error ("Known Error");
}

async function runError():Promise<void> {
    try {
        await failedOperation();
    } catch (error: unknown) {
        if(error instanceof Error) {
            console.log(`Error: ${error.message}`);
        } else {
            console.log("Unknown Error");
        }
    }
}

runError();

/*Q5. Write an async function fetchTestList<T>(tests: T[]): Promise<T[]> that just returns the array back (simulating an async fetch). Test it with an array of TestCase objects ({ name: string; status: string }).
*/

async function fetchTestList<T>(tests: T[]):Promise<T[]> {
    return tests;
}

async function runArray():Promise<void> {
    const arrayResult = await fetchTestList<string>(["New", "Old", "Fast", "Slow"]);
    console.log(arrayResult);
}

runArray();

/*Q6. Write an async function getDurations(tests: { name: string; duration: number }[]): Promise<number[]> that returns just the durations using .map().
*/

async function getDurations(tests: {name: string, duration: number}[]):Promise<number[]> {
    return tests.map(test => test.duration);
}

async function runTime():Promise<void> {
    const allDuration: number[] = await getDurations([
        { 
            name: "Login",
            duration: 4501
        },
        { 
            name: "SignUp",
            duration: 2991
        },
        { 
            name: "SignIn",
            duration: 3229
        },
        { 
            name: "Checkout",
            duration: 1217
        },
    ]);

    console.log(allDuration);
    
}

runTime(); //[ 4501, 2991, 3229, 1217 ]

/*Q7. Write an async function getPassCount(tests: { status: string }[]): Promise<number> that returns a count of "passed" tests using .filter().length.
*/

async function getPassCount(tests: {status: string}[]):Promise<number> {
    return tests.filter((test)=> test.status==="Passed").length;
}

async function runPass():Promise<void> {
    const allPass: number = await getPassCount([
        { 
            status: "Passed"
        },
        { 
            status: "Skipped"
        },
        { 
            status: "Failed"
        },
        { 
            status: "Passed"
        },
    ]);
    console.log(allPass);
}

runPass();

/*Q8. Combine generics + async + error handling: write async function fetchOrThrow<T>(value: T, shouldFail: boolean): Promise<T> that returns value normally, but throws an Error if shouldFail is true. Call it twice — once succeeding, once failing — handling both with try/catch and proper unknown/instanceof Error narrowing.
*/

async function fetchOrThrow<T>(value: T,shouldFail: boolean): Promise<T> {
    if(shouldFail === false) {
        return value;
    } else {
        throw new Error ("Failed");
    }
}

async function runAll():Promise<void> {
    try{
        console.log(await fetchOrThrow<string>("Passed", false)); //Passed
    } catch (error) {
        if(error instanceof Error) {
            console.log(`Error: ${error.message}`);
        }
    }
    try{
        console.log(await fetchOrThrow<string>("Failed", true));
    } catch (error) {
        if(error instanceof Error) {
            console.log(`Error: ${error.message}`); //Error: Failed
        }
    }
}

runAll();

/*Q9. Write an async function fetchSummary<T extends { status: string }>(tests: T[]): Promise<{ total: number; passed: number }> (combining today + generic constraints) that returns counts. Test with two different object shapes.
*/

async function fetchSummary<T extends {status: string}>(tests:T[]):Promise<{total: number, passed: number}> {
    const total = tests.length;
    const passed = tests.filter((test)=> test.status==="Passed").length;
    return {total, passed};
}

async function runSummary():Promise<void> {
    const testSummary1 = await fetchSummary([
        { 
            status: "Passed"
        },
        { 
            status: "Skipped"
        },
        { 
            status: "Failed"
        },
        { 
            status: "Passed"
        },
    ]);
    const testSummary2 = await fetchSummary([
        { 
            status: "Failed"
        },
        { 
            status: "Skipped"
        },
        { 
            status: "Failed"
        },
        { 
            status: "Skipped"
        },
    ]);
    console.log(testSummary1); //{ total: 4, passed: 2 }
    console.log(testSummary2); //{ total: 4, passed: 0 }
}

runSummary();