//Template Literals + Default Parameters + Destructuring

//1. Template Literals - recap + new tricks

const browserName: string = "chromium";
const version: number = 120;
console.log(`Running on ${browserName} v${version}`);

// multi line strings using back tick
const report: string = `
Test Report
-----------
Browser: ${browserName}
Version: ${version}
`;

console.log(report);

// ${} can contain not only values but logic as well

const statusCodes: number = 404;
console.log(`Status: ${statusCodes >= 400 ? "Error" : "OK"}`); // `` can contain "" strings as well

//2. Default Parameters: Recap

function launchBrowser(name: string, headless: boolean = true): void  {
    console.log(`Launching: ${name}, Headless: ${headless}`);
}

launchBrowser("Chromium");
launchBrowser("Edge",false);

// defaults parameter can reference other parameters as well

function createTestName (suite: string, name: string = `${suite}_default_test`): string {
    return name;
}

console.log(createTestName("Log In"));
console.log(createTestName("Sign Up","Sign Up_Valid"));

//3. Object destructuring - pulling fields out of an object

const testConfig = {
    browser: "chromium", 
    headless: true, 
    retries: 2
};

// const {browser, headless} = testConfig;
// const {retries} = testConfig;
// console.log(browser);
// console.log(headless);
// console.log(retries);

// defining object and destructuring it in single line with type anotation

const {browser, retries}: {browser: string, retries: number} = testConfig;
console.log(browser);
console.log(retries);

//Renaming while destructuring
const {browser: browserType} = testConfig;
console.log(browserType);

//default values during destructuring (useful when a field might be missing)

const partialConfig: {webBrowser: string, attempts?:number} = {webBrowser: "firefox"};

const {webBrowser, attempts = 1} = partialConfig; // attempt has given, default value of 1 as it was not declared while declaring the object

console.log(webBrowser, attempts);

//4. Destructuring direclty in fucntion parameters:

// function logTest (test: {name: string; status: string}): void {
//     console.log(`${test.name}: ${test.status}`);
// };

// this can be destructure right in the perimeter line

function logTest2 ({name, status}: {name: string, status: string}): void {
    console.log(`${name}: ${status}`);
}

logTest2({name: "Login",status: "Skipped"});

//5. Array Deconstructing: 

const browsers: string[] = ["chrome", "firefox", "webkit", "edge"];
const [first, second] = browsers; //creating variable first and second from array browsers
console.log(first);
console.log(second);

const[,,third] = browsers; //if you want to access data from middle of the array means skipp some of the array values
console.log(third);


//WarmUp:

const testUser = {username: "alice", password: "secret123", role: "admin"};

const {username, role} = testUser;
console.log(`User ${username} logged in as ${role}`);


function greet(name: string, message: string = `Welcome ${name}`): string {
    return message;
}

console.log(greet("Bob"));

function printStatus({code, label}: {code: number, label: string}):void {
    console.log(`${code}, ${label}`);
}

printStatus({code: 200, label: "OK"});

