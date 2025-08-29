
const p1=Promise.resolve("hii");

const p2=Promise.resolve("demo");

const p3=Promise.reject("are re");

const p4=Promise.reject("yes");


Promise.any([p3,p4]).then((v)=>
{
    console.log(v);
    
}).catch((v)=>
{
    console.log(v);
    
})