//Types of operators

//1. Arithmetic Operators: Operators used to perform mathematical operations on variables (eg: +, -, *, %, /, **)
console.log("Arithementic Operators");
let a : number = 30;
let b : number = 3;

console.log(a + b); //addition 
console.log(a - b); //subtraction
console.log(a * b); //multiplication
console.log(a % b); //modulus (remainder)
console.log(a / b); //division 
console.log(a ** b); //exponential
console.log(a++); //post increment : the values changes after current action is done.
console.log(b--); //post decrement : the values changes after current action is done.
console.log(a, b); //a = 31, b = 2
console.log(--a); //pre increment : the values changes before current action is done.
console.log(++b); //pre decrement : the values changes before current action is done.

//2. Assignment Operator: The operators used to value to the variables.
console.log("Assignment Operators");
let timeout : number = 100;

console.log(timeout += 20); //means "timeout = timeout + 20"
console.log(timeout -= 30); //means "timeout = timeout - 30"
console.log(timeout *= 2); //means "timeout = timeout * 2"
console.log(timeout /= 5); //means "timeout = timeout / 5"

//3. Comparison Operator : The operator which establish a relation or comparison among two or more variables. Most used in assertions.
console.log("Comparison Operators");

// console.log(5 == "5"); //true - loose equality (ignores the data type)
// console.log(5 === "5"); //false - strict equality (checks data type too)
// console.log(5 !== "5"); //true - strict not-equal
console.log(10 > 5); //true - is greater than
console.log(10 <= 10); //true - is less than equal to

//4. Logical Operator : The operator used to perform logical action like AND, OR, NOR between various logics
console.log("Logical Operator");

let isVisible : boolean = true;
let isEnabled : boolean = true;;

console.log(isVisible && isEnabled); //AND operator, return true only if both the conditions are true, else return false.
console.log(isVisible || isEnabled); //OR operator, returns true when one of the conditon is true, when both are false it returns false
console.log(!isEnabled); //NOT operator, it flips the value from true to false and vice versa but doesn't manipulates the original value

let isButtonVisible : boolean = isVisible && isEnabled;
if(isButtonVisible) {
    console.log("Safe to click!");
}

//5. Ternary Operator: This used a certain task is expected when a condition is true and other when it's false
let statusMessage : string = isButtonVisible ? "Passed" : "Failed";
// if isButtonVisible is True pass string "Passed" and "Failed" if it is false.
console.log(statusMessage);


//Warmup Excercise
console.log("WarmUp Excercise")
let expected : number = 200;
let actual : number = 200;
console.log(actual === expected);
console.log(actual !== expected);

let isTestPassed : boolean = actual === expected;
let result : string = isTestPassed ? "Passed" : "Failed";

console.log(result);

