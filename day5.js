//Day-5 : Functions

//Function declaration

//Check number is even or odd
console.log("Function Declaration");
function checkNum(num) {
  if (num % 2 == 0) {
    console.log(`${num} is a even number`);
  } else {
    console.log(`${num} is a odd number`);
  }
}
checkNum(21);

//calcualte square of a number and return

function calculateSquare(num) {
  return num * num;
}
let num = 4;
console.log(`The square of ${num} is ${calculateSquare(num)}`);

console.log("************************");
//Function Expression
console.log("Function Expression");
//find maximum of two numbers
const findMax = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
let num1 = 99;
let num2 = 58;
console.log(
  `The greater number between ${num1} and ${num2} is ${findMax(num1, num2)}`
);

//concate two strings
const concatTwo = function (string1, string2) {
  return string1.concat(" ", string2); // Added a space between the strings
};

let firstName = "Tony";
let lastName = "Stark";

console.log(
  `${firstName} and ${lastName} after concatenation: ${concatTwo(
    firstName,
    lastName
  )}`
);

console.log("************************");

//Arrow function:
console.log("Arrow Function");
//calculate sum of two numbers
const sumOfTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(`The sum of two numbers is ${sumOfTwo(23, 4)}`);

//check string contains a specific character and returns a boolean
let charContain = (str, ch) => {
  return str.includes(ch);
};
let str = "I am doing 30 days javascript challenge and this is my 5th day";
let ch = "f";
console.log(
  `Does the character '${ch}' exist in the string? ${charContain(str, ch)}`
);
console.log("************************");

//Function Parameter and Default Values
console.log("Function Parameter and Default Values");

/*calculate product of two numbers and provide default value to second 
parameter
*/
let prod = (num1, num2 = 2) => {
  return num1 * num2;
};
let a = 10;
let b = 1;
console.log(`The product of ${a} and ${b} is ${prod(b)}`);
console.log(`The product of ${b} and 2 (default) is ${prod(b)}`);

//person name and age,age as a default value
let greeting = (name, age = 21) => {
  return `Hello, ${name}, hope you are doing well!`;
};

console.log(greeting("Alice", 22));
console.log(greeting("John"));
console.log("************************");

//Higher Order Function
console.log("Higher Order Function");

function repeat(num, fn) {
  for (let i = 1; i <= num; i++) {
    fn();
  }
}
function sayHi() {
  console.log("Hello");
}
repeat(5, sayHi);

/*Takes two functions as a value applies the first function to the value
and applies the second function to the result */
function applyFunctions(fn1, fn2, value) {
  return fn2(fn1(value));
}
function addFive(x) {
  return x + 5;
}
function multiplyByTwo(x) {
  return x * 2;
}
let result = applyFunctions(addFive, multiplyByTwo, 10);
console.log(result);
