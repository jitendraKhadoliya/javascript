 "use strict";
//  sort
// let's learn sorting in javascript 
// in sorting javaScript uses ASCKI words rank
// means it sort string wise


// const number = [213,10003,432, 1123234,563,456,13];

// number.sort();
// console.log(number);
// becuse javaScript uses sorting askey wise

// lets sort string here
const str = ["jitendra","ankit","punit","Ttoy"];
str.sort();
console.log(str);


const number = [213,10003,432, 1123234,563,456,13];
// for number we can use callback function here
const result = number.sort((a,b)=>{
    return a-b; //for asseending
    // return b-a; // for desending 
})
console.log(result);

// let's see real life example
// we have array of object and we want to sort them high to low price catagory and high to low price catagory
const catagory = [
    {productId : 1, productName : "mobile", prouctPrice : "20000" },
    {productId : 2, productName : "laptop", prouctPrice : "50000" },
    {productId : 3, productName : "airdopes", prouctPrice : "1500" }
]
// now our aim is to set this order catagory wise

const lowToHigh = catagory.slice(0).sort((a,b)=>{
    return a.prouctPrice-b.prouctPrice; //for low to high
})
console.log("this is unsorted array",catagory);
console.log("sorted to low To high",lowToHigh);


const HighToLow = catagory.slice(0).sort((a,b)=>{
    return b.prouctPrice-a.prouctPrice; //for high to low  
})
console.log("sorted to high to low",HighToLow);