
// Array => 

    // var student1="A";
    // var student2="B";
    // var student5="E";

    // var students=["A","B","E",34,null,undefined,35.45,"ABCDEFG"]; //3 0,1,2

    // //console.log(students[0]);
    // //console.log(students[3]);
    // //
    
    // console.log(students.length);
    // console.log(students[7]);
    
    
    // function Demo()
    // {
    // console.log("hii");
    // console.log("we are developers....");
    // console.log("we are going to build the next TEch giant;");
    // }
    

    
   
    // Demo();
    // Demo();
    // Demo();
    // Demo();
    
    

    function Demo(){
    var num1=10;
    var num2=20;
    var num3=30;
    var num4=40;
    console.log(num1+num2);
    console.log(num2+num3);
    console.log(num3+num4);
    console.log(num4+num1);
    }

    // Demo();
    // Demo();
    // Demo();
    // Demo();


    function Add(num1=10,num2=10,num3=10)     //parameters || arguments
    {

        console.log(num1+num2+num3); //10+10+10 default values.
        
    }
    
    Add(); //NAN
    Add(10,20);//NAN
    Add(100,100);//NAN
    Add("hi","hello",100);//Undefined
    Add('*','*');
    Add("A",45);//AUndefined
    Add(45,"A");//45undefined

    console.log("A"-"B");
    console.log("A"*"B");
    console.log("A"/"B");
    
    
    
    
    