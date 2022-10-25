"use strict";
// some old methods to support poor IE
// appendChild;
// insertBefore
// replaceChild
// removeChild


const ul = document.querySelector(".todo-list");
console.log(ul);

// 1. now i want to use appendChild
// means wants to add an child

const elementValue = document.createElement("li");
elementValue.textContent = "-----> this is child value";
// ul.appendChild(elementValue);


const refernceNode = document.querySelector(".list-item");
// ul.insertBefore(elementValue,refernceNode );
// ul.removeChild(elementValue);


// for replaceChild
ul.replaceChild(elementValue , refernceNode);

console.log(ul);
ul.removeChild(elementValue);

console.log(ul);