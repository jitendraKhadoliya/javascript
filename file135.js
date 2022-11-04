"use strict";

// function returning promises

function khadoliyaFamily(){
    const userName = ["jitendra","ankit","sohan","punit","ram","mohan"];
    return new Promise((resolve,reject)=>{

    if(userName.includes("jitendra") && userName.includes("ankit") && userName.includes("punit")&&userName.includes("ram")){
        resolve("KHADOLIYA FAMILY");
    }
    else{
        reject("Not from Khadoliya Family");
    }
    })
}

khadoliyaFamily().then((onSucces)=>{
    console.log("you are from",onSucces);
}).catch( (onFailure) => {
    console.log("you are",onFailure);
})

