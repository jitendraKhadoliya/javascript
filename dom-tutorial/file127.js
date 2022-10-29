"use strict";

// keypress event
// mouseover event
 
// keypress is used for checking what key you pressed on keyboard 
// mouse over event uses for occuring mouse while pointer occurs on that perticular event then event will be executed

const body = document.body
console.log(body);

// now checking key press event 

body.addEventListener("keypress",(e)=>{
    console.log(e.key);
})

// now we will check mouseover event 
// i want to perform mouseover event on learn more button let's see how i do this

const learnMoreButton = document.querySelector(".btn-headline");
console.log(learnMoreButton);
learnMoreButton.addEventListener("mouseover",()=>{
    console.log("mouse over event occured !!!");
})

// mouseleave Event
learnMoreButton.addEventListener("mouseleave",()=>{
    console.log("mouse leave event occured !!!");
})