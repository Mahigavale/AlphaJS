

function sum(num1,num2,...arr)
{
    let arrresult=arr.reduce((num1,num2)=>(num1=num1+num2));
    console.log(num1+num2+arrresult);
    
}
sum(10,100,"10",10,20," ","*****");