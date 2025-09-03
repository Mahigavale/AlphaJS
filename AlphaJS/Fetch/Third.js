

   const prom=fetch("https://dummyjson.com/todos");


   prom.then((v)=>
{
  return v.json();
    
}).then((v)=>
{
    //console.log(v);
    /**{todos:[1,2,3,4],
     * 'skip: 34, 
     * limit:  67   }
     */
    
    let alela_data=new Array(v.todos);

    alela_data.forEach((i)=>
{
    
    i.forEach((j)=>
    {
        if(j.completed==true){
        console.log(j);
        console.log("***************************************");
        
        }
        else{
            console.log("status false;;");
            
        }
    })
    
})
   // console.log(alela_data);
    
})
.catch((e)=>
{
    console.log(e);
    
})


// let response=
// {
//     todos:[
//         {
//       id:1,
//       name:"Aishwarya Rai"
//         },
//         {
//       id:2,
//       name:"Peter John"
//         }
//     ],
//     skip:"ok",
//     limit:30,
//     total:254
// }

// let arr=response.todo;

// arr.forEach((i)=>
// {
//     console.log(i);
    
// })