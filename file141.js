// // error handing in xml 
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("get",URL);

// // xhr.onload = ()=>{
//     //    console.log(xhr.status);
//     //     const data = JSON.parse( xhr.response);
//     //     console.log(data);
//     // }
    
    
//     xhr.onreadystatechange = function(){
//         if(xhr.status>=200 && xhr.status<300){
            
//             // if(xhr.readyState===4){
//                 //     const data = JSON.parse(xhr.response);
//                 //     console.log(data);
//                 // }
//                 // else{
//                     //     console.log("entered wrong element");
//         // }
//         // }else{
//             //     console.log("sommething is wrong");
//         }
//     }
    
    
//     xhr.send();
    
    
    
    
    
//     //  trying again for resolving error handling
    
    
    
    
    
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const xhr = new XMLHttpRequest();


    xhr.open("GET",URL);


    xhr.onload = function(){

        if(xhr.status>=200 && xhr.status<300){

        // console.log(xhr);
        // console.log(xhr.response);
         //here i am getting response from the server side

        // now i wall do parseing because i want to change response into string to JSON file
        const data = JSON.parse(xhr.response);
        console.log(data);

        // callback hell 
        // now i want an random id that is 2 let's see how i can do it

        const xhr2 = new XMLHttpRequest();
        const id = data[3].id;
        console.log(id);
        const URL2 = `${URL}/${id}`  //here we created url2 for id 3
        console.log(URL2); 


        xhr2.open("GET",URL2);

        xhr2.onload = () => {
            // console.log(xhr2.readyState);
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }

        xhr2.send();
        


        }else{
            console.log("status from server is not between 200-300");
        } 



    }

             // for network connectivity 
    xhr.onerror = ()=>{
        console.log("network error");
    }
    xhr.send();