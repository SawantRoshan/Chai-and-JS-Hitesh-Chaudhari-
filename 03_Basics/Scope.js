// var, let, const
//var(global scope) //let and const (local or block scope)
if(true){
    const c=30;
    let b=20;
    var a =10;
}

//  console.log(a);
//  console.log(c);
//  console.log(b);

 //nested functions and scope
 function outer(){
    const name="Roshan"

    function inner(params) {
        const nickname = "RS"
        // console.log(name);
    }

    inner();
    // console.log(nickname);
 }
 outer();


 //nested if and scope
 if (true) {
    const name="Roshan"
    if (name==="Roshan") {
        const nickname = "RS"
        // console.log(name);
    } 
    // console.log(nickname);
 }


 //normal function vs function expression

 console.log(normalFunction());
 function normalFunction(params) {
    return 1+2;
 }

 console.log(funExp());
 let funExp = function functionExpression(params) {
    return 1+2+3;
 }
