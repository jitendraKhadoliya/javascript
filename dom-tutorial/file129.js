"use strict";

// "mini project"


const todoForm = document.querySelector(".form-todo");
const todoList = document.querySelector(".todo-list");

// for selecting input from form-todo 
const todoInput = document.querySelector(".form-todo input[ type= 'text']")
console.log(todoInput);
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(todoInput.value);
    // here we will create new Li item
    const newLi = document.createElement("li");
    const newLiInnerhtml = ` <span class="text">${todoInput.value}</span> 
    <div class="todo-buttons"> 
        <button class="todo-btn done" >Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML = newLiInnerhtml;
    console.log(newLi);
    // now we have gotten the value of innerHtml and now we need to append this data to ul of todo
    // console.log(todoList);
    // here i will append the data 
    todoList.append(newLi);


    todoInput.value = " ";
})


// now i will use event delegation and put the event on whole todo-list means whole ul item 
todoList.addEventListener("click",(e)=>{
    // console.log(e.target);  //now i have clicked target   
    if(e.target.classList.contains("done")){
        // now i will try to reach to the span element using Dom
        const liSpan =  e.target.parentNode.previousElementSibling;
        console.log( liSpan);
        liSpan.style.textDecoration = "line-through";
    }; 
    if(e.target.classList.contains("remove")){
        // console.log("item removed",e.target);
        const targetedLi =  e.target.parentNode.parentNode;
        targetedLi.remove();
    }; 
})
