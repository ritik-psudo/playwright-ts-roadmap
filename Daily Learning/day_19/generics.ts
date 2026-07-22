//Generics

/*Generics provide us the functionality to write on logic for a function and that can be used with many other types.*/

//1. Problem that it solves

function getFirstItem(items: string[]): string{
    return items[0];
}

function getFirstNumberItem(items: string[]): string {
    return items[0];
}
//same logic but duplicated for every type.

//2. Generic - a placeholder type
//here T is a "type variable" for the type of array expected and the return type of the function
function getFirstElement<T>(items: T[]):T {
    return items[0];
}

console.log(getFirstElement<string>(["Alice","James","Ken"]));
console.log(getFirstElement<number>([2,5,3,8,5,1]));
console.log(getFirstElement(["Matt","Bruce","Tony"])); //JS automatically inherits the type of arguement passed to the function in place of type variable. So no need to mention it explicitly

//3. Generic Function with Test Data:

function getFirstValue<T>(tests:T[]): T {
    return tests[0];
}

function getNthValue<T>(tests:T[], i: number): T {
    return tests[i];
}

type TestCase = {
    name: string,
    status: string
};

const myTest: TestCase[] = [
    {name: "Login", status: "passed"},
    {name: "SignUp", status: "failed"}
];

const firstItem = getFirstValue(myTest);
const nthItem = getNthValue(myTest, 1);
console.log(firstItem.name);
console.log((nthItem.status));

//4. Generic function with two type parameter

function pairValue<A, B>(first: A, second: B): {first: A; second: B}{
    return {first, second};
}

const result = pairValue<string, number>("chromium", 3);
console.log(result);

//5. Generic interfaces/type:

interface APIresponse<T> {
    statusCode: number,
    data: T
};

const userResponse: APIresponse<string[]> = {
    statusCode: 404,
    data: ["Login", "Sign Up"]
}

console.log(userResponse);

//This is hugely common in real frameworks — one ApiResponse<T> type reused for every different kind of API call, instead of writing a new interface per endpoint.

//6. Generic constraints — limiting what T can be

function getDuration<T extends {duration: number}>(item:T): number {
    return item.duration;
}

getDuration({name: "Login", duration: 5002}); //works as it has both a type variable ("name") and a extended variable ("duration")
//getDuration({name: "SignUp"}); //fails as it doesn't have the extended variable

//WarmUp Excercise:

function warpInArray<T>(value: T): T[] {
    return [value];
}

console.log(warpInArray("chromium")); //chromium
console.log(warpInArray(56)); //56

interface TestResult<T> {
    name: string;
    data: T;
}

const result1: TestResult<number> = {name: "Duration Test", data: 350};
const result2: TestResult<string[]> = {name: "Tags Test", data: ["smoke", "regression"]};

console.log(result1, result2);





