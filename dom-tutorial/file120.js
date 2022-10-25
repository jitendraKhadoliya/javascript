// intro to events
// click


// ways to use events

// 1. directly in html file 
// Eg - here i will check on learn more button

// we can fire this event on html file directly 
// onClick="console.log('you clicked me !!!')" 


// 2. method is 
// const btn = document.querySelector(".btn-headline");
// console.log(btn);
// btn.onClick = "console.log('you clicked me!!')";

// 3rd method and most popular method
// addEventListener


const btn = document.querySelector(".btn-headline");
// btn.addEventListener("Click",function(){
//     console.log("you clicked me!!!!");
// });

// directly arrow methods
btn.addEventListener("click",function(){
    console.log("you clicked me!!!!");
});