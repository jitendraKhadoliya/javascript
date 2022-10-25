// we can edit Element using javaScript without removing perivious element

"use strict";

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
// now i can change and update it


// first method 
// todoList.innerHTML = todoList.innerHTML + " <li> it has been changed now </li>";


// second more shortcut method
todoList.innerHTML +=" <li>new one it has been changed now </li>";

// when you should use it and when to not