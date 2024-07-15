//Day-2: Operators

//Arithmetic operations
let a = 20;
let b = 30;
let result;

//Add
console.log(`The result of a + b is ${(result = a + b)}`);

//Subtract
console.log(`The result of a - b is ${(result = a - b)}`);

//Multiplication
console.log(`The result of a * b is ${(result = a * b)}`);

//Division
console.log(`The result of a / b is ${(result = a / b)}`);

//Remainder
console.log(`The result of a % b is ${(result = a % b)}`);

console.log("*******");
//Assignment operator
//Add using assignment operator
console.log(`The value of a after a += b is ${(a += b)}`);

//Subtract using assignment operator
console.log(`The value of a after a -= b is ${(a -= b)}`);
console.log("*******");

//Comparison operator
let maths = 90;
let science = 87;
console.log("Comparing maths and science marks using comparison operator");

console.log(
  `Check the marks of maths is greater than science : ${maths > science}`
);
console.log(
  `Check the marks of maths is less than science : ${maths < science}`
);
console.log(
  `Check th marks of maths is greater and equal than science : ${
    maths >= science
  }`
);
console.log(
  `Check th marks of maths is less and equal than science : ${maths <= science}`
);
console.log(
  `Check th marks of maths is equal to science : ${maths == science}`
);
console.log(
  `Check th marks of maths is strictly equal to science : ${maths === science}`
);
console.log(
  `Check th marks of maths is not equal to science : ${maths != science}`
);
console.log(
  `Check th marks of maths is strictly not equal to science : ${
    maths !== science
  }`
);

console.log("*******");

//Logical operator
let grade = 60;
let scholarship = 50;
let eligible = grade > 60 && scholarship > 70;
console.log(`Eligibility is ${eligible} hence student not selected`);

let marathi = 55;
let geography = 65;
let history = 45;
let eligibility = marathi > 60 || geography > 60 || history > 60;
console.log(`${eligibility}`);

let rightToVote = false;
console.log(!rightToVote);
console.log("*******");

//Ternary operator
number = 23;
let check = number > 0 ? "positive" : "negative";
console.log(check);
