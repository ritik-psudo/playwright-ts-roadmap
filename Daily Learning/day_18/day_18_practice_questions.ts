//Practice Problem:

/*Q1. Create a type TestUser = { name: string; profile?: { email?: string } }. Create one object with a profile/email and one without. Use ?. to print both safely.
*/

type TestUser = {
    name: string,
    profile?: {
        email?: string
    };
};

const user1: TestUser = {name: "Alice", profile: {email: "alice@123.com"}};
const user2: TestUser = {name: "James"};

console.log(user1.profile?.email); //"alice@123.com"
console.log(user2.profile?.email); //undefined

/*Q2. Using the objects from Q1, use ?. combined with ?? to print "No email" as a fallback when missing.
*/

console.log(user2.profile?.email ?? "No email"); //"No email"

/*Q3. Create a type Locator = { element?: { text?: string } }. Write a function getElementText(locator: Locator): string that returns the text using ?. and ?? with a default of "Not found".
*/

type Locator = {
    element?: {
        text?: string;
    };
};

function getElementText(locator:Locator): string {
    return locator.element?.text ?? "Not Found";
}

console.log(getElementText({element : {}})); //Not Found
console.log(getElementText({element: {text: "header"}})); //header

/*Q4. Create an array const users: { name: string }[] | undefined = undefined;. Use ?.[0]?.name to safely access the first user's name without crashing.
*/

const users : {name : string}[] | undefined = undefined;

// console.log(users?.[0]?.name); //gives error

/*Q5. Create a type TestConfig = { onFailure?: () => void }. Create one config with the function and one without. Call onFailure?.() on both, confirm neither crashes.
*/

type TestConfig = {
    onFailure?: ()=> void;
}

const configWithHandler: TestConfig = {
    onFailure: ()=> console.log("Handler ran: Test Failed"),
};

const configWithoutHandler: TestConfig = {};

configWithHandler.onFailure?.();
configWithoutHandler.onFailure?.();
//both ran, neither crashes

/*Q6. Create a nested object type ApiResponse = { data?: { results?: { status?: string }[] } }. Safely print the status of the first result using chained ?..
*/

type ApiResponse = {
    data?: {
        results?: {
            status?: string;
        };
    };
};

const response: ApiResponse = {data: {results: {status: "Server Error"}}};

console.log(response.data?.results?.status ?? "No Response"); //Server Error

/*Q7. Write a function getRetryCount(step: { metadata?: { retries?: number } }): number that returns the retry count or 0 if missing, using ?. and ??.
*/

function getRetryCount (step: {metadata?: {retries?: number}}): number {
    return step.metadata?.retries ?? 0;
}

console.log(getRetryCount({metadata: {retries: 4}})); //4

/*Q8. Create two objects: one where a nested boolean field is false, and check the difference between using ?? vs || as a fallback — show how || would incorrectly override a valid false value while ?? wouldn't.
*/

type Setting = {
    notification?: {
        enabled?: boolean;
    };
};

const userSetting: Setting = {
    notification : {enabled: false},
};

const defaultSetting: Setting = {
    notification : {enabled: true},
};

const resultOR = userSetting.notification?.enabled || defaultSetting.notification?.enabled;
console.log(resultOR); //true

const resultNullish = userSetting.notification?.enabled ?? defaultSetting.notification?.enabled;
console.log(resultNullish); //false

//OR operator consider userSetting 

