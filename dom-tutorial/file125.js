"use strict";

// pratice

// task : if i am clicking any button then color should change into grey and background color should be yellow let's see how i can do this

const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);
// for(let button of allButtons){
//     button.addEventListner("click",function(){
//         console.log("you presse me!!!");
//     })
// }


// allButtons.forEach(function(button){
//         button.addEventListener("click",function(){
//             // console.log(this.textContent);
//             button.style.backgroundColor = "yellow";
//             button.style.color = "gray";
//         } )
// })


// method using taget event
allButtons.forEach(button =>{
        button.addEventListener("click",(e)=>{
            // console.log(this.textContent);
            console.log(e.target);
            e.target.style.backgroundColor = "yellow";
            e.target.style.color = "blue";
        } )
})