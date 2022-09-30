"use stict";
// function
// funstion declarition
// funstion expression


// function declarition
function sumOfTwoNumber(a,b){
 let   sum = a + b ;
   return sum;
}

sum1 = sumOfTwoNumber(2,12);
console.log(sum1);


// odd or even
// input : 1 Number
// output : true : false


// function declarition
// function isEven(number){
    // another short trick
    // return number % 2 === 0;

    // if (number % 2 === 0){
        // return true; 
    // }
        // return false;
// }
// console.log(isEven(21));

// funstion expression
const isEven = function (number){
    // another short trick
    return number % 2 === 0;

    // if (number % 2 === 0){
        // return true; 
    // }
        // return false;
}
console.log(isEven(21));


// function 
// input : String
// output : first CharacterData
// function firstString(string) {
//   return  string[0];
// }
// console.log(firstString("afdad"));


// function declarition
// input : Array, target(number)
// output : index of tagert if target present in Array



// function declarition
// function  checkTarget(array,target)



// function expression
const checkTarget = function(array,target)


{
    for(let i =0 ; i<array.length;i++){
        if (array[i] === target) {
            return i;
        }
    }
    
    return -1;
}
const myarray = [1,2,3,4,5,6,7,8,9,10];
const j = checkTarget(myarray,11);
console.log(j);