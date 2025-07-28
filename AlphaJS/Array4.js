

let nums=[11,13,21,25,67,89,93,96,98,103];

//num+15 >100.

let nums2=nums.filter(higher)

function higher(num)
{
 if(num+15>100)
 {
    return num;
 }
}

console.log(nums2);
