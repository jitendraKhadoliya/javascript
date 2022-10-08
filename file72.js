"use strict";
// this keyword and window keyword are already exist keywords in javaScript we we are using these in function then it will show list of this keywords that are exists so for removing these we should use "use stirct" effect after using this it will show undefined

function myfunc(){
    console.log(this);
    // console.log(window);
}
myfunc();