//Day-7: Objects
//Object Creation and Access
console.log("Object Creation and Access");
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getTitleAndAuthor() {
    return `${this.title} by ${this.author}`;
  },
  updateYear(newYear) {
    this.year = newYear;
  },
};
// Logging the entire book object to the console
console.log("Book object:", book);

// Accessing and logging the title and author properties of the book object
console.log("Title:", book.title);
console.log("Author:", book.author);

console.log("**********************");

//Object Methods
console.log("Object Methods:");
// Logging the result of calling the method that returns the book's title and author
console.log("Title and Author:", book.getTitleAndAuthor());

// Updating the year property using the new method
book.updateYear(2024);

// Logging the updated book object to the console
console.log("Updated Book object:", book);

//Nested Objects
console.log("Nested objects:");
// Creating book objects
const book1 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

const book2 = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
};

const book3 = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813,
};

// Creating a library object
const library = {
  name: "City Library",
  books: [book1, book2, book3],
};

console.log("**********************");

// Logging the entire library object to the console
console.log("Library object:", library);

//Access and log the name of the library
console.log("Name of the library:", library.name);

//log the titles of all books
console.log("Titles of all books:");

library.books.forEach((book) => console.log(book.title));

console.log("**********************");

//The 'this' keyword
console.log("this keyword:");
const book4 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getTitleAndYear() {
    return `${this.title}, published in ${this.year}`;
  },
};

console.log(
  "Get title and year of book object using this keyword:",
  book4.getTitleAndYear()
);

console.log("**********************");

//User for-in loop
console.log("Use for-in loop to iterate over the properties of book obj:");

for (let property in book4) {
  console.log(`${property}: ${book4[property]}`);
}
console.log("**********************");

// Use Object.keys and Object.values
console.log(
  "Use Object.keys and Object.values to log all keys and values of the book object"
);

// Logging all keys of the book object
console.log("Keys of the book object:", Object.keys(book4));

// Logging all values of the book object
console.log("Values of the book object:", Object.values(book4));
