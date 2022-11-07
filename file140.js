"use strict";


// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// // step1 
//     // console.log(xhr.readyState);
// xhr.open("GET",URL);
//     // console.log(xhr.readyState);
//     xhr.onreadystatechange = function(){
    //         if(xhr.readyState === 4){
        //             // console.log(xhr);
        //             const response = xhr.response;
        //             const data = JSON.parse(response);
        //             console.log(typeof data);
        //         }
        // }
        
        
        // console.log( xhr.readyState);
        
        // xhr.open("GET",URL);

// console.log( xhr.readyState);
// xhr.onreadystatechange = function(){
    // if(xhr.readyState === 4){
        // console.log( xhr.readyState);
        // console.log(typeof xhr.response);
        
        // response -> it basically means what respose we received from the server side
        
        // const response = xhr.response;
        
        // const data =  JSON.parse(response); //here i am parcing the response from javaScript it will change the data into json file from string
        // console.log(typeof data); // so here we parsed the data from string to json file
        
        // }
        // }
        
        // or i can use diretly onload that only execute while my ready state is only four
        
        // xhr.onload = function(){
            // console.log(xhr.readyState); 
    // console.log(xhr)
    // const response = xhr.response;
    // const data =  JSON.parse(response);
    // console.log(response);
    // console.log(data);
// }

// xhr.send();

// what we have done till now


const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET",URL);



        // first method 
// xhr.onreadystatechange = function(){
//     if(xhr.readyState==4){
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     }
// }


            // direct method 
xhr.onload = function(){
    if(xhr.status>=200 && xhr.status<300){
        const data = JSON.parse(xhr.response);
        console.log(data);
        // console.log( xhr.status);
    }else{
        console.log("something went wrong");
    }
}

xhr.onerror= ()=>{
    console.log("network error");
}

xhr.send();