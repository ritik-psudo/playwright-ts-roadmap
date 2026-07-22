//Practice Questions

/*Q1. Write a generic function getLastItem<T>(items: T[]): T that returns the last element of any array. Test it with a string[] and a number[].
*/

function getLastItem<T>(items:T[]): T {
    return items[(items.length)-1];
}

console.log(getLastItem<string>(["Alice", "James", "Matt", "Bruce"])); // Bruce
console.log(getLastItem<number>([45,22,94,881])); // 881

/*Q2. Write a generic function wrapInObject<T>(value: T): { value: T } that wraps any value in an object with a value key. Test with a string and an object.
*/

function wrapInObject<T>(value: T): {value: T} {
    return {value};
}

console.log(wrapInObject<string>("Alice")); // { value: 'Alice' }
console.log(wrapInObject<object>({name: "Testing"})); // { value: { name: 'Testing' } }

/*Q3. Create a generic interface interface ApiResponse<T> { statusCode: number; data: T }. Create one instance with data as a string, and another with data as an array of { name: string } objects.
*/

interface ApiResponse<T> {
    statusCode: number,
    data: T
}

const userResponse1: ApiResponse<string> = {
    statusCode: 404,
    data: "Services"
}

const userResponse2: ApiResponse<{name: string}[]> = {
    statusCode: 404,
    data: [
        {name: "Login"},
        {name: "SignUp"},
        {name: "Checkout"}
    ]
}

console.log(userResponse1);
console.log(userResponse2);

//Q4. Write a generic function getRandomItem<T>(items: T[]): T that returns the item at a fixed index (e.g., index 0, no need for actual randomness) — test with an array of TestCase objects ({ name: string; status: string }).

function getRandomItem<T>(items: T[]): T {
    return items[4];
}

const item = getRandomItem<{name: string; status: string}>([
    {name: "Login", status: "failed"},
    {name: "SignUp", status: "passed"},
    {name: "Checkout", status: "passed"},
    {name: "Search", status: "failed"},
    {name: "SignUp", status: "failed"},
    {name: "Booking", status: "passed"},
]);

console.log(item.status); // failed

/*Q5. Write a generic function logAndReturn<T>(value: T): T that logs the value and returns it unchanged. Test with a number, a string, and a custom object.
*/

function logAndReturn<T>(value:T): T {
    return value;
}

console.log(logAndReturn<number>(45)); // 45
console.log(logAndReturn<string>("Hello World!")); // Hello World!
console.log(logAndReturn<object>({
    name: "Alice",
    status: "Logged In"
})); //{ name: 'Alice', status: 'Logged In' }

/*Q6. Write a generic function filterArray<T>(items: T[], predicate: (item: T) => boolean): T[] that behaves like a manual version of .filter(). Test it filtering a number[] for values greater than 10.
*/

function filterArray<T>(items:T[], predicate: (item: T) => boolean): T[] {
    let result: T[] = [];
    items.forEach((value: T) => {
        if(predicate(value)) {
            return result.push(value);
        }
    })
    return result;
} 

console.log(filterArray<number>([34, 23, 1, 4,9, 11, 13], (item)=> item > 10));

/*Q7. Create a generic function getDuration<T extends { duration: number }>(item: T): number (from today's lesson) — test it with a TestCase object that has duration, and comment on what error you'd get if you passed an object missing that field.
*/

function getDuration<T extends {duration: number}>(item:T): number {
        return item.duration;
}

console.log(getDuration({name: "Login", duration: 200}));
// console.log(getDuration({name: "SignUp" })); // error is : "and 'name' does not exist in type '{ duration: number; }'"

/*Q8. Write a generic function pairValues<A, B>(first: A, second: B): { first: A; second: B }. Use it to pair a browser: string with a retries: number.
*/

function pairValues<A, B>(browser: A, retries: B): {browser: A, retries: B} {
    return {browser, retries};
}

console.log(pairValues<string, number>("firefox", 5)); //{ browser: 'firefox', retries: 5 }

/*Q9. Create a generic interface interface TestOutcome<T> { testName: string; result: T }. Create an array of TestOutcome<boolean> (pass/fail as booleans) with at least 4 entries, then use .filter() to get only the ones where result is true.
*/

interface TestOutcome<T> {
    testName: string; result: T
}

const results: TestOutcome<boolean>[] = [
    {testName: "Login",result: true},
    {testName: "SignIn",result: false},
    {testName: "SignUp",result: false},
    {testName: "CheckOut",result: true}
];

const passTest: TestOutcome<boolean>[] = results.filter(
    (outcome) => outcome.result === true
);

console.log(passTest);
