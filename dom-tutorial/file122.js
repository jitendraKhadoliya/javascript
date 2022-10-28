// check event on all buttons

// "use strict";

const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

// this is showing for all buttons 
// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this);
//     })
// }

    // i want to see sepretly
// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this.textContent);
//     })
// }
// textContant
// for(let i = 0; i < allButtons.length; i++){
//     allButtons[i].addEventListener("click",function(){
//         console.log(this.textContant);
//     })
// }

allButtons.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this);
    });
});

