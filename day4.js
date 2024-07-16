//Day-4: Loops

//for loop
//Print numbers from 1 to 10
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(`${i}`);
}
console.log("****************");

//multiplication table of 5
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num}x${i} = ${num * i}`);
}
console.log("****************");

//While loop
//Calculate sum of numbers from 1 to 10
let sum = 0;
let i = 1;
while (i <= 10) {
  //   sum = sum + i;
  sum += i;
  i++;
}
console.log(`The sum of numbers from 1 to 10 is ${sum}`);

//Print numbers from 10 to 1
let j = 10;
while (j >= 1) {
  console.log(`Numbers: ${i}`);
  j--;
}
console.log("****************");

//Do-While loop
//Print numbers from 1 to 5
let number = 1;
console.log("Numbers from 1 to 5:");
do {
  console.log(`${number}`);
  number++;
} while (number <= 5);

//Calcualte factorial of a number
let factorial = 1;
let factNum = 5;
let originalNum = factNum;
do {
  factorial = factorial * factNum;
  factNum--;
} while (factNum >= 1);

console.log(`The factorial of ${originalNum} is ${factorial}`);

//Nested loops
console.log("Nested loops");
/* print pattern using for loop:->
 *
 **
 ***
 ****
 *****
 */
for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

//Loop control statement
console.log("Loop control statement");

//Print numbers from 1 to 10 but skip 5 using continue

console.log("Print numbers from 1 to 10 except 5");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
console.log("****************");

//Print numbers from 1 to 10 but stop the loop when number is 7

console.log("Stop the loop when number is 7");
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  } else {
    console.log(i);
  }
}
