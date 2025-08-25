

let count=1;

function greet()
{
    console.log("Great day!");
    count++;
    console.log(count);

    if(count>5)
    {
        clearInterval(interval);
    }
    
}

let interval=setInterval(greet,1000);
