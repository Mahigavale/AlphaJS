
let arr=[1,2,3,4,5,6,7,8];

// console.log(arr.__proto__==Array.prototype);
// console.log(arr.__proto__.__proto__==Object.prototype);


Object.prototype.show=function()
{
    console.log("this is the custom function..");
    
}
Object.prototype.num=3564536;

let Profile={
   pincode:"3434",
   getpin:function()
   {
       return this.pincode;
   }
}

let Student=
{
    name:"ABC",
    pincode:"4444"

}


//Student.show();

Student.__proto__=Profile;
// console.log(Student.getpin());
// console.log(Profile.getpin());


//console.log(Profile.__proto__==Object.prototype);


//console.log(Student.pincode);
//console.log(Profile.num);

console.log(Function.prototype.__proto__==Object.prototype);

console.log(typeof(null));


console.log(Function.prototype.__proto__.num);


Function.prototype.display=function()
{
    console.log("custom logic");
    
}

function run()
{
    console.log("running");
    
}

run();
run.display();

