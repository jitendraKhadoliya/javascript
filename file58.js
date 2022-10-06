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