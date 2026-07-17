//Q1. Create a type Environment = "dev" | "qa" | "prod". Create a const currentEnv: Environment = "qa", print it.

type Environment =  "dev"|"qa"|"prod";

const currentEnv:Environment = "qa";

console.log(currentEnv);// output: qa

//Q2. Create an interface TestUser with username: string, password: string, role: string. Create a valid object and print it.

interface TestUser1 {
    username: string,
    password: string,
    role: string
}

const user1:TestUser1 = {
    username: "Alice",
    password: "pass123",
    role: "admin"
}

console.log(user1); //output: { username: 'Alice', password: 'pass123', role: 'admin' }

//Q3. Try writing the same TestUser shape as a type instead of interface. Create an object using it. (Just to feel the syntax difference — both should work identically here.)

type TestUser2 = {
    username: string,
    password: string,
    role: string
}

const user2:TestUser2 = {
    username: "Pete",
    password: "pass456",
    role: "support"
}

console.log(user2); //output: { username: 'Pete', password: 'pass456', role: 'support' } syntax is almost same

//Q4. Create an interface BaseTest { name: string; duration: number }. Create a second interface DetailedTest extends BaseTest { status: "passed" | "failed" | "skipped" }. Create an object satisfying DetailedTest (it needs all 3 fields).

interface BaseTest {
    name: string,
    duration: number
}

interface DetailedTest extends BaseTest {
    status: "passed" | "failed" | "skipped";
}

const test1:DetailedTest = {
    name: "SignUp",
    duration: 429,
    status: "skipped"
}

console.log(test1);//output: { name: 'SignUp', duration: 429, status: 'skipped' }

//Q5. Recreate Q4 using type and intersection (&) instead of interface extends.

type BaseTest2 = {
    name: string,
    duration: number
}

type DetailedTest2 = BaseTest2 & {
    status: "passed" | "failed" | "skipped";
}

const test2:DetailedTest2 = {
    name: "SignUp",
    duration: 429,
    status: "skipped"
}

console.log(test2); //output: { name: 'SignUp', duration: 429, status: 'skipped' } identical output

//Q6. Create a type CompareFn = (a: number, b: number) => boolean. Write a function compareStatus matching this type signature (reuse logic from Day 12), and a variable typed as CompareFn pointing to it.

type CompareFn1 = (a: number, b: number) => boolean; //defining a function using type keyword

const compare:CompareFn1 = (a, b) => { //defining the logic of the function for another variable
    return (a > b);
}

function CompareFn2 (a: number, b: number): boolean { //conventional way of defining a function
    return (a > b);
}

//question: why to use type for defining a function instead of conventional method as it takes two block to define using type but only one for conventional?
console.log(compare(7,8)); //false
console.log(CompareFn2(7,8)); //false

//Q7. Create an interface TestConfig { browser: string } — then declare interface TestConfig again separately, adding retries: number. Create an object using the merged interface with both fields.

interface TestConfig {
    browser: string
}

interface TestConfig {
    retries: number
}

const test3:TestConfig = {
    browser: "firefox",
    retries: 9
}

console.log(test3); //output: { browser: 'firefox', retries: 9 }

//Q8. Create a type TestResult = { name: string; status: "passed" | "failed" | "skipped" }. Write a function filterByStatus(tests: TestResult[], status: "passed" | "failed" | "skipped"): TestResult[] that uses filter to return matching tests. Test it with a sample array.

type TestStatus = "passed"|"failed"|"skipped";
type TestResult = {
    name: string,
    status: TestStatus
}

function filterByStatus(tests: TestResult[],status: TestStatus): TestResult[] {
    return tests.filter((tests):boolean => tests.status === status);
}

const myTest2:TestResult[] = [
    {name: "Login", status: "passed" },
    {name: "Signup", status: "failed" },   
    {name: "Checkout", status: "passed" },
    {name: "Search", status: "skipped" },
]

console.log(filterByStatus(myTest2,"skipped"));

//Q9. Create an interface ApiResponse { statusCode: number; body: string }. Write a function isSuccessResponse(response: ApiResponse): boolean that checks if statusCode is in the 200s. Test with 2 sample responses.

interface ApiResponse {
    statusCode: number,
    body: string
}

function isSuccessResponse(response: ApiResponse[]) : ApiResponse[] {
    return response.filter((response):boolean => (response.statusCode >= 200 && response.statusCode < 300));
}   

const apiTests:ApiResponse[] = [
    {statusCode: 201,body: "OK"},
    {statusCode: 404,body: "Not Found"},
    {statusCode: 500,body: "Server Error"},
    {statusCode: 209,body: "Client Error"},
]

console.log(isSuccessResponse(apiTests));
