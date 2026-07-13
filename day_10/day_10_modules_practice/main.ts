//Q5. Import all three named exports from Q1 (adjusting for whichever one is now default) plus the TestCase type and DEFAULT_TIMEOUT constant.

import { isStatusSuccessful } from "./testUtils";
import getPassPercentage from "./testUtils";
import {calculateAverage} from "./testUtils";
import {TestCase} from "./testUtils";
import { generateReport } from "./reportGenerator";
//Q10.  Import your default-exported function with a different local name using the default import syntax, and call it to prove it still works.
import per from "./testUtils";

import { DEFAULT_TIMEOUT } from "./testUtils";

//Q6. Create an array of TestCase objects (at least 5 entries) using the imported type.

const myTest: TestCase[] = [
    {
        name: "Login",
        status: "Failed",
        duration: 4500
    },
    {
        name: "CreateAccount",
        status: "Passed",
        duration: 3100
    },
    {
        name: "SignUp",
        status: "Passed",
        duration: 3912
    },
    {
        name: "Profile",
        status: "Skipped",
        duration: 2130
    },
    {
        name: "Checkout",
        status: "Passed",
        duration: 4521
    },
    {
        name: "Products",
        status: "Skipped",
        duration: 4521
    },
    {
        name: "Deactivate",
        status: "Passed",
        duration: 4521
    }
]

console.log(myTest);

//Q7. Use calculateAverage on the durations from your test array, print the result.

const time: number[] = myTest.map(entry => entry.duration); //mapping is done to fetch duration from myTest each entries and assign it to a new array
const average: number = calculateAverage(time);
console.log(average);

//Q8.  Use isStatusSuccessful to check 3 different sample status codes, print each result.

console.log(isStatusSuccessful(299)); //true
console.log(isStatusSuccessful(301)); //false
console.log(isStatusSuccessful(499)); //false

//Q9.  Print DEFAULT_TIMEOUT and use it in a sentence, e.g. "Default timeout is {value}ms".

console.log(`Default timeout is ${DEFAULT_TIMEOUT}ms`);
//Default timeout is 5000ms

//Q10.  Import your default-exported function with a different local name using the default import syntax, and call it to prove it still works.

console.log(getPassPercentage(7,20));

console.log(per(13,20));

console.log(generateReport(myTest));