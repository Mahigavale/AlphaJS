



function add()
{
    return {
        a:5,
        b:10,
        c:function ()
        {
            return a+b;
            
        }
    }
}

let {a,b,c}=add();
console.log(a);
console.log(b);

console.log(c());


function minus(b=10,c=15)
{

    console.log(c-b);
    
}
minus(20,30);







