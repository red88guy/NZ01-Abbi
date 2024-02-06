// Accessing Elements

// by ID
// const heading = document.getElementById('heading')
// console.log(heading);

// by className
// const heading = document.getElementsByClassName('heading1');
// console.log(heading);

// by tagName
const heading = document.getElementsByTagName("h1");
console.log(heading);

// by querySelector (access the child)
const listItems = document.querySelectorAll("#list li");
console.log(listItems);

console.log(heading[1]);
console.log(listItems[1]);

// Modifying Elements
// modifying contents using innerHTML
heading[0].innerHTML = "Learning DOM Manipulation";

// using TextContent (strictly for text)
heading[1].textContent = "Element Manipulation"

// settings attributes
heading[1].setAttribute('class', 'highlight');
// heading[1].setAttribute('height', '200px')

// using style property
const button = document.getElementById("btn");
button.style.backgroundColor = "skyblue"

// Creating elements
const container = document.getElementsByClassName("container");
const newParagraph = document.createElement('p');
newParagraph.textContent = "This is a new paragraph"
container[0].appendChild(newParagraph);

// Handling Events
// const button = document.getElementById("btn");
button.addEventListener("click", addListItem);

function addListItem() {
    const newListItem = document.createElement("li");
    newListItem.textContent = "Wash Dishes"
    document.getElementById("list").appendChild(newListItem);
}