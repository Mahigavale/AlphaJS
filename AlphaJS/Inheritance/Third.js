


// Function.prototype.show=function()
// {

//     console.log("hiii, hwllo");
    
// }

// function demo()
// {

// }
// demo.show();




let person1=
{
    age:23,
    names:"ABC",
    demo:function ()
    {
        console.log(` ${this.names}, ${this.age} , hiii`);
        
    }
}
person1.demo();

let Person2={
  
}

Person2.__proto__=person1; //Object.setPrototypeOf(Person2,person1);

Person2.__proto__.display=function()
{
    console.log("hi from p2");
    
}


Person2.demo();
Person2.display();