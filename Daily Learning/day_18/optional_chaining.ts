//Optional Chaining

/*When we are scrapping through the API responses we might get some field as "undefined" and "null", like we expect API response for "user.address" but user hasn't set one or parent to element we're looking for might not exist yet. To solve this issue without "Optional Chaining" we have use multiple nested if statement that has it's own limitation (reduces readability and maintainability). Optional chaining collapses them into on clean line of code.*/

//1. Problem

type ApiResponse = {
    user?: {
        profile?:{
            email?: string;
        };
    };
};

//const response: ApiResponse = {user: {profile: {email :"alice@123.com"}}}; //output = alice@123.com
const response: ApiResponse = {user: {profile: {}}}; //output is nothing as the final condition of if is not true (response.user.profile.email doesn't have any value)
if (response.user && response.user.profile && response.user.profile.email) {
    console.log(response.user.profile.email);
}

//2. With Optional Chaining
console.log(response?.user?.profile?.email); //for undefined: doesn't crash

//3. Works on function calls too

type TestConfig = {
    logResult?: ()=> void;
};

const config: TestConfig = {};
config.logResult?.(); //does nothing, no crash - since logResult doesn't exist

//4. Works on Array/Bracket access

const testResults: {name: string}[] | undefined = undefined;

// console.log(testResults?.[0]?.name); //gives error as name is undefined

//5. Combining with mullish coalescing operator (??) far a fallback value

const email: string = response?.user?.profile?.email ?? "No email provided";

console.log(email);


//Playwright Example:

type TestStep = {
    name: string,
    metadata?: {
        retries?: number;
    }
}

function getRetries(step: TestStep): number {
    return step.metadata?.retries ??0;
}

//Warmup Excercise:

type User = {
    name: string,
    address?: {
        city?: string
    };
};

const user1: User = {name: "Alice", address: {city: "Delhi"}};
const user2: User = {name: "James"};

console.log(user1.address?.city); //Delhi
console.log(user2.address?.city); //undefined
console.log(user2.address?.city ?? "unknown city"); //unknown city




