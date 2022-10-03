"use strict";

// block scope vs function scope

// let and const are block scope means we can't access these outside the function
// var is the function scope means we can use it everywhere onece declare


// small example
{ // these are block 
    // const  myName = "jitendra";
    // let  myName = "jitendra";
    // console.log(myName);s
}

// we can't use it because it's outside the function
// console.log(myName);

{
    // var myName = "khadoliya";
    // console.log(myName);
}
// console.log(myName);
// so we saw here we can use access var outside the block scope

// real time example
// if always true in empety

// checking const outside the funtion 
const myFanc = function() {
    if(true){
        const myName = "ankit";
        console.log(myName);
    }
    
    // console.log(myName);
    // cheking var outside of the function
    const myFanc2 =()=>{
        if (true) {
            var lastName = "khadoliya";
            console.log(lastName);
        }
        console.log(lastName); 
    }
myFanc2();
}

myFanc();

// there is little catch laxical approch is outside(upside)  that's why const and let varibale returens value