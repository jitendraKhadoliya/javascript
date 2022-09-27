"use strict";

//cloning arrays

//concatenate arrays

let arrName1 = ["jitendra", "ankit"];
let arrName3 = ["buli","ram"];

// now i want to clone it 
// method 1 : slice oprator
// let arrName2 = arrName1.slice();
// for concatenate
// let arrName2 = arrName1.slice().concat(arrName3);


// method 2 : concatenate operator
let arrName2 = arrName1.concat();


// method 3 : spread operator
// let arrName2 = [...arrName1,...arrName3];



console.log(arrName1 === arrName2); //checking whether array is same or not if true then same false then differnt cloned 
arrName1.push("punit");
console.log(arrName1);

console.log(arrName2);