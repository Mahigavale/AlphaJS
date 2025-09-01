

function checkname(...names) //...names=>[]
{
    
     const prom=new Promise((resolve,reject)=>
    {

        setTimeout(() => {
            
            if(names.includes("abc"))
            {
                return resolve("value / user found.")
            }
            return  reject("400:No user found");
        }, 5000);
    })
    return prom;
}


 async function handlename()
{
  
    try{
    let result=  await checkname("abcd","cde","Angelina","Bradd");
  
    console.log(result);
    }
    catch(e)
    {
        console.log("rejected:"+e);
        
    }
    
   
    
}

handlename();