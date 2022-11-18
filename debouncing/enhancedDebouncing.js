"use strict";

// first we will write trail debouncing
const btn = document.querySelector(".btn");

// function debounce(func,delay){
//     let timeOutId = null;
//     return function(...arg){
//         if(timeOutId){
//             clearTimeout(timeOutId);
//         }
//         timeOutId = setTimeout(()=>{
//             func.call(this,...arg);
//         },delay)
//     }
// }

// const trailDebounce = debounce((e)=>{
//     console.log("item added to the cart",e.target.value);
// },400);

                // now here we will see leading debouncing
                // case 2 :-> leading debouncing

// function debounce(func,delay){
//     let timeOutId =  null;
//     return function(...arg){
//         if(timeOutId === null){
//             func.call(this,...arg);
//             }
//             clearTimeout(timeOutId);
//             timeOutId =setTimeout(()=>{
//                 // func.call(this,...arg);
//                 timeOutId = null;
//         },delay)
//     }
// }               

                    // now here we will merge both of them


function debounce(func,delay , option = {leadingDebounce : false,trailingDebounce : true}) {
    let timeOutId = null;
            return function(...arg){
                let isInvoke = false;
                if(option.leadingDebounce && timeOutId=== null){
                    func.call(this,...arg);
                    isInvoke = true;
                }
                clearTimeout(timeOutId);
                timeOutId = setTimeout(()=>{
                    if(option.trailingDebounce  && !isInvoke){ 
                        func.call(this,...arg);
                    }
                    timeOutId = null;
                },delay)

            }
}

function clickMe(){
    console.log("added to the cart");
}
let option;


const trailAndLeadDebounce = debounce(clickMe,400,
    (option ={leadingDebounce : false,trailingDebounce : true})
    );aqsEA3QAW`1S  qDXwrswaD43A`



// const leadingDebounce = debounce(()=>{
//     console.log("added to the cart");
// },300);

// btn.addEventListener("click",trailDebounce);
// btn.addEventListener("click",leadingDebounce);
btn.addEventListener("click", trailAndLeadDebounce);

// debounce(clickMe,400,
    // (option = {leadingDebounce : false,trailingDebounce : true})

    // )
// );