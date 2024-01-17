const mySymb = Symbol('SymbOne');

const myObj = {
    name:"Roshan",
    age:25,
    habbies:['playing cricket','photography'],
    isWorkingProfessional:true,
    favPlayers:{
        cricket:"Sachin",
        football:"Ronaldo",
        chess:"Anand"
    },
    [mySymb]:'SymbTwo',
}
// console.log(myObj);
// console.log(typeof(mySymb));
// Object.freeze(myObj)
// myObj.name = "Rahul",
myObj.greet = function(){
    console.log("Hello world!");
}
myObj.greetTwo = function(){
    console.log(`Hello ${this.name}`);
}
// console.log(myObj.greet());
// console.log(myObj.greetTwo());
// console.log(myObj);

const ob1 = {a:1, b:2}
const ob2 = {c:1, d:2}

// const ob3 = {ob1,ob2}
// console.log(ob3);

// const ob4 = Object.assign({}, ob1, ob2)
const ob5 = {...ob1, ...ob2}
// console.log(ob5);

const user = [
    {
        id:1,
        name:"rohit"
    },
    {
        id:2,
        name:"roshan"
    },
    {
        id:3,
        name:"raghav"
    },
   
]

// console.log(user[2].name);

// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
console.log(Object.entries(myObj));
console.log(myObj.hasOwnProperty("isWorkingProfessional"));
