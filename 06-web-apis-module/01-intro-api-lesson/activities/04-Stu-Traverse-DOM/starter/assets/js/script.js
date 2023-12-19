// Access element using id
const articlesDiv = document.getElementById("articles");
const headerDiv = document.getElementById("header");

console.log(headerDiv.children);

// Change style by accessing style object's properties
headerDiv.children[0].style.color = "white";
articlesDiv.children[0].children[1].style.fontSize = "50px";
