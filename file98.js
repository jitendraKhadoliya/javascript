// closures

// function can return functions

function outerFunction(){
    function innerFunction(){
        console.log("hello world");
    }
    return innerFunction();
}

outerFunction();