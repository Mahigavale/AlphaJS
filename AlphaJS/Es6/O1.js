

const Student=
{
    name:"Abc",
    email:"Abc@gmail.com",
    mobile:"1234567890",
    marks:23
}
console.log(Student.marks);
console.log(Student["marks"]);


let{name,marks,email,mobile,city="Pune"}=Student;

console.log(marks);
console.log(city);
console.log(Student);

