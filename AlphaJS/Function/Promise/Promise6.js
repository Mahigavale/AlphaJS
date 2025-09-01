
const prom=new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        let age=21;
    
    if(age>18)
    {
        return resolve("eligible");
    }
    return reject("Error");
    },3000)
})

prom.then((v)=>
{
    console.log("Resolved:",v);
    
}).catch((v)=>
{
    console.log(v);
    
})
console.log(prom);
console.log(("hiii"));
console.log(1+'adjdn'+23);


setTimeout(()=>
{
    console.log(prom);
    

},5000)




const prom2=Promise.resolve("hii");
const prom3=Promise.reject("403");