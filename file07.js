"use strict";

// trim()
// toUpperCase();
// toLowerCase();
// Slice();

let firstName = "   jitendra khadoliya ";
// before creating new string using trim keyword
console.log(firstName.length);

// the trim feature remove the all spaces from the string and creates new string so we need to create a new string to see the results

let newString = firstName.trim(); 
console.log(newString);
// firstName = firstName.trim();
// console.log(firstName.length);

// forUpperCase use
let secondName = "ankit khadoliya";
secondName = secondName.toUpperCase();
console.log(secondName);

// forLowerCase use 
let thirdName = "PUnIt kHAdOliYA"
// method 1
// console.log( thirdName.toLowerCase());
// method 2 
thirdName = thirdName.toLowerCase();
console.log(thirdName);

// use Case for slice 
let forthName = "rohit saini"
forthName = forthName.slice(0,4); //rohi because using index
console.log(forthName);
