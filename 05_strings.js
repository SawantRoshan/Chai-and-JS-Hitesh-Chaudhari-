const name = "Roshan";
const greet = "Hello";

// console.log(`${greet} ${name.toUpperCase()}! How are you?`);

const gameName = new String('Mario');
// console.log(gameName.__proto__);

const sim1 = Symbol("R")
const sim2 = Symbol("R")
// console.log(sim1 === sim2);

// console.log(Symbol.keyFor(sim1) === Symbol.keyFor(sim2)); // This would log true


console.log(gameName.substring(-3,10));
console.log(gameName.slice(-2,14));