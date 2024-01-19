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
// console.log(Object.entries(myObj));
// console.log(myObj.hasOwnProperty("isWorkingProfessional"));


const emp1 = {
    employeeName:"roshan",
    profile:"developer",
    id:101
}

// console.log(emp1.employeeName);
const {employeeName: ename} = emp1
const {id} = emp1
console.log(ename);
console.log(101);


//API
    //randomuserme
    //json formatter

// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }