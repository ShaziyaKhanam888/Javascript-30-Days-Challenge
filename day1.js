//Declare a variable using var
var age = 12;
console.log(age);

//Declare a variable using let
let name = "Shaziya";
console.log(name);

//Declare a variable using const
const bool = "true";
console.log(bool);

//Data types
let number = 23;
let userName = "Khanam";
let boolean = true;
let user = {
  user_id: 12,
};
const marks = [75, 67, 89, 90];

//console typeOf
console.log(`The data type of ${number} is ${typeof number}`);
console.log(`The data type of ${userName} is ${typeof userName}`);
console.log(`The data type of ${boolean} is ${typeof boolean}`);
console.log(`The data type of ${user} is ${typeof user}`);
console.log(`The data type of ${marks} is ${typeof marks}`);

//reassigning variables
let studentName = "Tony";
console.log(`The student name is ${studentName}`);

studentName = "Tom";
console.log(`The student name is ${studentName}`);

const studentId = 101;
console.log(`student id is ${studentId}`);

// studentId = 102;
console.log(`student id remains same which is ${studentId}`);

//TypeError: Assignment to constant variable.
