//Hands On Questions:

//1. Write a function addTestSuite(suites: string[], newSuite: string): string[] that takes an array and a new suite name, adds it using push, and returns the updated array. Call it with a sample array.

function addTestSuite (suites: string[], newSuites: string): string[] {
    suites.push(newSuites);
    return suites;
}

const suites : string[] = ["Login", "SignUp", "Checkout"];

console.log(suites);

console.log(addTestSuite(suites, "Check Password"));

//2. Write a function getFailedCodes(codes: number[]): number[] that uses filter to return only codes >= 400. Test it with a sample array.

function getFailedCodes (code: number[]): number[]  {
    const newArr: number[] = code.filter((statusCode : number): boolean => statusCode >= 400);
    return newArr;
}

const responseCodes: number[] = [200, 201, 309, 400, 402, 449, 398, 273, 302];

console.log(getFailedCodes(responseCodes));

//3. Write an arrow function formatBrowserList(browsers: string[]): string[] that uses map to convert each name into "Browser: {name}".

const formatBrowserList = (browsers: string[]): string[] => {
    const newArr: string[] = browsers.map((browser: string): string => `Browser: ${browser}`);
    return newArr;
}

const browserList: string[] = ["chrome", "webkit", "edge", "firefox"];
console.log(formatBrowserList(browserList));

//4. Write a function getSlowTests(tests: { name: string; duration: number }[], threshold: number): { name: string; duration: number }[] that returns only tests slower than the threshold, using filter.

function getSlowTests(tests: {name: string, duration: number}[], threshold: number): {name: string, duration: number}[] {
    const newArr: {name: string, duration: number}[] = tests.filter(test => (test.duration > threshold));
    return newArr;
} 

const tests : {name: string, duration: number}[] = [
    {
        name: "Login",
        duration: 302
    },
    {
        name: "SignUp",
        duration: 200
    },
    {
        name: "Checkout",
        duration: 440
    },
    {
        name: "Profile",
        duration: 180
    },
    {
        name: "Passwords",
        duration: 208
    }
]

console.log(getSlowTests(tests, 300));

//5. Write a function findFirstFailure(tests: { name: string; status: string }[]): { name: string; status: string } | undefined that uses find to return the first test with status === "failed".

function findFirstFailure(tests: {name: string, status: string}[]):{name: string, status: string}|undefined {
    const newObj: {name: string, status: string}|undefined = tests.find((test => (test.status === "Failed")));
    return newObj;
}

const testStatuses : {name: string, status: string}[] = [
     {
        name: "Login",
        status: "Failed"
    },
    {
        name: "SignUp",
        status: "Passed"
    },
    {
        name: "Checkout",
        status: "Passed"
    },
    {
        name: "Profile",
        status: "Failed"
    },
    {
        name: "Passwords",
        status: "Failed"
    }
]

console.log(findFirstFailure(testStatuses));

//6.  Write a function calculateAverageDuration(tests: { name: string; duration: number }[]): number that uses reduce to sum durations, then divides by the array length. Round to 2 decimal places.

function calculateAverageDuration(tests: {name: string, duration: number}[]): number {
    const total: number = tests.reduce((sum: number, test) => sum += test.duration, 0);
    return Number((total/tests.length).toFixed(2));
}

const testsNew : {name: string, duration: number}[] = [
    {
        name: "Login",
        duration: 302
    },
    {
        name: "SignUp",
        duration: 200
    },
    {
        name: "Checkout",
        duration: 440
    },
    {
        name: "Profile",
        duration: 180
    },
    {
        name: "Passwords",
        duration: 208
    }
]

console.log(calculateAverageDuration(testsNew));

//7. Write a function mergeConfigs(base: { retries: number; headless: boolean }, override: Partial<{ retries: number; headless: boolean }>): object that uses the spread operator to merge override into base and returns the result. (Note: Partial<> makes all properties in the type optional — useful when you only want to override some fields. Look it up if it's new to you.)

function mergeConfigs(base: {retries: number, headless: boolean}, override: Partial<{retries: number, headless: boolean}>): {retries: number, headless: boolean} {
    return {...base,...override};
}

const base : {retries: number, headless: boolean}[] = [
    {
        retries: 7,
        headless: true
    }, 
    {
        retries: 4,
        headless: false
    },
    {
        retries: 6,
        headless: true
    },
    {
        retries: 3,
        headless: false
    },
    {
        retries: 9,
        headless: true
    }
]

const override : Partial<{retries: number, headless: boolean}>[] = [
    {
        retries: 7,
        headless: false
    }
]

base.forEach((b, i) => {
    console.log(mergeConfigs(b, override[i]));
    
});

//8.  Write a function getTestSummary(tests: { name: string; status: string }[]): { total: number; passed: number; failed: number; skipped: number } that returns an object (not a string, unlike Day 7) with counts for each status, calculated using a loop or filter().length for each status.

function getTestSummary (tests: {name: string, status: string}[]):{total: number, passed: number, failed: number, skipped: number} {
    
    const summary: {total: number, passed: number, failed: number, skipped: number} = {
        total: 0,
        passed: 0,
        failed: 0,
        skipped: 0
    };
    summary.passed = tests.filter((test => (test.status === "Passed"))).length;
    summary.failed = tests.filter((test => (test.status === "Failed"))).length;
    summary.skipped = tests.filter((test => (test.status === "Skipped"))).length;
    summary.total = (summary.passed)+(summary.failed)+(summary.skipped);
    return summary;
}

const testReport : {name: string, status: string}[] = [
     {
        name: "Login",
        status: "Failed"
    },
    {
        name: "SignUp",
        status: "Passed"
    },
    {
        name: "Checkout",
        status: "Skipped"
    },
    {
        name: "Profile",
        status: "Failed"
    },
    {
        name: "Passwords",
        status: "Failed"
    },
    {
        name: "Hero",
        status: "Skipped"
    }
]

console.log(getTestSummary(testReport));

//9. Write a function getFailedTestNames(tests: { name: string; status: string }[]): string[] that chains filter + map to return just the names of failed tests. Then write a second function printFailureReport(tests: { name: string; status: string }[]): void that calls getFailedTestNames internally and prints "Failed tests: {names joined by comma}" (hint: use .join(", ") on the array).

function getFailedTestNames (tests: {name: string, status: string}[]):string[] {
    const failedTest: string[] = tests.filter((test) => test.status === "Failed").map((test)=> test.name);
    return failedTest;
}

function printFailureReport(tests: {name: string, status: string}[]): void {
    const failedName: string[] = getFailedTestNames(tests);
    console.log(`Failed tests: ${failedName.join(", ")}`);
    
}

const testSuiteReport : {name: string, status: string}[] = [
     {
        name: "Login",
        status: "Failed"
    },
    {
        name: "SignUp",
        status: "Passed"
    },
    {
        name: "Checkout",
        status: "Passed"
    },
    {
        name: "Profile",
        status: "Failed"
    },
    {
        name: "Passwords",
        status: "Failed"
    }
]

console.log(getFailedTestNames(testSuiteReport));
printFailureReport(testSuiteReport);
