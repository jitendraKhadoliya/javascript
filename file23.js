"use strict";

// example of for loop
// print addition of first ten natural number using for loop


let num =0;
let p = prompt("enter value you want till addition");
for(var i =1;i<=p; i++){
    num = num + i;
    console.log(num);
}
console.log("final addition of number is ",num );