// Day-9: DOM Manipulation

// Selecting and Manipulating Elements:

// Select an HTML element by its id
const para1 = document.getElementById("para1");
para1.textContent = "Learning DOM";

// Select an HTML element by its class
const para2 = document.getElementsByClassName("para2")[0];
para2.style.backgroundColor = "pink";

// Creating and Appending Elements:

// Create a new div element
const newDiv = document.createElement("div");
newDiv.textContent = "Creating new div element and appending it to body!!";
document.body.append(newDiv);

// Create new li element
const newLi = document.createElement("li");
const exUl = document.querySelector("ul");
newLi.textContent = "third";
exUl.appendChild(newLi);

// Removing Elements

// Remove from the DOM
document.getElementById("remove").remove();

// Remove last child of the body element
const body = document.body;
if (body.lastElementChild) {
  body.removeChild(body.lastElementChild);
}

//Modifying Attributes and Classes

//select html element change src of an img tag
const img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45OzuIgpQpEwP8kDqErAVg4lJHR5QOFi2JA&s"
);

// Adding a CSS class
const paragraph = document.getElementById("para1");
paragraph.className += " highlight";

// Removing a CSS class
const paragraph2 = document.getElementById("para1");
paragraph2.className = paragraph2.className.replace("highlight", "").trim();

//Event Handling:

//btn click
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  para1.textContent = "Changing text while clicking on button";
});

//mouseover
para2.addEventListener("mouseover", () => {
  para2.style.border = "2px solid blue";
});
