

function accountcreation(amount){

    let bankbalance=amount;

    function deposit(deposited)
    {
         bankbalance=bankbalance+deposited;

         return bankbalance;
    }
   
    function withdraw(cash)
    {
        
        if(cash>bankbalance)
            {
                
                //console.log("balance:",bankbalance,"trying:",cash);
                
                return "insufficent balance;";
            }
            else{
                bankbalance=bankbalance-cash;
                return bankbalance;
        }
    }
         function getbalance()

         {
            return bankbalance;
         }

    return[ deposit,withdraw, getbalance];
}

let  [depositmoney, withdrawmoney, getbalance]=accountcreation(15000);

let today=depositmoney(5000);

console.log(today);

// let withdraw=withdrawmoney(25000);
// console.log(withdraw);




console.log("************************getting bank balance*********************");


console.log(getbalance());
