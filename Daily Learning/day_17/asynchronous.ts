//Understanding Asynchronous Code

/*1. Javascript is only single threaded: it only runs single process at a time.
    There's no background thread, everything works one line at a time.
*/

/*2. Working of Async: the Event Loop
When you call something async like(setTimeout, network request or page.click), JS hands it over to the browser or the Node JS to compile in the background, and it immediately moves on to the next line od code. When the async call is finished it get place in a queue. The event loop consistently check "if the call stack is empty, if it is then pick next thing finished form the queue
*/

console.log(1);
setTimeout(()=>(console.log(2)),0); // 0 ms delay
console.log(3);

//prints (1, 3, 2) because by default setTimeout is async function so even with a 0ms dealy it gets placed in the queue and is accessed till the synchronous calls are made (i.e. console.log(3)).

//3. Microtasks or Macrotasks (why Promises jumps the queue)
/*  There are two types of queue: Microtasks (Promises, Async/Await) and Macrotasks (setTimeout)
    In queue microstasks always runs first even if the macrotasks were scheduled first
*/

console.log(1);
setTimeout(()=>console.log("2 (Macrotask"), 0);
Promise.resolve().then(()=> console.log("3 (Microtask"));
console.log(4);

//prints (1, 4, 3, 2), as first all the synchronous code (printing 1, 4) is done and both asynchronous codes (setTimeout (2), Promise (4)) are placed in the queue. Out of these two setTimeout was compiled first and scheduled first in the queue and Promise was placed in the queue afterwards. But Promise being a microtask runs first in the que and setTimeout being a Macrotask runs at last even with 0ms delay.

//4. It's importance in Playwight.
/*
    a. "await page.click(...);" pauses only the async function, rest all synchronous functions like parallel tests keeps running.
    b. Forgetting "await" doesn't crashes anything, it's just that the test function moves on to the next step immediately, even before the browser has completed the previous task in background.
    c. Not using await, increases flakiness, random test failures and the assertion even before the action is completed.
*/

//Warmup Excercise:

console.log("Start"); //runs first

setTimeout(()=> console.log("Timeout"),0); //runs sixth

Promise.resolve().then(()=> console.log("Promise")); //runs fourth

async function test(): Promise<void> { 
    console.log("Async fn starts"); //runs second
    await null; //pauses the async function, resumes as a microtask
    console.log("Async fn ends"); //runs fifth
}
test();

console.log("End"); //runs third

//Prediction: Start, End, Promise, Async fn starts, Async fn ends, Timeout
//Result: Start, Async fn starts, End, Promise, Async fn ends, Timeout