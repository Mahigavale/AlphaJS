


function outer(v)
{
 //lexical scope

    function inner()
    {
        console.log(v*2);
        
    }

    return inner;
}

let outerdemo=outer(10); ///

outerdemo();