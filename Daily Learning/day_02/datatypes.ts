//types of datatypes

//1. number: Covers integers and decimals.
let retryCount : number = 57;
let timeout : number = 9.5;

//2. string: Text wrapped in " " or '' . Used for lietrals.
let browserName : string = "chromium";
let greetings : string = `Hello, ${browserName}`; //using another string variable in another string variable, called as "embeded variables"

//3. boolean: This datatype expectes only two values i.e. True or False.
let isHeadless : boolean = true;
let isTestPassed : boolean = false;

//4. array: A list of values of same type is an array
let browsers : string[] = ["chrome", "firefox", "safari"]; //specifying what type of values are expected in the array.
let retryDelays : number[] = [4, 5, 9, 10]; //array named retryDelyas expecting number as values

//5. objects: A collection of key-value pairs. It groups related datas together.
let testConfig: {name : string, retries : number, headless : boolean} = { //specifying what are the keys in the objects and type of values for each one.
    name : "Ritik",
    retries : 10,
    headless : false
}

//6. any: This datatype accepts any value without specifying
let value : any = "could be anything";
let errorCount : any = 57;

//excercise:

const testName : string = "Login Test";
const maxTries : number = 3;
const isSmokeTest : boolean = true;
const supportedBrowsers : string[] = ["chromium", "firefox", "safari", "edge"];
const testMata : {author : string, priority : number} = {
    author : "Ritikk",
    priority : 5
}

console.log (testName, maxTries, isSmokeTest);
console.log(supportedBrowsers);
console.log(testMata);
