// event object

const firstButton = document.querySelector("#one");

// firstButton.addEventListener("click",function(){
    // console.log(this);
// });

// whenever we add event listener on any element
// js engine ---- line by line code executes
// browser --- js engine + extra features
// browser --- js engine + webApi


// when browsers gets to know user performed any event then 
// browser will do two works  

// 1. callback function will be given to js Engine
// 2.with callback function browser will also give information about event
// and we get that info in object

const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

for(let button of allButtons){
button.addEventListener("click",(e)=>{
    console.log(e.currentTarget);
});
};