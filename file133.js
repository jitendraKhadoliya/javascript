// callbacks , callback hell , pyramid of doom
// asynchronous proramming

// my task 


// text     delay   color

// one      1s      violet
// two      2s      purple
// three    2s      red 
// four     1s      pink    
// five     2s      green
// six      3s      blue    
// seven    1s      brown

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


// setTimeout(()=>{
//     heading1.textContent = "this is heading1";
//     heading1.style.color = "violet";
//     // now again i am giving timeout value inside this because i want follow order
//     setTimeout(()=>{
//         heading2.textContent = "this is heading2";
//         heading2.style.color = "purple";
//         setTimeout(()=>{
//             heading3.textContent = "this is heading3";
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 heading4.textContent = "this is heading4";
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{
//                     heading5.textContent = "this is heading5";
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         heading6.textContent = "this is heading6";
//                         heading6.style.color = "blue";
//                         setTimeout(()=>{
//                             heading7.textContent = "this is heading7";
//                             heading7.style.color = "brown";
//                         },1000)
//                     },2000)
//                 },2000)
//             },1000)
//         },2000)
//     },3000)
// },1000)

// this was callback hell 


// now we will discuss about piramid of doom 
