//ES6+ Features
//Template Literals
console.log("Template Literals:");

let name = "Tony";
let age = 20;
console.log(`Your name is ${name} and you age is ${age}`);

// Create a multi-line string using template literals
let str = `I am doing a 30 days JavaScript challenge,
and this is my eighth day
where I am solving problems on ES6+ features.`;
console.log(str);

console.log("*******************************");

//Destructuring
console.log("Destructuring:");

//Use array destructuring to extract first and second element
const numbers = [1, 2, 3, 4, 5, 6];
const [f, s] = numbers;
console.log(`The first and second element are ${f} and ${s}`);

// Use object destructuring to extract title and author from a book object

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

const { title, author } = book;
console.log(`The title and author of the book is "${title}" by ${author}.`);

console.log("*******************************");

//Spread and Rest Opeartors
console.log("Spread and Rest Operators");

//Original array
const originalArray = [1, 2, 3, 4, 5];
console.log("Original Array:", originalArray);

/* Create a new array using the spread operator to include all elements 
of the original array plus additional elements */

const newArray = [...originalArray, 6, 7, 8];
console.log("New Array:", newArray);

//Rest Operator

// Function to sum an arbitrary number of arguments
function sumAll(...numbers) {
  return numbers.reduce((sum, current) => sum + current, 0);
}
const result = sumAll(1, 2, 3, 4, 5);
console.log(`The sum of the numbers is ${result}`);

console.log("*******************************");
//Default Parameters
console.log("Default Parameters");

function calculateProduct(num1, num2 = 1) {
  return num1 * num2;
}
let num1 = 5;
let num2 = 4;

console.log(
  `The product of ${num1} and ${num2} is: ${calculateProduct(num1, num2)}`
);
console.log(`The product of ${num1} and 1 is: ${calculateProduct(num1)} `);
console.log("*******************************");

//Enhanced Object Literals
console.log("Enhanced Object Literals");

// Define variables for properties
const firstName = "Shaziya";
const lastName = "Khanam";
const myAge = 21;
const occupation = "Java Developer";

// Create an object using enhanced object literals
const person = {
  // Property value shorthand
  firstName,
  lastName,
  myAge,
  occupation,

  //getFullName: Method definitionn shorthand
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  updateOccupation(newOccupation) {
    this.occupation = newOccupation;
  },

  getIntroduction() {
    return `Hello, my name is ${this.getFullName()} and I am a ${
      this.occupation
    }.`;
  },
};

//Log the object to the console
console.log("Person object:", person);

//Call the methods and log the results
console.log("Full name:", person.getFullName());
console.log("Introduction:", person.getIntroduction());

console.log("****************");

person.updateOccupation("Senior Java Developer");
console.log("Full name:", person.getFullName());
console.log("Introduction:", person.getIntroduction());

console.log("****************");

//Define a variables for property names
const first_Name = "firstName";
const last_Name = "lastName";
const my_Age = "age";

//create an object using computed property names
const employee = {
  [first_Name]: "John",
  [last_Name]: "Doe",
  [my_Age]: 28,
  occupation: "Software Developer",
};

console.log("Employee object with computed property names:", employee);
