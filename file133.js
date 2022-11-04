// callbacks , callback hell , pyramid of doom
// asynchronous proramming

// my task 


// text     delay   color

// one      1s      violet
// two      2s      purple
// three    2s      red 
// four     1s      pink    
// five     2s      green
// six      3s      blue    
// seven    1s      brown

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const startHeading = document.querySelector(".start-heading");
const body = document.body;

// setTimeout(()=>{
//     heading1.textContent = "this is heading1";
//     heading1.style.color = "violet";
//     // now again i am giving timeout value inside this because i want follow order
//     setTimeout(()=>{
//         heading2.textContent = "this is heading2";
//         heading2.style.color = "purple";
//         setTimeout(()=>{
//             heading3.textContent = "this is heading3";
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 heading4.textContent = "this is heading4";
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{
//                     heading5.textContent = "this is heading5";
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         heading6.textContent = "this is heading6";
//                         heading6.style.color = "blue";
//                         setTimeout(()=>{
//                             heading7.textContent = "this is heading7";
//                             heading7.style.color = "brown";
//                         },1000)
//                     },2000)
//                 },2000)
//             },1000)
//         },2000)
//     },3000)
// },1000)

// this was callback hell 


// now we will discuss about piramid of doom 

// const changeText = function(element , text , color ,time , onSuccessCallBack , onFailiureCallBack){
//         setTimeout(()=>{
//             if(element){
//                 element.style.color = color;
//                 element.textContent = text;
//                 if(onSuccessCallBack){
//                     onSuccessCallBack();
//                 }
//             }
//             else{
//                 if(onFailiureCallBack){
//                     onFailiureCallBack();
//                     // console.log("element dosen't exsit");
//                 }
//             }
//         },time);
// }


// changeText(heading1 , "this is my changed heading1" , "green", 1000,()=>{
//     changeText(heading2 , "this is my changed heading2" , "red", 2000,()=>{
//         changeText(heading3 , "this is my changed heading3" , "yellow", 3000,()=>{
//             changeText(heading4 , "this is my changed heading4" , "green", 1000,()=>{
//                 changeText(heading4 , "this is my changed heading5" , "pink", 2000,()=>{
//                     changeText(heading5 , "this is my changed heading6" , "gray", 100,()=>{
//                         changeText(heading6 , "this is my changed heading7" , "blue", 1000,()=>{
    
//                         },()=>{console.log("failier callback running on heading 6")} );
//                     },()=>{console.log("failier callback running on heading 5")} );
//        f         },()=>{console.log("failier callback running on heading 4")} );
//             },()=>{console.log("failier callback running on heading 3")} );
//         },()=>{console.log("failier callback running on heading 2")} );
//     },()=>{console.log("failier callback running on heading 1")} );
//   }
// );


// i am trying same thing for one more time with some extra features


const changeText = function(element,text,color,time ,onFailiureCallBack ,onSuccessCallBack){
     setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onFailiureCallBack){
                onSuccessCallBack();
            }

        }else{
            // element.parentNode.textContent = "Something Went Wrong please check your Console";
            // console.log("element is not present there");
          if(onFailiureCallBack){
              onFailiureCallBack();
          }
        }
     },time)  
}


changeText(heading1 , "hello1" ,"yellow" ,1000 ,()=>{ startHeading.textContent = "Something Went Wrong on first node check Console"; console.log("wrong element on node 1")} ,()=>{
     changeText(heading2 , "hello2" ,"yellow" ,1000 ,()=>{ heading1.textContent = "Something Went Wrong on second node"; console.log("wrong element on node 2")} ,()=>{  
        changeText(heading3 , "hello3" ,"yellow" ,1000 ,()=>{console.log("wrong element on node 3")} ,()=>{  
            changeText(heading4 , "hello4" ,"yellow" ,1000 ,()=>{console.log("wrong element on node 4")} ,()=>{  
                changeText(heading5 , "hello5" ,"yellow" ,1000 ,()=>{console.log("wrong element on node 5")} ,()=>{  
                    changeText(heading6 , "hello6" ,"yellow" ,1000 ,()=>{console.log("wrong element on node 6")} ,()=>{  

                      });
                 });
               });
          });
       });
 });