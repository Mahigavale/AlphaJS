
// function sum(a,b)
// {
//    console.log(a+b);
// }
// function sum2(a,b,c)
// {
//    console.log(a+b+c);
// }
// sum(10,20)
// sum2(10,20,30)
// sum(10,10,100);



function sum(a,b,c,...arr)
{
    let sum=  arr.reduce((num1,num2)=>
    {
        return num1=num1+num2;
     })

     console.log(a+b+c+sum);
     
}

sum(10,20,100,100,"100");



let arr=['a','b','c','d'];

arr.splice(1,1,"abc","cde","edf","frnf","efkn"); //rest Op at the work.
console.log(arr);
