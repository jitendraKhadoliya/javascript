// closures

// function can return functions

function outerFunction(){
    function innerFunction(){
        console.log("hello world");
    }
    return innerFunction();
}

outerFunction();

function printFullName(firstName,lastName){
    function fullName(){
        console.log(firstName,lastName);
    }
    return fullName;
}
const ans = printFullName("jitendra","khadoliya");
ans();

// where we print function inside function then function will print with their local memory