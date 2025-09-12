

function getcurrentlocation()
{

    console.log("The function to fetch the current user location ::");

     navigator.geolocation.getCurrentPosition((v)=>{


        console.log(v.coords);
        console.log(v.toJSON());
        console.log(v.timestamp);
        
        
        
     },(e)=>{

        console.log(e.PERMISSION_DENIED);

     
     })
    
}