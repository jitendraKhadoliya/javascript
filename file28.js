"use strict";

// primitive data type vs reference data type

//primitive data type
// primitive data type stores with differnt memory address 
// Reference data type stores with same memory address mostly they are objects 


// let num1 = 5;
// let num2 = num1;
// console.log("this is the num1: ",num1);
// console.log("this is the num2: ",num2);
// // now lets change one number's value
// num1++;
// console.log("this is the num1: ",num1);
// console.log("this is the num2: ",num2);

// now let's take the example of reference data type
let arrName1 = ["jitendra" , "ankit"];
let arrName2 = arrName1;
console.log("this is the value of arrName1",arrName1);
console.log("this is the value of arrName2",arrName2);

// now let's try to update arrName1
console.log("after adding updating arrName1");
arrName1.push("punit");
console.log("this is the value of arrName1",arrName1);
console.log("this is the value of arrName2",arrName2);

