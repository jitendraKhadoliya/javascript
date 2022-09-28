"use strict";

// array destructring

const arrName = ["jitu","anki","puni","ram","rohit"];

// // treditional method
// let myVar1 = arrName[0];
// let myVar2 = arrName[1];

// now with the help of destucture we can initilise it with shortcut


let [ myVar1 ,myVar2,...newArray ] = arrName;

console.log("value of myVar1 is :-",myVar1);
console.log("value of myVar1 is :-",myVar2);

// initilazing array using slice
const arrName2 = arrName.slice(2)
console.log("this is the new arrayName2 :-",arrName2);

// here is the shortcut we declared this array at the time of initilize
console.log("this is the new array :-",newArray);
