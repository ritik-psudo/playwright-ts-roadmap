//Practice Questions:

//Q1. Predict, then run: log "A", then a setTimeout(() => log "B", 0), then log "C". Confirm the output order and explain why in a comment.

console.log("A");

setTimeout(()=> console.log("B"),0);

console.log("C");

//Prediction: A, C, B ; Output: A, C, B
//Explanation: console.log being synchronous gets finished first in queue and set timeout being a async macrotask get finshed at last even without a 0ms delay and getting scheduled first.

//Q2. Predict, then run: log "A", Promise.resolve().then(() => log "B"), log "C". Explain why "B" prints after "C" even with no delay.

console.log("A");

Promise.resolve().then(()=> console.log("B"));

console.log("C");

//Prediction: A, C, B ; Output: A, C, B
//Explanation: console.log being synchronous gets finished first in queue and Promise being a async microtask get finshed at last even after getting scheduled first.

//Q3. Write two setTimeout calls with delays 1000 and 500. Predict and confirm which logs first, and explain that the event loop always respects delay order among macrotasks.

setTimeout(()=> console.log("A"),1000);

setTimeout(()=> console.log("B"),500);

//Prediction: B, A ; Output: B, A
//Explanation: Both setTimeout are async macrotask so in queue they are placed at last but as there are no microtasks or any synchronous code. Based of time delay provided the one less time, finishes first and "B" is displayed and "A" is displayed after that.

//Q4. Combine one setTimeout(0) and one Promise.resolve().then() together (in that order). Predict and confirm the microtask always wins.

setTimeout(()=> console.log(1), 0);

Promise.resolve().then(()=>console.log(2));

//Prediction: 2, 1 ; Output: 2, 1
//Hence confirmed that microtask (Promise) always runs first from the queue and later the macrotask (setTimeout)

//Q5. Write an async function with two console.logs separated by await delay(500) (reuse from Day 15). Add a plain console.log after calling this function (not awaited). Predict and confirm which line prints first — the one after the function call, or the one after await inside it.

function delay(ms: number): Promise<void> {
    return new Promise((resolve)=>{
        setTimeout((resolve),ms);
    });
}

async function printTwice(): Promise<void> {
    console.log("First Print");
    await delay(500);
    console.log("Second Print");
}
printTwice();

console.log("Third Print");

//Prediction: Third Print, First Print, (After 500ms) Second Print ;
//Output: First print, Third Print, Second Print
//Explaintion: Firstly the code inside async function is executed as there's not synchronous before it, hence we get "First Print". Then "await delay(500)" runs, which pasues the async function and in that time whatever next synchronous code was there "Third Print" is executed and then "Second Print" from the async function.

//Q6. Write a function that returns a rejected Promise. Call it without await or .catch() — observe what happens in the console (an "unhandled promise rejection" warning). Then fix it properly with .catch().

function failedTest(): Promise<void> {
    return new Promise((resolve, reject)=> {
        console.log("Rejected Promise");
        reject(new Error("Something went wrong")); //syntax to mention error message
    });
}

async function testFn(): Promise<void> {
    failedTest(); //Output: Rejected Promise
    await failedTest().catch((error)=>{
        console.log(`Error: ${error.message}`); //doesn't returns or print anything as output
    });
}

testFn();

//Q7. Simulate a Playwright bug: write an async function clickButton(): Promise<void> with a 500ms delay, and a function checkResult(): void that logs "Button state checked" immediately (synchronously). Call clickButton() without await, followed immediately by checkResult(). Observe that "Button state checked" prints before the click actually "finishes" — this demonstrates the classic forgot-await bug.

async function clickButton(): Promise<void> {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            console.log("Button Clicked");
            resolve();
        }, 500);
    })
}

function checkResult(): void {
    console.log("Button State Checked");
}

async function runner1(): Promise<void> {
    clickButton();
    checkResult();
}

runner1(); //output without await: Button State Checked, Button Clicked

//Q8. Fix Q7 by properly await-ing clickButton() before calling checkResult() inside an async wrapper function. Confirm the order is now correct.

async function runner2(): Promise<void> {
    await clickButton();
    checkResult();
}

runner2();
//output with await: Button Clicked, Button State Checked   

//Q9. Write 3 Promise.resolve().then() calls chained/logged in sequence, interleaved with a setTimeout(0) in between two of them. Predict the full output order before running, then verify.

console.log("Start");

Promise.resolve().then(() => console.log("Promise 1"));

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise 2"));

Promise.resolve().then(() => console.log("Promise 3"));

console.log("End");

//Prediction: Start, End, Promise 1, Promise 2, Promise 3, Timeout
//Output: Start, End, Promise 1, Promise 2, Promise 3, Timeout