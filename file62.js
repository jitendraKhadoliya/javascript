"use strict";
// every 
// in every array checkes all the data of array and if it find true then return true else false
// means checks every condition

const isAllEven = [2,4,8,6];

// const ans = isAllEven.every((allnumber)=> allnumber % 2 === 0)
// longerway
const ans = isAllEven.every((allnumber)=> {
    return allnumber % 2 === 0})
console.log(ans);


// real time example check all product price is less then 70000 
const catagory = [
    {productId : 1, productName : "mobile", prouctPrice : "20000" },
    {productId : 2, productName : "laptop", prouctPrice : "40000" },
    {productId : 3, productName : "airdopes", prouctPrice : "1500" }
]
const result =catagory.every((price)=>{
    return price.prouctPrice<70000;
})
console.log("true means all price is less than 70000 : ", result);