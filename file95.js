"use strict";
// javaScript in let and const variable

// console.log(firstName);
let firstName = "jitendra";
  // Uncaught ReferenceError: Cannot access 'firstName' before initialization
//   becuase in let it defines we can acces in before
// let before excute = uninitialize
console.log(firstName);



// note:-
// let and const are hoisted
// yes they are hoisted but they are uninitialize

// TDZ = temporial  dead zone 
// variable before initalize stayes in tdz


// const secondName ; //we can't leave simple const
let secondName; // but we can leave let undefined
console.log(secondName );