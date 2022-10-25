"use strict";

// for classes i can create classes can see list of classes and more


const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// with classlist property i can see the all classes 
// adding new classes
    // sectionTodo.classList.add("bg-dark");
// removeing new classes
// sectionTodo.classList.remove("container");
// console.log(sectionTodo.classList);


// contains will check is there class present or not 
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);

// toggle =====> if class already exists it will remove if not then it will create

sectionTodo.classList.toggle("bg-dark"); //1 st it will create
sectionTodo.classList.toggle("bg-dark"); // 2nd it will remove

// specificity related
const header = document.querySelector(".header");
console.log(header);
header.classList.add("bg-dark");
console.log(header.classList);