

let Object_One={
    names:"Abc",
    email:"Abc@gmail.com",
    getnames:function ()
    {
        return this.names;
    }
}
//console.log(Object_One.getnames());

console.log(Object_One);

 console.log(
  delete Object_One.email);

console.log(Object_One);

//to add something

Object_One.city="Pune";

console.log(Object_One);
console.log(Object_One.city);

console.log(Object_One["city"]);

