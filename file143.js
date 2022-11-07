// fetch

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
        .then(response =>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Something Went Wrong");
            }
        } )
        .then(data =>{
            console.log(data);
        })
        .catch(error =>{
            console.log("inside catch");
            console.log(error);
        })