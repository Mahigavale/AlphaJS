
let city={};
console.log(city);
let city2=
{
    name:"Mumbai",
    pincode:"112233",
    population:"70 lakhs",
    seashore:true
}

let city3=
{
    state:"MH",
    region :"western India",
    businesshub:true,
    seashore:false
}

Object.assign(city,city3,city2);
console.log(city);
