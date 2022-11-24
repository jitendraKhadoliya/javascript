"use strict";
// rest parameters

// function myFunc(a,b,...c) {
//     console.log("a is :",a);
//     console.log("b is :", b);
//     console.log("c is rest parameters :" ,c);
// }
// myFunc(1,2,3,4,5,6,7,8,9,1);

// add all values

function myFunc(...numbers) {
    let total = 0; 
    for (let number of numbers) {
        total = total + number;
    }return total;
    }

const sum = myFunc(1,2,3,4,5,6,7,8,9,1,2);
console.log(sum);
// addall

let total = 0;
const addAll = (...allNumbers)=>{
    console.log(allNumbers);
    // for(let i = 0 ; i < allNumbers.length ; i++ ){
    //     total = total + allNumbers[i];
    //     // console.log(total);
    // }
    for(let allNumber of allNumbers){
        total = total + allNumber;
        // console.log(total);
    }
    console.log(total);

}

addAll(1,2,3,4,5,6,7,8,9,10)