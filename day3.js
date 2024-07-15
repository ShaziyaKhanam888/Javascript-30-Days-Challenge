//Day-3: Control Structures

//If-else statements

//check if a person is eligible to vote
let age = 18;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can not vote");
}

//check if a number is +ve,-ve or zero
let number = 21;
if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

//Nested If-else statement
let num1 = 124;
let num2 = 94;
let num3 = 62;

//find largest among three numbers
if (num1 > num2 && num1 > num3) {
  console.log(`The largest number is ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`The largest number is ${num2}`);
} else {
  console.log(`The largest number is ${num3}`);
}
console.log("*********");

//Switch Case
//Determine the day of the week based on the number(1-7)
let day_num = 6;
switch (day_num) {
  case 1:
    console.log(`The day is sunday`);
    break;
  case 2:
    console.log("The day is monday");
    break;
  case 3:
    console.log("The day is tuesday");
    break;
  case 4:
    console.log("The day is wednesday");
    break;
  case 5:
    console.log("The day is thursday");
    break;
  case 6:
    console.log("The day is friday");
    break;
  case 7:
    console.log("The day is saturday");
    break;

  default:
    console.log("Invalid number");
}

//Assign grade based on score
let marks = 89;
let grade;

switch (true) {
  case marks >= 90 && marks <= 100:
    grade = "A";
    break;
  case marks >= 80 && marks < 90:
    grade = "B";
    break;
  case marks >= 70 && marks < 80:
    grade = "C";
    break;
  case marks >= 60 && marks < 70:
    grade = "D";
    break;
  case marks >= 50 && marks < 60:
    grade = "E";
    break;
  default:
    grade = "Failed!";
    break;
}
console.log(`Your grade is ${grade}`);

//Conditional (Ternary) operator
let num = 24;
let check = num % 2 === 0 ? "Even number" : "Odd number";
console.log(check);

//Combining condition

//Check a year is a leap year or not
let year = 1900;
let isLeapYear;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    } else {
      isLeapYear = false;
    }
  } else {
    isLeapYear = true;
  }
} else {
  isLeapYear = false;
}

if (isLeapYear) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
