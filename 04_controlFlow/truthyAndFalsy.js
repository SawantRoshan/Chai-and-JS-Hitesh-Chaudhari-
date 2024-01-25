// Falsy values in js:- 
// '', 0, -0, BigInt 0n,  false, Null, Undefined, NAN

//Some confusing Truthy values in js:- ' ', '0', 'false', [], {}, function(){},


//how to check empty ibject
myObj={}
if (Object.keys(myObj).length===0) {
    // console.log("Empty Object");
}

// nullish colescing operator (??): null undefined

// const var1 = null ?? 10;
// const var1 = null ?? undefined;
// const var1 = undefined ?? null;
// const var1 = undefined ?? 10;
// const var1 = undefined ?? '10';
// const var1 = '10' ?? undefined;
// console.log(var1);

//Ternerry operator
// condition?trueValue:falseValue
const name="Roshan"
name==="Roshan"?console.log(`I am ${name}`):console.log(`I am not ${name}`);