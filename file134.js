"use strict";

// promise
// overview promise is like promising something now for task and do it in future

console.log("script start");

const bucket = ['cofffe', 'chips', 'vegitables','salt','rice'];

// how to produce Promise

const friedRice =  new Promise((resolve,reject)=>{
    if(bucket.includes("vegitables") && bucket.includes('salt')&& bucket.includes('rice')){
        // we can add any type of values inside this resolve and reject
        resolve("fried Rice cooked");
    }else{
        reject("could not make it because all ingredients are not available");
    }
})


// here we will see how we can consume promise 
// use of then and catch

// here we are going to call resolve and reject one by one 

    // friedRice.then(
    //     // when promise will resolve
    //     (myFriedRice)=>{
    //        console.log( "let's eat" , myFriedRice());
    //     },(error)=>{
    //         console.log(error);
    //     }
    // )

// now we can also use then and catch

friedRice.then(
    (myFriedRice)=>{
    console.log("you can eat ", myFriedRice );
}
).catch(
    (error)=>{
        console.log(error);
    }
    );

setTimeout(()=>{
        console.log("inside the set time out function");
    },0);

    for(let i =0; i<=100; i++){
        console.log(Math.random(),i);
    }

 
    console.log("script end");


    // one more promise here i will write it down
    const basket = ['bat','ball','gloves','pad','basketball','hockey'];

    // now here i will declare promise

const checkCricketKit = new Promise((resolve , reject)=>{
        if(basket.includes("bat")&&basket.includes("ball")&& basket.includes("gloves")&& basket.includes("pad")){
            resolve( "and play cricket");    
        }
        else{
            reject("you can't go now");
        }
    });


    checkCricketKit.then((kit)=>{
        console.log( "you have all item for cricket kit, now you can go to the ground",kit );
    }).catch((atFAiliure)=>{
        console.log("you don't have kit items",atFAiliure);
    });