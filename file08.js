"use strict";

// typeof operator
// data types (primitive data types)
// Number 12
// String "jitendra"
// Boolean
// undefined
// null
// BigInt
// Symbol

let age = 24;
let myName = "jitendra khadoliya";
// using typeof operator
console.log(typeof myName);

// change number to String
// 24 -> "24"
// method 1 :-
// age = 25 + "";
// console.log(typeof age);
// method :-2
// let  myAge = 23;
// myAge = String(age);
// console.log(typeof myAge);


// change string to number 
// "22" -> 22 

// method 1 ->
let  myAge = "23";
// myAge = + "myAge";
// console.log(typeof myAge);

// method 2 ->
myAge = Number(myAge);
console.log(typeof myAge);

