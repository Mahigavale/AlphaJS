

function account_holder()
{
    let balance=100000;


    function deposit(v)
    {
    balance=balance+v;
    console.log("updated balance:"+balance);
    
    }

    function withdraw(v)
    {
        if(balance<v)
        {
            console.log("Insufficient balance");
            
        }
        else{
            balance=balance-v;
            console.log("value withdrawn:"+v);
            console.log("remaining balance:"+balance);
            
            
        }
    }

    function returnbalance()
    {
        return balance;
    }

   

    return [deposit,withdraw,returnbalance];
}

  let [deposit,withdraw,returnbalance]=account_holder();

  console.log(returnbalance());
  
deposit(45000);

withdraw(20000);