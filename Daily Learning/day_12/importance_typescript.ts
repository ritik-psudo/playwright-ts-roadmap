//Q1. What is Typescript?

//Typescript is a superset of Javascript.Typescript contains a type layer on top of it which Javascript doesn't. Every .ts file that is executed eventually gets compiled as a .js file. Node.js only the runs the javascript that typescript produces.

//this is typescript
function addNumber(a: number, b: number): number {
    return(a + b);
}
console.log(addNumber(3,9));

//this is javascript
/*function multiplyNumber(a, b) {
    return(a*b);
}
console.log(multiplyNumber(3,9));*/

//the type annotation " : number" exists purely to catch mistakes before running the code

//Q2. Why Typescript for Automation Testing?

//a. Catches bugs even before the code is executed:

function loginUser(username: string, password: string): string {
    return(`Username: ${username}, Password: ${password}`);
}

console.log(loginUser("alice","pass123")); //console.log(loginUser("alice")); In TS we got error, "Expected 2 arguments, but got 1"
//in JS it could have run without any error and for passwordt the value return would be "undefined".

//b. VS Code integration:

//Playwright libraries are itself written in typescript, so it provides better feature like auto complete in VS Code.

//c. Safer Refactoring across large test suites:

//One rename of a variable highlights the presence of that variable in all the file it used with an error, which makes it easier to find and rename at all the places.

//d. Self documenting code:

function runTest(testName: string, retries: number, headless: boolean): void {

}; // this explain what are the arguements getting passed in the function and what type of value does it expects. this increases the readability of the code. No need to add any comment.

//e. Catches "type confusion" bugs 

let expectedStatus: number = 200;
let actualStatus: string = "200"; //

// console.log(expectedStatus === actualStatus); // false, even though the value "looks" the same the types are different

/*
                            JavaScript                              Typescript
        Type checking       None — errors show up at runtime        runtimeCompile-time — errors caught 
                                                                    before running
    
        Setup               Simpler, no compile step                Needs tsc / ts-node to compile/run

        Refactoring         Manual, risky in large codebases        Safer — the compiler flags broken usages
        safety        
        
        Learning curve      Lower initially                         Slightly higher, pays off at scale

        Industry usage in   Still common, especially older          Now the standard for new Playwright projects          
        automation          projects
*/

//tsconfog.json contains a key "strict" which is set to a value of "true" which keeps the type of variables mandatory to mention
