
//Window => Root => Global


 city="Kothrud";


 
 setTimeout(()=>{

//     window.close();
 }, 3000);

// console.log(window.screen);
 

 function changevalue()
 {
   window.document.getElementById("demo").innerHTML="Hellooo";
 }
    


 function popups()
 {
let v= window.alert("Helloooo");


 let valu=window.prompt("please enter the age:")

 console.log("prompt :",valu);


 if(valu>18)
 {
    window.alert("eligible")
 }
 else{
    alert("Ineligible");
 }

 
  let result=window.confirm("are you a able to relocate ?")


  console.log("Confirm Result:",result);
  
 
 }

 popups();