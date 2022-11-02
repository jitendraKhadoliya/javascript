"use strict";

// setInterval

// console.log("script start");

//  setInterval(()=>{
//     let total = 0;
//     for(let i =0; i <10; i++){
//         total += i;
//     }
//     // console.log(total);
//     console.log( Math.random() ); },2000)

// console.log("script End");



            // my task : change color after every second and stopes after clicking button 



const body = document.body;
const button = document.querySelector("button");
// console.log(body);

const intervalID =  setInterval( () => {     
const red =  Math.floor(Math.random()*256); 
const green =  Math.floor(Math.random()*256); 
const blue =  Math.floor(Math.random()*256); 
const bgColor = `rgb(${red}, ${green}, ${blue})`;

body.style.backgroundColor = bgColor;

},1000);

button.addEventListener("click", () =>{
    console.log(intervalID);
    clearInterval(intervalID);
    button.textContent = body.style.backgroundColor;
});