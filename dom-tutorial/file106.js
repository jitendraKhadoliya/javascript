"use strict";
// change styles of elements


// one method to access 
const headLine = document.querySelector("#main-heading");
// another method to access class and id same like css but we can to provide . or
// const headLine = document.querySelector("div.headline h2");
console.log(headLine);
headLine.style.color = "red";
// we can't use - css property here it will give an error
headLine.style.backgroundColor = "black";
console.log(headLine);