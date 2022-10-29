 
 console.log("script started !!!");
 const allButtons = document.querySelectorAll(".my-buttons button");
 
 allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let num = 0;
        for(let i=0;i<=1000000000;i++){
            num += 1;
        }
        console.log(e.currentTarget.textContent, "value of num is : ",num );
    });
 });


 let outerVar = 0;
 for(let i = 0; i<= 1000000; i++){
    outerVar += 1;
    
 }

   console.log("script Ended !!!");