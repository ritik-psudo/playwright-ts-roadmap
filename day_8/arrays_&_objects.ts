//Arrays and Objects (push, pop, map, filter, etc.)

// Array Method:
//1. Push & Pop Methods: add or remove from the end of the array

const browser : string[] = ["chromium", "firefox"];

browser.push("webkit");

console.log(browser);

const removed : string = browser.pop()!; //"!" is a not null assetion which tells the compiler that beleive me that this won't be undefined. Pop can return empty or undefined so typescript flags it by default.

console.log(removed);
console.log(browser);


//2. Shift & Unshift Method: add or remove from the start of the array

browser.unshift("edge"); //adds at the start of the array
console.log(browser);

browser.shift(); //removes from the start
console.log(browser);

//3. Map method: transform every item into a new one (returns a new array)

const testName: string[] = ["login, signup, checkout"];
const testTitles: string[] = testName.map((name: string): string => `Test: ${name}`); //replaces running loop and pushing each element at a time into a new array

console.log(testTitles);

//4. filter method: keeps only the items matchning the condition (returns a new array)

const statusCodes: number[] = [200, 404, 500, 201, 403];

const errorCodes: number[] = statusCodes.filter((code: number): boolean => code >= 400 ); //replaces the loop and if else code for filtering the array content based on a condition
console.log(errorCodes);

//5. find method: get the first matching item in the array

const users: {name: string, role: string}[] = [
    {
        name: "Alice",
        role: "admin"
    },
    {
        name: "Bob",
        role: "user"
    }
]

const admin = users.find((user):boolean => user.role === "admin"); //scans users object array and stores all value in a new array user which then finds if user.role is admin

console.log(admin);

//6. includes method: check if an array contains a value

const supportedBrowsers: string[] = ["chromium", "webkit", "firefox"];

console.log(supportedBrowsers.includes("edge")); //returns true or false based on if the content is present in the array or not

// 7. reduce method: combine all values into one value

const loadTimes: number[] = [200, 340, 150];

const total : number = loadTimes.reduce((time: number, sum: number)=> sum + time);

console.log(total);

// 8. map & filter combined: mostly used

const results: number[] = [200, 404, 500, 200, 403];
const errorMessage: string[] = results.filter((code : number): boolean => code >= 400).map((code: number): string => `Error: ${code}`);

console.log(errorMessage);

//Object methods:

// 9. Object,keys, Object.values, Object.entries

const testConfig: {retries: number, headless: boolean, browser: string} =
{
        retries: 2,
        headless: true,
        browser: "chromium"
};

console.log(Object.keys(testConfig)); //[ 'retries', 'headless', 'browser' ]
console.log(Object.values(testConfig)); //[ 2, true, 'chromium' ]
console.log(Object.entries(testConfig)); //[ [ 'retries', 2 ], [ 'headless', true ], [ 'browser', 'chromium' ] ]

// 10. spread operator("..."): copy/merge objects and arrays

const baseConfig = {retries: 2, headless: true};
const updatedConfig = {...baseConfig, retries: 3};
console.log(updatedConfig);

const arr1: number[] = [1, 2];
const arr2: number[] = [3, 4];

const combined: number[] = [...arr1, ...arr2];
console.log(combined);



