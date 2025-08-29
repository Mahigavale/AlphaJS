
const Prom=new Promise((res,rej)=>
{

   setTimeout(()=>{
    
     let age=41;
    if(age>40)
    {
         res(100);
    }
    rej("error with care");

   },2000)
})




Prom.then((v)=>
{
    console.log(v);
    
}).catch((e)=>
{
    console.log(e);
    
}).finally(()=>
{
    console.log("done");
    
})

setTimeout(() => {
    console.log(Prom);
    
}, 3000);




console.log("I am simple");
