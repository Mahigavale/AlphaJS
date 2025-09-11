

//Location Object of the BOM.

function gethost()
{

    setTimeout(()=>{


        console.log("Host:",location.host);
        console.log("Host Name:",location.hostname);

        console.log("Href:",location.href);
        
        
    },2000)


}



function  assignloc()
{

    setTimeout(()=>
    {
location.assign("https://www.google.com");
    },2000)
}

function locreload()
{
 let count=1;
    const ide= setInterval(()=>
    {


        location.reload();
         count++;

           console.log(count);
           
         if(count ==5)
         {
            console.log("Clearing interval");
            
            clearInterval(ide);
         }

    }, 1500)
}


function  replaceloc()
{

    setTimeout(()=>
    {
location.replace("https://www.w3schools.com");
    },2000)
}