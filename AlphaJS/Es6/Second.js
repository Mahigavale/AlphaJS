
let Profile=
{
    names:"abc",
    email:"abc@gmail.com",
    age:34
}

//console.log(Object.getOwnPropertyNames(Profile));

// console.log(Profile.names);
// console.log(Profile["names"]);



let {names,age,email,city="pune"}=Profile;
console.log(names+" "+age+" "+email);
console.log(city);

console.log(Profile);
