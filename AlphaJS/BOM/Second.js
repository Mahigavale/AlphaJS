
 let count=1;
    const ide= setInterval(()=>
    {


        //location.reload();
         count++;

           console.log(count);
           
         if(count >5)
         {
            console.log("Clearing interval");
            
            clearInterval(ide);
         }

    }, 1500)