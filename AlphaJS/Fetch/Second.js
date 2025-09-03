

const prom3=new Promise((resolve,reject)=>
{

    setTimeout(()=>{

        resolve("200 :Ok ")
    },2000)
})


prom3.then((v)=>
{
    console.log("firstv step");
    
    return(v); //return
    
}).then((v)=>
{
    console.log("second step");
    
  return v;
    
})
.then((v)=>
{

    console.log("third step:");
    
console.log(v);
})


.catch((e)=>
{
    console.log(e);
    
})