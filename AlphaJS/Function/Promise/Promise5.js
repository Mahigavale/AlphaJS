

const p1=Promise.resolve("done!");


const p2=Promise.reject("404");


const p3=Promise.reject("403");

Promise.race([p1,p2,p3]).then((v)=>
{
    console.log("resolve:"+v);
    
}).catch((v)=>
{
    console.log("Rejected:"+v);
    
})