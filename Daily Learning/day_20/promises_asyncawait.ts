//Promises & Async/Await

//1. Promise<T> is itself a generic type built into typescript

/*function fetchStatusCode():Promise<number> {}
function fetchUser():Promise<{name: string, role: string}> {}
function fetchTags():Promise<string[]> {} */

//2. Combining generics with aync functions

async function fetchFirstItem<T>(items: T[]): Promise<T> {
    return items[0];
}

const result = await fetchFirstItem<string>(["chromium", "firefox", "webkit"]);
console.log(result);

//Just like a normal generic function, but now the return type is wrapped in Promise<T> since it's async. Any async function automatically returns a Promise, even if you write the return type as if it weren't — TypeScript wraps it for you, but it's best practice to write Promise<T> explicitly for clarity.

//3. Typing whata promise resolves with - objects and generics together

interface ApiResponse<T> {
    statusCode: number,
    data: T;
}

async function fetchUserData():Promise<ApiResponse<{name: string}>> {
    return {statusCode: 200, data: {name: "Alice"}};
}

async function run():Promise<void> {
    const response = await fetchUserData();
    console.log(response.data.name);
}

run();

//4. Typing errors properly with "unknown"

async function riskyOperations():Promise<string>{
    throw new Error ("Something failed");
}

async function run2():Promise<void> {
    try {
        await riskyOperations();
    } catch (error: unknown) {
        if(error instanceof Error) {
            console.log(`Error: ${error.message}`);
        } else {
            console.log("Unknown Error");
        }
    }
}

run2();

//TypeScript types caught errors as unknown by default (safer than any) — you must narrow the type (check instanceof Error) before safely accessing .message. This is the correct, type-safe way to handle errors, versus just assuming error.message exists.

//5. Async function returning generic array

async function fetchAllTests<T>(tests: T[]):Promise<T[]> {
    return tests;
}

//6. Real Playwright pattern preview

import {test, expect} from "@playwright/test";

test("loginTest", async ({page}):Promise<void> => {
    await page.goto("https://www.example.com");
    await page.click("#login");
})


//WarmUp Excercise

interface TestResult<T> {
    name: string,
    data: T
}

async function fetchTestResult<T>(name: string, data: T):Promise<TestResult<T>> {
    return {name, data};
}

async function runn():Promise<void> {
    const results = await fetchTestResult<number>("Duration Test", 350);
    console.log(results.name, results.data);
    try{
        throw new Error ("Simulated Error");
    } catch (error: unknown) {
        if(error instanceof Error) {
            console.log(`Caught: ${error.message}`);
        } else {
            console.log("Unknown Error");
        }
    }
}

runn();