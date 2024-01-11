const name = "Roshan";
let age = 25;
let occupation = "Software Engineer";
const city = Symbol("Pune");
const myCity = Symbol("Pune");
console.log(city===myCity);

const bigNumber = 1232456868686n
console.log(typeof bigNumber);


//NonPRimitive data types

const sports = ['cricket', 'football', 'hokey', 'chase']
console.log(sports);

const emp = {
    empName:'Roshan',
    empID:101,
    empRole:'Developer'
}
console.log(emp);

const myFunction = function(){
    console.log("Hello MyFunction!");
}
console.log(myFunction);
console.log(myFunction());