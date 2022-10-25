"use strict";

// innerHtml

const headLine = document.querySelector(".headline");
// console.log(headLine.innerHTML);

headLine.innerHTML = "<H1> inner HTML updated </H1>";
// for adding something more 
headLine.innerHTML += "<Button class= \"btn\"> here this is the button </Button>";


// if we want to use double quotes inside the double qoutes then we use back slace before using double quote