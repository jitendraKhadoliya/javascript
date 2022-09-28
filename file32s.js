"use strict";

// while loop on arrays

const arrName = ["jitendra","ankit","punit","ram"];

let i = 0;
const arrName2 =["pavan","rohan"];

while(i< arrName.length){
console.log(arrName[i]);
// if i want to push this array to another one then
arrName2.push(arrName[i]);
// arrName2.push(arrName[i].toUpperCase());

i++;
}
console.log(arrName2);


