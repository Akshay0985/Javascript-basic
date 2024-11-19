var element;

// element=document.all;
// element=document.getElementById("showcase").innerText;
// element=document.getElementById("showcase").innerHTML;

//  element=document.getElementById("header").getAttribute("onclick");

// element=document.getElementById("header").getAttributeNode("onclick").value;

// element=document.getElementById("header").attributes[2].value;

element=document.getElementById("header").innerHTML;
console.log(element);

// document.getElementById("header").innerHTML="Akshay Love Suppu Boobies So Much🥰";
// element=document.getElementById("header").innerHTML;

// document.getElementById("header").innerText="<h1>Akshay Love Suppu Boobies So Much🥰</h1>";
// element=document.getElementById("header").innerText;



element=document.getElementById("header").setAttribute("style","border:5px dotted yellow");

element=document.getElementById("header").getAttribute("class");

document.getElementById("header").removeAttribute("style");


console.log(element);