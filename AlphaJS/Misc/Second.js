

function  counter()
{
    let num=1;


    function demo()
    {
        console.log(num++);
    }
    return demo;
}

let inner=counter();
inner();
inner();
inner();


