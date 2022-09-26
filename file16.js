"use strict";
// and && operator OR || operator
let myName = "jitendra khadoliya";
let myAge =  "20";

// checking 1st condition 
// if(myName[0]==="j"){
//     console.log("inside if loop");
// }else{
//     console.log("inside else loop");
// }

// checking second condition
// if(myAge<= 10){
//     console.log("inside if loop");
// }else{
//     console.log("inside else loop");
// }



// mearging two condition using and opeartor
// use of && and operator
if(myName[0] === "j" && myAge <=23){
    console.log("my name starts with j and age is less the 23");
}else{
    console.log("now i am inside the else loop");
}

// use of OR || operator
if(myName[0] === "j" || myAge <=20){
    console.log("inside of if loop in OR operator");
}else{
    console.log("inside of else loop in OR operator");
}


