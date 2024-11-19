/*var newElement = document.createElement("li");
var newText = document.createTextNode("I Love Fruits");

newElement.appendChild(newText);

var target = document.getElementById("list");
var oldElement = target.children[2];
console.log(oldElement);

target.replaceChild(newElement,oldElement);*/


var target = document.getElementById("list");
var oldElement = target.children[1];
target.removeChild(oldElement);
