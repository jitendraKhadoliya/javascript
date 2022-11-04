"use strict";

// promise and setTimeout both at the time

// aim - i want to resolve or reject promise after 2 seconds

function checkValue(){
    return new Promise((resolve,reject)=>{

        const value = false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }    
        },2000);
    })
}

checkValue()
    .then(()=>{console.log("solution resolved");})
.catch(()=>{console.log("solution rejected");})
