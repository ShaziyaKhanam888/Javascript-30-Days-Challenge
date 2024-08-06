// Add a click event listener to a button that changes the text of the paragraph
const btn = document.querySelector("button");
const para = document.querySelector("p");
btn.addEventListener("click", () => {
  para.textContent = "Changed text after clicking on button";
});

// Add a double click event listener to an image that toggles its visibility
const image = document.querySelector("img");
image.addEventListener("dblclick", () => {
  if (image.style.visibility === "hidden") {
    image.style.visibility = "visible";
  } else {
    image.style.visibility = "hidden";
  }
});

// On mouse over changes background color
const para2 = document.getElementById("changeBack");
para2.addEventListener("mouseover", () => {
  para2.style.backgroundColor = "purple";
});

// Mouse out Event Listener resets back color
para2.addEventListener("mouseout", () => {
  para2.style.backgroundColor = "";
});

// Key down event listener for input field
const inputField = document.getElementById("keyInput");
inputField.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Key up event listener to display current value in a paragraph
const displayPara = document.getElementById("displayValue");
inputField.addEventListener("keyup", () => {
  displayPara.textContent = `Current value: ${inputField.value}`;
});

// Submit event listener for the form
const form = document.getElementById("exampleForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log("Form Data:", data);
});

// Change event listener for the select dropdown
const selectElement = document.getElementById("select");
const selectDisplayPara = document.getElementById("selectValue");

selectElement.addEventListener("change", () => {
  selectDisplayPara.textContent = `Selected Value: ${selectElement.value}`;
});

// Add a click event listener to the parent element (ul)
const itemList = document.getElementById("itemList");

itemList.addEventListener("click", (event) => {
  // Check if the clicked element is an li
  if (event.target && event.target.nodeName === "LI") {
    console.log(`Clicked item text: ${event.target.textContent}`);
  }
});

// Add a click event listener to the button to dynamically add new items
const addItemButton = document.getElementById("addItemButton");
addItemButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
});
