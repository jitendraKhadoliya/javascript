"use strict";
// default perameters
// if there is no value in perameter then we can set default values in parameters


// before es6 version

// function addTwoNum(num1,num2) {
//     if(typeof num2 === "undefined"){
//         num2 = 0;
//     }
//     return num1+num2;
// }
// const ans = addTwoNum(2);
// console.log(ans);


// now new Method
function addTwoNum(num1,num2=0) {
    return num1+num2;
}
const ans = addTwoNum(0,3);
console.log(ans);