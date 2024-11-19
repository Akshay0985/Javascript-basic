// var newElement = document.createElement("h2");
// var newText = document.createTextNode("This is just Text");
// newElement.appendChild(newText);
// var target = document.getElementById("test");
// target.insertAdjacentElement("afterend",newElement);

// var target = document.getElementById("test");
// var newElement = "<h2>This is headingg</h2>";
// target.insertAdjacentHTML("afterend",newElement);

var target = document.getElementById("test");
var newText = "This is example of insert adjacent text";
target.insertAdjacentText("beforebegin",newText);