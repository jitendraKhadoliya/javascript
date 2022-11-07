"use strict";

// now here we will use promise in the place of callback 

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");

// console.log(heading1);

// const changeText = function(element,text,color,time){ 
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(element){
//                     element.textContent = text;
//                     element.style.color = color;
//                     resolve();
//             }else{
//                 reject();
//             }
//         }, time )
//     });
// } 

// changeText(heading1 , "changed heading 1", "red" , 1000 )
// .then(()=>changeText(heading2 , "changed heading 2", "red" , 1000 ))
// .then(()=>changeText(heading3 , "changed heading 3", "red" , 1000 ))
// .then(()=>changeText(heading4 , "changed heading 4", "red" , 1000 ))
// .then(()=>changeText(heading5 , "changed heading 5", "red" , 1000 ))
// .then(()=>changeText(heading6 , "changed heading 6", "red" , 1000 ))
// .then(()=>changeText(heading7 , "changed heading 7", "red" , 1000 ))
// .then(()=>changeText(heading8 , "changed heading 8", "red" , 1000 ))



const changePattern = function(element,text,color,time ){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject();
            }
        },time);
    })
}

 changePattern(heading1,"changed text","yellow",1000)
.then(()=>{return changePattern( heading2,"changed text","yellow",1000)})
.then(()=>{return changePattern( heading3,"changed text","yellow",1000)})
