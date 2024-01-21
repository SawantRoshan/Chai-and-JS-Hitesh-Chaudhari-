//Arrow functions
// console.log(this);
function demo(params) {
    // console.log(this);
    
}
//this keyword in objects and function, arrow function
const myObj ={
    name:'Roshan',
    fun:function(){
        const id = 45;
        // console.log(`Name is ${this.name}, and ID is ${id}`);
        // console.log(`Name is ${this.name}, and ID is ${this.id}`);
    }
}
myObj.fun();


const myfun = function(){
    const sport="cricket";
    // console.log(this.sport);
    // console.log(sport);
}
myfun()

function test(){
    // console.log(this)
}
test();
//arrow function implsite and explisite return
const myFavFun = () =>{
    const a = 10;
    // console.log(a);
    // console.log(this.a);
        
}
myFavFun()

const sum = () =>(1+2)
// console.log(sum());

const sum1 = () =>1+2
// console.log(sum1());

const funObj = () => ({name:'Roshan', age:25})
const funObj1 = () => {name:'Roshan'}
// console.log(funObj());
// console.log(funObj1());