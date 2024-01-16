const myArray = [1,2,3,4,5]
// myArray.push(6);
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.unshift(10);
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

const newArray = new Array('a','b','c','d');
// console.log(newArray.includes('c'));
// console.log(newArray.indexOf('c'));

// slice() VS splice()
//splice takes (1,2) 1,2 and 3 also, and also manipulates original array
const arr = [1,2,3,4,5,6]
// console.log(arr.slice(1,3));
// console.log('arr = ', arr);
// console.log(arr.splice(1,3));
// console.log('arr = ', arr);


// console.log(Array.isArray("Roshan"));
// console.log(Array.from("Roshan"));
// console.log(Array.of("Roshan"));

const Bollywood = ['Hritik', 'Ranvir', 'Amir']
const Tollywood = ['Yash', 'Rajanikant', 'AlluArjun']
// Bollywood.push(Tollywood)
// console.log(Bollywood);

// const AllStars = Bollywood.concat(Tollywood)
// console.log(AllStars);

// AllStars = [...Tollywood, ...Bollywood]
// console.log(AllStars);

const numArr = [1,2,3, [5,6,[9,0],7],4]
console.log(numArr.flat(3))
