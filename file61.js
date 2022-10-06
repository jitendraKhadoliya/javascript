"use strict";
// find method


const names = ["jitu","jhon","joy","roy","roony"];
// now our aim is find a name whose total length is 3
// note- find array method only find one value one he findes out then automatically it will come outside the array

function isLength3(string){
    return string.length === 3;
}

const ans = names.find(isLength3
    // (name)=>{return name.length === 3;}
)
console.log(ans);

// real time example find product detais of productId number 2
const catagory = [
    {productId : 1, productName : "mobile", prouctPrice : "20000" },
    {productId : 2, productName : "laptop", prouctPrice : "50000" },
    {productId : 3, productName : "airdopes", prouctPrice : "1500" }
]
// const idOutPut = catagory.find((product)=>{
//     return product.productId === 3;
// })
// more  shorter
const  idOutPut = catagory.find(product => product.productId ===3);
console.log(idOutPut);