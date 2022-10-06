"use strict";
// some 
const myArr = [1,3,2,5,7,9];
// our aim to check that in array there is any even number or not
// for that we will use some fuction in array
const ans = myArr.some((number)=>{
    return number%2 === 0});
console.log(ans);

// real life example
const catagory = [
    {productId : 1, productName : "mobile", prouctPrice : "20000" },
    {productId : 2, productName : "laptop", prouctPrice : "80000" },
    {productId : 3, productName : "airdopes", prouctPrice : "1500" }
]
// our aim is to check any item's price is more than 50000 or not

const result = catagory.some(productValue => productValue.prouctPrice>50000);
console.log(result);