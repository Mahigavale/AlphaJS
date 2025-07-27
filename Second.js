


let Profile={};


// Object.defineProperty(Profile, "city", {
//     value:"Pune",
//     enumerable:true,
//     writable:true,
//     configurable:true
// })


// console.log(Profile);

// Profile.city="latur";

// console.log(Profile);

// console.log(delete Profile.city);
// console.log(Profile);




Object.defineProperties(Profile ,{
    City:{
     value:"Pune",
     configurable:true,
     enumerable:true

    },Email:{
        value:"007@gmail.com",
        enumerable:true

    }, Divison:{
        value:"Konkan"
    }
})

let result=Object.getOwnPropertyDescriptor(Profile,"City");

if(result.writable==false)

    {

  Object.defineProperty(Profile, "City",{
    writable:true
  })
console.log(" Writable:",result.writable);

    }




    console.log(Object.getOwnPropertyDescriptor(Profile,"City"));
    
Profile.City="Latur";

console.log(Profile.City);




let all=Object.getOwnPropertyDescriptors(Profile);


console.log(all);
console.log("*******************************************");

console.log(Profile);



let sde=Object.keys(Profile);

console.log(sde);
