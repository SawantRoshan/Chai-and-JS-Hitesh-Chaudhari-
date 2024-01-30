//filter
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

const filterName = MyArr.filter((item)=>item.name==='Samir');
// console.log(filterName);

const filterAge = MyArr.filter((item)=>{
    return item.Age>=22
})
// console.log(filterAge);

//Map
const nums = [1,2,3,4,5,6,7,8]
const newNums = nums.map((item)=>{
    return item * 10
})
// console.log(newNums);

const chain = nums
                .map((item)=>item*10)
                .map((item)=>item+1)
                .filter((item)=>item>40)

// console.log(chain);

//Reduce function:-
// const nums = [1,2,3,4,5,6,7,8];
const Sum = nums.reduce((acc,curr)=>{
    return acc + curr
},0)

// console.log(Sum);

const MyArr1 = [
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

const ageSum = MyArr1.reduce((acc,item)=>(acc + item.Age),0)
console.log(ageSum);