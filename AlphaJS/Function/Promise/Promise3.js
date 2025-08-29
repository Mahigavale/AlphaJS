
const Prom1=Promise.resolve(100);

const p2=Promise.resolve(1500);

const p3=Promise.reject("Unauthorized");

Promise.all([Prom1,p2,p3]).then((v)=>
{
    console.log(v);
    
}).catch((v)=>
{
    console.log(v);
    
})

setTimeout(()=>{

Promise.allSettled([p3,p2,Prom1]).then((v)=>
{
   console.log(v);
}) },2000);
