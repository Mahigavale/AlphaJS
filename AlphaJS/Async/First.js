
let flag=false;
let timer=setTimeout(print,4000,10,10);
if(flag==true){
clearTimeout(timer);
}
function print(n,v)
{
    flag=true;
    console.log("hello from the print;"+(n+v));
    
}
console.log("hiii");
console.log("byeeee");


