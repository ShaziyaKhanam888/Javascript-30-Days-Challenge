//Day-6: Arrays

//Array Creation and Access
console.log("Array Creation and Access:");
const numbers = [1, 2, 3, 4, 5];
console.log("The numbers array is:", numbers);

//Access the first and last element of the array and log to the console
console.log("The first element of the array is:", numbers[0]);
// Access the last element using the length property
console.log("The last element of the array is:", numbers[numbers.length - 1]);
console.log("****************");

//Array Methods(Basic)
//push(): add a new number to the end of the array
console.log("Array Methods: Basic");
numbers.push(6);
console.log("After applying push method:", numbers);

//pop(): remove last element from the array
numbers.pop();
console.log("After applying pop method:", numbers);

//shift(): remove the first element from the array
numbers.shift();
console.log("After applying shift method:", numbers);

//unshift(): add a new element to the beginning of the array
numbers.unshift(1);
console.log("After applying unshift method:", numbers);
console.log("****************");

//Array Methods(Intermediate)
console.log("Array Methods: Intermediate");
console.log(numbers);

//map() method: create new array where each number is doubled
const doubled = numbers.map((num) => 2 * num);
console.log("The doubled numbers after applying map() method:", doubled);

//filter() method: log even numbers array only
const inputs = [2, 4, 6, 8, 9, 11, 12, 13, 17, 19];
console.log("The inputs is:", inputs);

const evenNumbers = inputs.filter((num) => num % 2 === 0);
console.log("Even numbers only:", evenNumbers);

//reduce() method: calculate sum of all numbers
console.log(numbers);

const calculateSum = numbers.reduce((sum, num) => (sum += num), 0);
console.log("The sum of numbers is:", calculateSum);
console.log("****************");

//Array Iteration
//for-loop
console.log("Using a for-loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(`Element at index ${i} is ${numbers[i]}`);
}

//forEach()
console.log("Using forEach():");
numbers.forEach((num, index) => {
  console.log(`Element at index ${index} is ${num}`);
});
console.log("****************");

//Multidimensional Arrays

//Creating 2-D array(matrix)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Logging the entire array to the console
console.log("The matrix is:");
console.log(matrix);

//Accessing and logging a specific element
const row = 1; //Row index(0-based)
const col = 2; //col index(0-based)
const element = matrix[row][col];

console.log(`The element at row ${row} and column ${col} is: ${element}`);
