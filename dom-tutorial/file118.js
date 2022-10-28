// static and live difference

// querySelectorAll will give us static list
// getElementBySomething will give us live list


const ul = document.querySelector(".todo-list");

// static list 
const listItems = document.querySelectorAll(".todo-list li");
// live list
// const todoList = ul.getElementsByTagName("li");

// for check i will add item 6 here

const item6 = document.createElement("li");
item6.textContent = "item 6";
ul.append(item6);
console.log(listItems);