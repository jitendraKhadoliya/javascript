//  document.createElement();
// append
// prepend 
// remove

// const todoList = document.querySelector(".todo-list");
// console.log(todoList);

// const createNewList = document.createElement("li");
// console.log(createNewList);

// // here we have created li tag here now we will create text item inside it

// // const newText =  document.createTextNode("nothing");
// createNewList.textContent = "nothing";
// // todoList.append(createNewList);
// todoList.prepend(createNewList);

// // now i will remove all of li item

// const listItem = document.querySelector(".todo-list ");
// // console.log(listItem);

// listItem.remove();


// now i want to add Element again with the same data let's see what i learned here


// now what i will do is first i will create an li tag here 

const createLiTag = document.createElement("li");
console.log(createLiTag);


// so now i will create text inside first 

// const createText = document.createTextNode("now i have created an text node");
// console.log(createText);

// now i have created text node here 

// now here i am pressing the data insidde createLiTag using textContent
// createLiTag.append(createText);


const todoList = document.querySelector(".todo-list");
console.log(todoList);

// now here is my li is ready with text content i can inset it anywhere i want 
// so i will append this data inside the todo-list 

// todoList.append(createLiTag);


// one direct method we have
createLiTag.textContent = "this is my data inside created element";
todoList.before(createLiTag);
todoList.after(createLiTag);