"use strict";

// here what i am going to do is change the theme color while clicking on the button

const body = document.body;
const toggleThemeBtn = document.querySelector(".toggle-theme");
console.log(toggleThemeBtn);


// now here i will select the btn for changing color theme

function changeTheme(){
    if(body.classList.contains("dark-theme")){
        body.classList.remove("dark-theme");
        toggleThemeBtn.textContent = "Convert into Dark Mode";
        // console.log("class is present");
        
    }else{
        body.classList.add("dark-theme");
        toggleThemeBtn.textContent = "Convert into Light Mode";
        // console.log("class not is present");
    }
}


toggleThemeBtn.addEventListener("click",changeTheme);


