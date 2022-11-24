// filter method
 
// it is also use in callback function 
// let's see how it workes
 
const myArr = [1,34,53,65,44,32,54];
// i want to filter the even values so let's create an function

// function isEven(number){
// return number%2 === 0;
// }

// let evenNumbers = myArr.filter(isEven);
// console.log(evenNumbers);

let evenNumbers = myArr.filter(isOdd  =  number => {
return number %2 !== 0;
});
console.log(evenNumbers); 

const unFilteredArray = [1,23,42,53,65,77,88];
// const filteredArray = [];

// for(let i =0; i< unFilteredArray.length ; i++){
//     if(unFilteredArray[i] %2 === 0){
//         // console.log(unFilteredArray[i]);
//         filteredArray.push(unFilteredArray[i])
//     }
// }

// console.log(filteredArray);
const filteredArray = unFilteredArray.filter((number)=>{
    return number %2 !== 0;
})
console.log(filteredArray);
