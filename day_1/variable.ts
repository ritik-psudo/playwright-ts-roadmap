//1. "var" variables: these are old declaration of variables which are not used today, because "var" is a function scoped variable means if we decalre a variable inside an if, for loop and call it outside of its block, the variable will accessible. This brings bugs.

if (true) {
    var testResult = "Passed";
}

console.log (testResult); // works — "passed" — even though it was declared INSIDE the if block!

//2. "let" variables: these are the most used method to decalre variables as these are block {...} scoped, means they can be declared, reassigned and accessed within same block which removes the chances of varaible leaking.

if (true) {
    let subjects = "10";
    console.log (subjects); // works here

    subjects = "20";
    console.log (subjects); // works here
}

//console.log (subjects);  ❌ Error: testResult is not defined outside the block "Cannot find name 'subjects'"

//3. "const" variables: These variables are also block scoped just like "let". These are used when the values stored in the variables has to be kept as constant (no requirement of changing anywhere) means "Cannot be reassigned after declaration".

const pi = 3.14;
console.log (pi);

//pi = 9;  ❌ Error: Cannot assign to 'pi' because it is a constant "Cannot assign to 'pi' because it is a constant".

//const doesn't mean the value is 100% frozen, if variable contains array or objects then their contents can be altered but the main const variable cannot be re-assigned. 

const data = { name: "Ritik"}; //object named data
data.name = "NewRitik";
console.log(data.name); //will return "NewRitik" even though main "data" variable is a const.