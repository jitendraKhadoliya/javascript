"use strict";

// object inside array
//  very usefull in real time world applications

// let's see patten first 
// variable variableName = [{} , {} , {} ]

const users = [
{userId :  1 ,firstName :" jitendra",gender : "male" },
{userId :  2 ,firstName :" ankit",gender : "male" },
{userId :  3 ,firstName :" punit",gender : "male" },
]

// iterating the values for of loop
// for(const user of users){
    // console.log(user);
//     console.log(`${user.userId} : ${ user.firstName} `);
// }

// using for in loop 
// for(const index of users){
//     console.log(index.firstName);
// }

// let's try with for loop
let newUserData = [] ;
for(let i =0; i <= users.length-1;i++ ){
    // newUserData = users[i];
    newUserData = users[i].userId 
  let  newUserData2 = users[i]["firstName"];
    console.log(newUserData + " : "+   newUserData2 );
}