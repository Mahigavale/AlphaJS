


var car="BMW";

let carname="Audi";

function printcar()
{
    var car="Mercedese";
    
    let carname="Mustang";
    console.log("functional:",car);
    console.log("functional:",carname);

    if(true)
    {
        let carname="Safari"
        let carname="Wagonr";
        console.log(carname);
        
;
       if(true) {
        }
        console.log("block:",carname);
        
    }
    console.log("functional:",carname);
    
    
    
}
printcar();
console.log("global:",car);
console.log("global:",carname);

