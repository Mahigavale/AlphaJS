

async  function fetchdata()
{
    const data= await fetch("http://localhost:8080/Student/getstudents");

    console.log(data.json());
    
}
fetchdata();