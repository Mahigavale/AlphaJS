//money >100 =>rich.
//money <100 => poor.
//money==100  =>middle class.

var money=100;
//<100=>A
//100-200 =>B
//200-300 =>C
//300-400=>D
//>400=>E

var money=400;
if(money<=100)
{
    console.log("A");
    
}
else if(money>100 && money<200)  //false
{
    console.log("B");
    
}
else if(money>200 && money <300)
{
    console.log("C");
    
}
else if(money>300 && money<=400 )
{
    console.log("D");
    
}
else{
    console.log("E");
    
}
