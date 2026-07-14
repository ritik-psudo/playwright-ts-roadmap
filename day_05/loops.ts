//Loops in TypeScript (For, While, ForEach)

// 1. For Loop : When you know how many times the loop has to be executed.
for(let i = 1; i <= 6; i++) { 
    console.log(`Attempt Number: ${i}`);
}

let maxRetries: number = 3;
for (let attempt : number = 1; attempt <= maxRetries; attempt++) {
    console.log(`Retry attempt ${attempt} of ${maxRetries}`);
}

//2. While Loop : When you don't know how many times the loop will run, but only the condition is known.
let attempts: number = 2;
let isElementFound: boolean = false;

while (!isElementFound && attempts < 5) {
    console.log(`Checking of element for the ${attempts} attempt.`);
    attempts++;
}

// 3. Do-While Loop : When you want the loop to run atleast once and later check the condition if it has to be run again.

let count : number = 3;
do {
    console.log(`Count is ${count}`);
    count++;
} while (count <= 4);

// 4. For-Of Loop : When loop has to iterate over a fixed array then for each loop is used.

const browserNames : string [] = ["chromium", "webkit", "firefox"];

for (const browser of browserNames) {
    console.log(`Running tests on: ${browser}`);
} //cleanest way to loop through the array when values are required not the indexes

// 5. For-Each Method : It's a method used to iterate array based on their indexes, it doesn't support break so to use break kindly use "For-Of" or "For".

const testUsers : string[] = ["alice", "carlos", "peter"];

testUsers.forEach((user : string, index : number)=>{
    console.log(`User ${index + 1}: ${user}`);
})

//Quick comparison — which to use when
//Situation                                                   Best choice
//Know exact repeat count                                     for
//Repeat until a condition changes(unknown count)             while
//Need it to run at least once                                do...while
//Loop through array values simply                            for...of
//Loop through array with built-in index, functional style    forEach


//Excercise

const responseCode : number[] = [200, 404, 401, 505, 500]

for (let codes of responseCode) {
    if(codes == 200) {
        console.log(`${codes} : Success`);
    } else {
        console.log(`${codes} : Failure`);
    }
}