

//array of ages=>[18,21,34]
function validate(...values)
{
    let arr=values;
    // const promise_one=new Promise((resolve,reject)=>
    // {
    //          setTimeout(()=>
    //         {
    //          if(arr[0]>18)
    //          {
    //             resolve("passed...")
    //          }
    //          reject("not eligible");
    //         },1500)
    // })
    // const promise_two=new Promise((resolve,reject)=>
    // {
    //          setTimeout(()=>
    //         {
    //          if(arr[1]>30)
    //          {
    //             resolve("passed...")
    //          }
    //          reject("not eligible");
    //         },1500)
    // })
    // const promise_three=new Promise((resolve,reject)=>
    // {
    //          setTimeout(()=>
    //         {
    //          if(arr[2]>18)
    //          {
    //             resolve("passed...")
    //          }
    //          reject("not eligible");
    //         },5000)
    // })

//   return Promise.all([promise_one,promise_two,promise_three]);

    //  let result=arr.map((age)=>
    //     {
    //           return age>18;
    //     })
 
    //     console.log(result);
        

        const prom=new Promise((resolve,reject)=>
        {
            setTimeout(() => {
             
            //  let result=   arr.every((i)=>
            //        {
            //         return i>18}
            //     )
   let result=arr.map((i)=>
{
    return i>18;
})
                 console.log(result);
                 

                if(result.includes(false))
                {
                    reject("please do not enter..")
                }
                resolve("ya ya ya")
        },1500)
    });
    

        return prom;
}


validate(19,23,45,19,89).then((v)=>
{
    console.log(v);
    
}).catch((e)=>

{
    console.log(e);
    
})