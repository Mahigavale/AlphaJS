

 function  *Counter()
 {
     yield 1; // {value:1, done:false}
     yield 2; //{value:2,done:false }
     yield 3;
     return 4;  //{value:4, done:false}
                 //value:undefined, done:true
 } 
       let obj=Counter(); //call the generator function for execution it will return the Generator Object which has  the next method.
       

       console.log(obj.next());
       console.log(obj.next());
       console.log(obj.next());
       console.log(obj.next());
      // console.log(obj.next());
       
       
       console.log("***************************************************************");
       

      function *CO()
      {
        for(let i=0;i<30;i++)
        {
           
            if(i==20)
            {
                return i;
            }
            yield i;
        }
      }

      const ob2=CO();

      for(let i=0;i<40;i++)
      {
        console.log(ob2.next());
        
      }