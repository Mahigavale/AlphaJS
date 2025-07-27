




function accountinfro(balance)
{
    let privatebalance=balance;

    
    function deposit(amount)
    {
        privatebalance=privatebalance+amount;

   console.log(privatebalance);
   
     return privatebalance;
        
    }

    function withdraw(amount)
    {  
        if(amount> privatebalance)
        {

            return "insufficient";
        }
        console.log(privatebalance-amount);
        
        return privatebalance-amount;

    }
    return [deposit,withdraw]
}

let [deposit,withdraw]=accountinfro(1000);


deposit(5000);
withdraw(7000);

