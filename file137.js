"use strict";

// then.resolve
// promise chaining 


// note
// then() = then method always return new promise


function infiName(){
    return new Promise((resolve,reject)=>{
        resolve("jitendra ");
    })
}

// this is function resolve 
infiName().then((name)=>{
        console.log(name);
        name+= "khadoliya";
        return name;
})
                    // now we are creating chain here 
.then((name)=>{
    console.log(name);
    name += ", ankit Khadoliya";
    return name;
})
.then((name)=>{
    console.log(name);
})