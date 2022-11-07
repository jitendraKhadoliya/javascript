// async wait

// fetch(URL)
//         .then((response)=>{
//             return response.json();
//         })
//         .then((data)=>{
//             console.log(data);
//         } )


const URL =  "https://jsonplaceholder.typicode.com/posts";





async function getPosts(){
        const response = await fetch(URL);

        console.log(response); 
        const data = await response.json();
        return data;
}

getPosts()
        .then((myData)=>{
            console.log(myData);
        })
        .catch((error)=>{
            console.log("inside catch");
            console.log(error);
        })


