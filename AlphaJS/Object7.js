
let Profile=
{
    eid:12,
    ename:"abc"
}

//console.log("Original:");
//console.log(Profile);

Object.freeze(Profile);

//console.log("isSealed:",Object.isSealed(Profile));
console.log("isFrozen:",Object.isFrozen(Profile));
Profile.city="Mumbai";
Profile.ename="ijk";

//console.log(Profile);
