

const obj=
{
    city:"Mumbai",
    pin:"110022",
    state:"Maharashtra",
    mobile:"12345677",
    population:"112372972"
}


obj["city"]="Pune";

// obj={
//     country:"India"
// }

//console.log(obj);


 for(let v in obj)
 {
    console.log(v);
    
 }
 console.log('**************************');
 
 for(let v of obj)
 {
    console.log(v);
    
 }


