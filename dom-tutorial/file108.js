"use strict";
// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll


// getElementsByClass
// inside this we directly put class and id names without using dot and # let's see it

// const allElements = document.getElementsByClassName("nav-item"); //array like object //htmlcollection
// console.log(allElements);
// console.log(allElements[2]);


// query method
const allElements = document.querySelectorAll(".nav-item")
console.log(allElements);