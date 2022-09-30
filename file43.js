"use strict";

// nested destructuring


const companyUsers = [
    {userId : 1001 , userFirstName : "jitendra" ,userLastName : "khadoliya" },
    {userId : 1002 , userFirstName : "ankit", userLastName :"saini" },
    {userId : 1003 , userFirstName : "harshit", userLastName :"vasist" }
];


// now destructre it one by one

// const[user1,user2,user3 ] = companyUsers;
// console.log(user1,user2,user3);


// if i want an perticular Object

const[{userId, userFirstName:userFirstName1} ,  , {userId:userId3} ] = companyUsers;
// console.log(userFirstName);
console.log(userId);
console.log(userId3);
console.log(userFirstName1);

