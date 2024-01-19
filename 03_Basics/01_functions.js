function myNAme(){
    console.log("R");
    console.log("O");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}

// myNAme()


function sum(x,y){
//  console.log(1+2);
total =  x + y
return total;
}
// console.log(sum(1,2));
sum();

//default argument
function name(myName = "Roshan"){
    return `My name is ${myName}`
}

// console.log(name('Rahul'));


//dont know the number of arguments
function list(a, b, ...c){
    return c;
}
// console.log(list(1,2,3,4,5,6));

function list(...c){
    return c;
}
// console.log(list(1,2,3,4,5,6));


//how to pass object in funtion
myObj = {
    name:'Roshan',
    id:1
}

function info(myData){
//  console.log(`Name is ${myData.name} and ID is ${myData.id}`);
//  console.log(myData.id);
}
// info(myObj)
info({
    name:"Rohit",
    id:45
})

//how to pass array in funtion
myArr = [1,2,3,4,5]

function arrCheck(arrData){
 console.log(`data: ${arrData[0]}`);
}
// arrCheck(myArr);
arrCheck([5,6,7,8,9])