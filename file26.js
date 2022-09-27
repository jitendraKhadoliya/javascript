"use strict";
// intro of array 
// Reference type
// how to create arrays

// ordered of collection items

let fruits = ["apple","banana","grapes"];
console.log(fruits);
fruits[1] = "gobhi"
console.log(fruits);
// let number = [1,2,3,4,5,5,6,7,8,];
// console.log(number);

// let mixed = [1,2,3,4, null, undefined,1.23,"apple","banana","grapes"];
// console.log(mixed);


let obj = {};
console.log(typeof fruits);
console.log(typeof obj);

console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));