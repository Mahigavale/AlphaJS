

let v=()=>
{
    console.log("Welcome");
    
};

v();


let arr=[11,14,15,18,20];


//let arr2=arr.filter(i=>i>13);
let arr2=arr.filter((i)=>{ if(i>13)
{
return i;
}})

function higher(i)
{
    if(i>13)
    {
        return i;
    }
}

console.log(arr2);
