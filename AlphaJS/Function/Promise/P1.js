

const prom=new Promise((resolve,reject)=>
{

    let num=100;
    setTimeout(()=>
    {

        if(num>180)
        {
            resolve("Sucess");
        }

        reject("failure");
    },1500)
})

prom.then((v)=>v).then((v)=>
{
    console.log(v);
    
}).then((e)=>e).then((e)=>
{
    console.log(e);
    
}).catch((C)=>{
    console.log(C);
    
})

console.log(prom);
