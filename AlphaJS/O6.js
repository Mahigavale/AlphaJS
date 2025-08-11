let user=
{
    name:"abc",
    email:"abc@gmail.com",
    mobile:"123456789",
    city:"Pune",
    getmobile: function()
    {
        console.log(this.mobile);
        
    }
}

console.log("Original:");

console.log(user);

Object.seal(user);
user.divison="Mumbai";
user.credit=true;
console.log("Modified:");

console.log(user);
user.city="Mumbai";

console.log(user);


user.getmobile();
