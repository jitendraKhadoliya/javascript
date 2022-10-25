"use strict";

// clone nodes
// i can use cloneNode method here for cloning



const todoList = document.querySelector(".todo-list");
console.log(todoList);
const newElement = document.createElement("li");
newElement.textContent = "cloned line";
console.log(todoList);


// i will do cloning here 
const newElement2 = newElement.cloneNode(true);



todoList.append(newElement);
todoList.prepend(newElement2);