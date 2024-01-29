let x = 5;
let y = 2;

// addition
let sum = x + y;
console.log("Sum: ", sum);

// Difference
let difference  = x - y;
console.log("Difference: ", difference);

// Multiply
let multiply  = x * y;
console.log("Multiply: ", multiply);

// Divide
let divide  = x / y;
console.log("Divide: ", divide);

// Remainder - modulus
let remainder = x%y;
console.log("Remainder", remainder);

// String Concatenation
console.log("Hello" + " " + "World");

// Logical Expressions:
// && - AND
// || - OR
// ! - NOT

let sunny = true;
let cloudy = false;

console.log("sunny and cloudy", sunny && cloudy);
console.log("sunny or cloudy", sunny || cloudy);
console.log("not sunny", !sunny );

// Assignment Expressions
let a = 10
let b = 5

// Addition Compound
a+= b;
console.log("sum", a);

// Subtract Compound
a-= b;
console.log("difference", a);

// Multiply Compound
a*= b;
console.log("Multiply", a);

// Division Compound
a/= b;
console.log("Division", a);

// Function Call Expressions:
const mySum = (num1, num2) => {
    console.log(num1 + num2);
}

mySum(30, 10);

const myDifference = (num1, num2) => {
    console.log(num1 - num2);
}

myDifference(30, 10);


const myMultiply = (num1, num2) =>{
    console.log(num1 *num2);
}

myMultiply(30, 10);


const myDivide = (num1, num2) => {
    console.log(num1 /num2);
}

myDivide(30, 10)

// Arrow Function
const mySumArrow = (num1, num2) =>{
    console.log("Arrow function sum: ", num1 + num2);
}
mySumArrow(20,1)