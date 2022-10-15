"use strict";

const outterFunction = function(){
    let object  = 0;

    function innerFunction(){
 
        if(object < 1 ){
            console.log("hii, you called me !");
            object ++;
        }
    else{console.log("mai already call ho chuka hu");}
    }
    return innerFunction;
}
const myfunc = outterFunction();
myfunc();
myfunc();