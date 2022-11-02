"use strict";

// Understanding callback 
// calling function inside of the function



    function myfunc(callback){
        console.log("performing myfunc function");
        callback();
    }

    function myfunc2(){
        console.log("performing myfunc2 2 function task 2");
    }
    // myfunc(myfunc2);
                // or i can do this work directly
    // myfunc( ()=>{
    //         console.log("performing myfunc2 2 function task 2");
    // } );



// let's understand it with the second simple example


    function printTwoNumbersWithAdd(number1 , number2 , atSucces , atFailier){
        if( typeof number1 ===  "number" && typeof number2 ===  "number"){
            console.log(number1,number2);
            atSucces(number1 , number2);
        }
        else{
            atFailier();
            // console.log("wrong type");
        }
        // here i was making mistake because i was not adding these value inside the callBack function
    }

    function failCase(){
        console.log("wrong type");
        console.log("please enter right data type");
    }
    
    // now here i'm creating second function for callback in that function i will add them
    function addNumber(num1 , num2){
        console.log(num1 + num2);
    }



    // printTwoNumbersWithAdd(4,5,addNumber);

    // or i can directly call this function inside the function

    printTwoNumbersWithAdd(4,"6", (num1,num2)=>
        {
         console.log(num1+num2); 
        } , failCase );



        // more case with my more understanding about callbacks


function mainFunc(mynum1 , mynum2 ,multiply ,addition ){
    // check number is smaller then 100 or not if it is then go for multiple  otherwise add them using callback
    // if(mynum1 || mynum2  < 60){
    if((mynum1<60) && (mynum2<60)){
        multiply(mynum1,mynum2) ;
        // console.log("multi working");
    }
    else{
        addition(mynum1 , mynum2);
    }
}


// now here i will crate callback functions name => multiple ,addition
const MultiplecationFunc = (num1,num2)=>{console.log(`your multiplication number is : ${num1*num2}`);
console.log("both values are under 60");}

const additionFunc = (num1,num2)=>{console.log(`your addition value is : ${num1+num2}`);
console.log("one or more value is more then 60")
}

// calling mainfunction here for output


// adition will be applied only when both of numbers are below 60
mainFunc( 22 , 28 , MultiplecationFunc , additionFunc);