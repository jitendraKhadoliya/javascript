"use strict";

// this keyword
// on expresion and declare function this keyword will show value that is given inside
// on arrow function this keyword it will show global window object


const btn = document.querySelector(".btn-headline");

function myfunc(){
    console.log("you clicked me !!!");
    console.log("value of this");
    console.log(this);
}

btn.addEventListener("click",myfunc);

// btn.addEventListener("click",function myfunc(){
//     console.log("you clicked me!!!");
//     console.log("value of this");
//     console.log(this);
// } );


// btn.addEventListener("click",()=>{
//     console.log("you clicked me!!!!");
//     console.log("value of this");
//     console.log(this);
// })