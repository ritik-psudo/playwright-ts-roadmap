//1. Callbacks: The original way to handle async in TS/JS

//A callback is a function passed to another function just to get called later when something finishes

function fetchUser (callback: (name: string)=> void): void {
    setTimeout(()=> {
        callback("Alice");
    },2000);
}

fetchUser((name: string)=>{
    console.log(`Fetched: ${name}`);
})

//this works fine when we have only one async step. The problem appears when we have multiple async steps that depends on each other.

//2. Callbacks Hell: Calling callback in another callbacks

function fetchedUser (callback:(name: string) => void): void {
    setTimeout(()=> callback("Alice"), 500);
}

function fetchOrders (name: string, callback: (orders: string[])=> void): void {
    setTimeout(() => callback(["Order 1", "Order 2", "Order 3"]), 500);
}

function fetchOrderDetails (order: string, callback: (details: string)=> void): void {
    setTimeout(()=> callback(`${order} details`), 500);
}

fetchedUser ((name)=> {
    fetchOrders (name, (orders)=> {
        fetchOrderDetails (orders[2], details => {
            console.log(details);
        })
    })
});

//this rightward extending code for calling callback inside callback is knowns as "Pyramid of Doom", as it makes the code harder to debug, maintain, and to handle errors

//3. Promises - resolution of pyramid

//A promise wraps the sync operation and lets you chain the stes by keyword ".then()" instead of nesting

function fetchTestUser(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Alice"), 500);
    }); 
}

function fetchUserOrders(name: string): Promise<string[]> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Order1, Order2, Order3", "Order4"]), 500);
    });
} 

fetchTestUser()
    .then((name) => fetchUserOrders(name)) //passes the "name" that fetchTestUsers return to fetchUserOders
    .then((orders) => console.log(orders)) //uses the orders array returned by fetchUserOrders to print
    .catch((error) => console.log(`Error: ${error}`)); //in case of any error this will be called and the error will be printed


//4. .then/.catch/.finally

fetchTestUser()
    .then((name) => {
        console.log(`Got User: ${name}`);
        return name;
    }).catch((error) => {
        console.log(`Something failed: ${error}`);
    }).finally(() => {
        console.log("Clean Up - runs whether it succeeds or fails"); //runs everytime whther the code is successful or not
    });

//5. async/await: same thing but with cleane syntax

async function runFlow(): Promise<void> {
    try {
        const username: string = await fetchTestUser();
        const orders: string[] = await fetchUserOrders(username);
        console.log(`The orders for ${username} are: ${orders}`);
    } catch(error) {
        console.log(`Error: ${error}`);
    }

}

runFlow();

//This is why async/await feels so much better — it takes the flat .then() chain and makes it look almost like regular synchronous code, while still being fully async underneath. This is exactly why Playwright's entire API uses async/await instead of callbacks or raw .then() chains.

//6. Promise All: running independent async promises together

//If steps don't depend on each other, you don't need to wait for one to start next one

function fetchTestUser2(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("James"), 500);
    }); 
}

async function runInParallel(): Promise<void> {
    const [user, browserList] = await Promise.all([fetchTestUser2(),Promise.resolve(["chromium", "firefox", "webkit"])]);
    console.log(user, browserList);
    
}
runInParallel();

//This runs both operations at the same time rather than one after another — useful when, say, you're fetching two unrelated pieces of test data.

//Warmup Excercise:

function delay(ms: number): Promise<void> {
    return new Promise((resolve) =>{
        setTimeout(resolve,ms);
    });
}

function fetchBrowserName():Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("chromium"), 500);
    })
}

fetchBrowserName()
    .then((name)=> {
        console.log(`Browser: ${name}`);
        return delay(300);
    })
    .then(()=>{
        console.log("Done Chaining");
    })
    .catch((error) =>{
        console.log(`Error: ${error}`);
    });
