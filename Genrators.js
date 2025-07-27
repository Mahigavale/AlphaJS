
function* genr()
{
    yield 1;
    yield 2;
    yield 3;


}
let gen2=genr();
console.log(gen2.next().value,gen2.next().done)
//console.log(gen2.next().done); //{value:1, done:false}
//console.log(gen2.next().done);
console.log(gen2.next());
console.log(gen2.next());


