var element;
document.getElementById("header").addEventListener("click",abc);

// function abc(){
// document.getElementById("header").classList.add("lion","tiger");
// document.getElementById("header").classList.toggle("lion","tiger");

// var a = document.getElementById("header").classList.length;
// console.log(a);
// }

// function abc(){
//     var a = document.getElementById("header").classList.item(0);
//     console.log(a);
// }

function abc(){
    var a = document.getElementById("header").classList.contains("tiger");
    console.log(a);
}