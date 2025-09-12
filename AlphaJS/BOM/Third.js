
// Navigator Object of the BOM.




function explore()
{

    var result=navigator.onLine;


    if(result !=true)
    {
        alert("you are offline")
    }
   else
   {
    alert("welcome to the google......")
   }
}


function demo()
{
    navigator.clipboard.readText()
    .then((v)=>
    {
        console.log(v);
        
    }).catch((e)=>
    {
        console.log(e);
        
    })
}