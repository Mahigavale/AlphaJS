


 async function fetchdata()
{
    const data= await fetch("http://localhost:8080/Student/getstudents");
    const response= await data.json();

     let arr=new Array(500);
    arr=response;

     let arr2=arr.filter((v)=>
    {
        if(v.id>990)
        {
            return v;
        }
    })
    
    console.log(arr2);
    
    

}

fetchdata();

//fetchdata();


// fetch("http://localhost:8080/Student/getstudents").then((Response)=>
// {
//     return Response.json()
    
// }).then((v)=>
// {
//     console.log(v);
    
// })
// .catch((err)=>
// {
//     console.log(err);
    
// })
