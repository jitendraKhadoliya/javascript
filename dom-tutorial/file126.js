"use strict";

// now my task is when we click on button all the background color should change

const colorButton = document.querySelector("button");
// console.log(colorButton);
const mainBody = document.querySelector("main");
const currentColor = document.querySelector(".current-color");
// console.log(currentColor);

function randomColorGenrator(){
    const red =  Math.floor(Math.random()* 256);
    const green =  Math.floor(Math.random()* 256);
    const blue =  Math.floor(Math.random()* 256);
    const randomColor = `rgb(${red} ${green} ${blue})`;
    return randomColor;
}

colorButton.addEventListener("click",()=>{
    const randomColor = randomColorGenrator();
    mainBody.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor; 
})