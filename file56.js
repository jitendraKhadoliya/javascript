"use strict";

//  important array methods
// 1. forEach

// task -> take an array and pass it using function and print their index value and number value,and number value is multiplied by 2


// this is the method we know 
    // const array = [1,2,3,4];
    // function myFanc(number,index){
    //     for(let i =0; i < array.length; i++ ){
    //         console.log(`multipled number(${array[i]}*2)  = ${array[i]*2} || and index value is ${i} `);
    //     }
    // }
    // myFanc();


// but we can do this all work using foreach loop let's understand it

const array = [1,2,3,4];
// function myFanc(number,index){
//     console.log(number,index);
// }

array.forEach(function(number,index){
    console.log(`your number is ${number} after multipling with 2 answer is  : ${number*2} and your index valuue is :${index}`);
})
  
// real life example
const users = [
    {firstName : "jitendra",age:23},
    {firstName : "ankit",age:21},
    {firstName : "punit",age:20}
]
// print all names one by one
users.forEach(function(names){
    console.log(names.firstName);
})
// let's see how we can use arrow function
users.forEach(user =>{
    console.log(user.age);
})

for(let j=0;j<users.length;j++){
    console.log(users[j]);
}
