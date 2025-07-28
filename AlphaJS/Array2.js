
// let nums=[1,2,3,4,5,6,7];

//  let result=nums.shift();
//  console.log(result);
 
//  console.log(nums);
 
//  console.log("***************************************");
 
//  let result2=nums.unshift(1,1000,2000); //6->7
//  console.log(result2);
//  console.log(nums);
 
 


function Oddeven(num)
{
if(num%2==0)
{
    console.log(num);
    
}
else
{
    console.log("this was odd number");
    
}
}

// Oddeven(11);
// Oddeven(12);
// Oddeven(100);


let nums=[11,12,15,100,45,60];

nums.forEach(Oddeven);
  //iterattive method
  console.log("********************************************");
  
nums.forEach(Greaterthan);

function Greaterthan(num)
{
      if(num>=15)
      {
        console.log(num);
        
      }
      else{
        console.log("small number");
        
      }
}

function double(num)
{
 console.log(num*2);
 
}
console.log("************************************************");

nums.forEach(double);




