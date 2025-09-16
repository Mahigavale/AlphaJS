

function demo()
{

    navigator.geolocation.getCurrentPosition((position)=>
    {


        console.log("long:",position.coords.longitude);
        console.log("lat:",position.coords.latitude);
        console.log(position.coords.altitude);
        console.log(position.coords.heading);
        console.log(position.coords.speed);

        console.log(position.coords.altitudeAccuracy);
        
        
        
        
        console.log(position.timestamp);
        console.log(position.toJSON());
        
        
        
    }, (err)=>
    {
console.log(err.message);

    })
}