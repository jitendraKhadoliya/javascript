// small mistake we usally do 

const  user ={
    firstName : "jitu",
    age: 24,
    about : function(){
        console.log(this.firstName,this.age);
    }
}

user.about();
// this will fatch the answer
// but what if we do this
const newAbout = user.about;
// it showing us undefined because the time it's facting from this keyword and inside new variable there is no this value
newAbout();
// for this type of solution we can call bind keyword

const newAbout2 = user.about.bind(user);
// because here we first created new function and provied this keyword value in new function
newAbout2();