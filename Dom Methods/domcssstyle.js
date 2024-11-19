var element;
// document.querySelector("#suppu").style.backgroundColor="black";
// document.querySelector("#suppu").style.color="orange";

//document.querySelector("#suppu").className="abc tyu jkl";
// element = document.querySelector("#suppu").className;

document.querySelector("#suppu").classList.add("lion","tiger");
element = document.querySelector("#suppu").classList;

document.querySelector("#suppu").classList.remove("tiger","lion");

console.log(element);