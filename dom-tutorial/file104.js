"use strict";
// querySelectorall
// select element using query selector
// using query selecctor we can access any class and ids

// accesing id
const mainHeading = document.querySelector("main-heading");
console.log(mainHeading);

const header = document.querySelector(".header");
console.log(header);

// we can access all classes with same name using querySelectorAll

const navItem = document.querySelectorAll(".nav-item");
console.log(navItem);