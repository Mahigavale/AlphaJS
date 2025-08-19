
let obj=
{
    name:"Kauthe",
    email:"k@gmail.com",
    city:"pune",
    pin:"411053",
    degree:"Btech"
};

let{name,email,...obj2}=obj; //rest=>Collect rest of the properties.
console.log(name);
console.log(email);
console.log(obj2);

let ob3={...obj2}; //spread