"use strict";
// arrow functions
        // pattern for function arrow
        // variable type  function name = (params) => {
                // do code here inside the function
        // }



// function declarition
    // function sumOfTwoNumber(a,b){
    // let   sum = a + b ;
    // return sum;
    // }
    // sum1 = sumOfTwoNumber(2,12);
    // console.log(sum1);
    
// function declarition to arrow function
  const sumOfTwoNumber = (a,b) =>{
    let   sum = a + b ;
    return sum;
    }
    let sum1 = sumOfTwoNumber(2,12);
    console.log(sum1);


// function arrow
const checkTarget = (array,target) =>


{
    for(let i =0 ; i<array.length;i++){
        if (array[i] === target) {
            return i;
        }
    }
    
    return -1;
}
const myarray = [1,2,3,4,5,6,7,8,9,10];
const j = checkTarget(myarray,5);
console.log(j);





            // VERY IMPORTANT CONSIDERATION IN ARROW Function
            // condtion appies only for one liners
            // if function is in one line then we don't need to use paranthics
            // if function is one line then we also don't need to use retuen keyword
            // let's see an example

             const isEven = number => number % 2 === 0;
             //  calling function
            console.log(isEven(4));

            // one more example
            // checking first index of any String
            const chkStr = str => str[0]; 
            console.log(chkStr("jitendra"));