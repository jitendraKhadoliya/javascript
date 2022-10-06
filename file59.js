"use strict";
// reduce

const numbers = [22,34,53,46];
// aim : sum all the numbers  using reduce method


const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0 //here the zero for accumulator stating value  
);
// what we have done here is
// accumulatorValue  currentValue   returnValue
    // 0                   22            0+22
    // 22                  34            22+34=56
    // 56                  53            56+53=109
   //  109                 46           109+46=155
console.log(sum);
// this is how reduce method works
// let's see the real time example

const userCart =[
    {productId:1,productName:"laptop",productPrice:40000},
    {productId:2,productName:"mobile",productPrice:20000},
    {productId:3,productName:"airdops",productPrice:4000},
    ]
    // now we want to show total price for checkout
const resultedAmmount = userCart.reduce((totalPrice,currentValue)=>{
        return totalPrice + currentValue.productPrice
    },50 // adding 50 rs for delivery charge
    );
 console.log(resultedAmmount);   