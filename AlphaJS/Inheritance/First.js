

let arr="STRING"; //ARRAY =>Inherit.

arr.__proto__
function display()
{
    window.alert("hiii");
}
console.log("i am in browser");

// __proto__ =>instance
//prototype =>root Object.
console.log(arr.__proto__.__proto__===Object.prototype);
let str=[10,20,30,40];

console.log(str.__proto__.__proto__===arr.__proto__.__proto__);
