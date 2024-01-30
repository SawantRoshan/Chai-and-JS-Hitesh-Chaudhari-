//forof(){}
const name = "Roshan Sawnat";
for(const i of name){
    // console.log(i);
}

//Map
const map1 = new Map();
map1.set('a',1);
map1.set('b',2);
map1.set('c',3);
// console.log(map1);
// for (const key of map1) {
//     console.log(key);
// }

for (const [key, value] of map1) {
    // console.log(key, ":-", value);
}


//ForIn loop //for in loop gives keys where as for of loop gives values
const MyObj = {
    k1:1,
    k2:2,
    k3:3
}

for(const key in MyObj){
// console.log(key);
// console.log(MyObj[key]);
// console.log(`${key} :- ${MyObj[key]}`);
}

//foreach loop

const MyArr = [
    {
        name:"Roshan",
        Age:25
    },
    {
        name:"Samir",
        Age:23
    },
    {
        name:"Riya",
        Age:21
    },
];

MyArr.forEach((item) => {
    // return item
    // console.log(item.Age);
});

//foreach loop did not return anything