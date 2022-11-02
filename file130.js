"use strict";
// synchronous programming vs asynchrous programming

// synchronous programming
// synchronous programming is single thread means code will execute one by one line


// for example 
            // console.log("script start");

            // for(let i = 0; i<1000; i++){
            //     console.log("loop is running");
            // }
            // console.log("script End");
            
// asyncprogramming
//  javaScript is a synchronous programming but web Api browsers gives us Asynchronous feature 
// it means it will do the next task and the feature that we want to asynchronous in code will be executed in last
// let's see 

// setTimeout

console.log("script start");

function hello(){
    console.log("hello boys and girls");
}
// set setTimeout gives us id value let's calculate

const idHello =  setTimeout(hello,1000);
const idInside =  setTimeout(()=>{
    console.log("inside set time OUt");
},0);

for(let i = 0; i<1000; i++){
    console.log("loop is running");
}
console.log("script end");
console.log("id value of hello",idHello);
console.log("id value of inside",idInside);
// here we can also clear the timeline data
// i will clear inside set time out
clearTimeout(idHello);

// using cleartime out property i can clear the data withpot priniting
