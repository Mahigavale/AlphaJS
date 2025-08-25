

let str="a";

let interval=setInterval(append,1000)
function append()
{
    str=str+'a';
    console.log(str);
    
    
if(str.length>10)
{
    clearInterval(interval);
}
}
