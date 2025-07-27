
//Closures

function outerdemo()
{
    let city="Pune";
     
    function innerdemo()
    { 
        //Closures=> have the memeory of the variables of the lexical scopes.
     return city;
       
    }

    function innerdemo2(v)
    {
        return(city+v);
        
    }
   
    return innerdemo2;

}

let store=outerdemo();

 let result=store('Abc');
 console.log(result);
 
  
   





//console.log(typeof(store));




