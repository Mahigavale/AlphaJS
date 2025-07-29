

let arr=['a','d','f','e','t','u'];


let arr2=arr.filter(check);

console.log(arr2);


function check(letter)
{
 if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u')
 {
    return letter;
 }
}