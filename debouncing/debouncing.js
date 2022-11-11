            // "traling debouncing";



// "here first we will see some event listner"


// some event list 
// 1. input :- best and suitable event for input
// 2. keydown
// 3. keypress
// 4. keyup
// 5. change :- it will execute when we go out of box

// const inputEvent = document.getElementById("input-event");
// // console.log(inputEvent);

// inputEvent.addEventListener("change",()=>{
//     console.log(inputEvent.value);
// })
// // difference between target and this
// inputEvent.addEventListener("input",function (){
//     // console.log(inputEvent.value);
//     // console.log(e.target.value);
//     console.log(this.value);

//     // so here we saw this => keywords takes value from srounding in arrow function 
//     // e.target => takes the value from events in all type of function
// })




// i will try with myself here about debounce function here
// task -> my debounce will take input and with the use of time delay
// simply means that use debounce with setTimeout();

const myInput = document.getElementById("input-event");
// console.log(myInput);



// function debounce(func,delay){
//     let timeOutId;
    
//     return function(...arg){
//         if(timeOutId){
//             clearTimeout(timeOutId);
//         }
//         timeOutId = setTimeout(()=>{
//             func.call(this,...arg);         
//         },delay);
//     }  
// }

// function mySuggestion(e){
//     console.log("suggestion for",e.target.value);
// }

// const decoratedFunc = debounce(mySuggestion,400);


// myInput.addEventListener("input",decoratedFunc);


function debounce(func,delay){
    let timeOutId;
    return function(...arg){
        if(timeOutId){
            clearTimeout(timeOutId);
        }
                timeOutId = setTimeout(()=>{
                func.call(this,...arg);
                // console.log("inside the debounce functon",delay);
            },delay)
    }
}

function mySuggestion(e){
    console.log("show suggections for",e.target.value);
}




const myResultedSuggestion = debounce(mySuggestion,500);



myInput.addEventListener("input", myResultedSuggestion);








