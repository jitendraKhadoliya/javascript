"use strict";

// for in loop
// it gives us index value

const fruits = ["apple", "banana", "papaya", "mango"];
const fruits2 = [];

for (let index in fruits) {
  // console.log(index);

  // now i want to print values on index that's very simple
  //   console.log(fruits[index]);
 
 fruits2.push(fruits[index].toLocaleUpperCase() );
}
console.log(fruits2);