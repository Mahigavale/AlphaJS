

  function getage()
  {

    let age=21;

      const prom=new Promise((resolve,reject)=>
    {
        setTimeout(()=>{

            if(age>26)
            {
                return resolve("eligible");
            }
            return reject("unauthorized");
        },3000)
    })

       
    return prom;
  }

  getage().then((v)=>
{
    console.log(v);
    
}).catch((v)=>
{
    console.log(v);
    
})


console.log("******************************");
