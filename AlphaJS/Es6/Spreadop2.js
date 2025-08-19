
let arr=['a','b','c','d'];

let arr2=['e','f','g','h'];
let arr3=[arr,arr2];//nested array=> 2D array
let arr4=[...arr,...arr2,45,5654,345,55456];//=> element spread.
console.log(arr3);
console.log(arr4);

let student=[{
    name:"email",
    city:"323"
},{
    name:"gmail",
    city:"rain"
}]

let student2=[...student,{demo:"abc"}];
console.log(student2);
