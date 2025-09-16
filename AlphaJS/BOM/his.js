


function goforward()
{
    history.forward();
}

function jump()
{
    history.go(2); // used for directly jumping
}

function goback() {
 
    history.go(-2); // move back to specifed numbers back pages.
}


function info()
{
    console.log(history.length);
    
}