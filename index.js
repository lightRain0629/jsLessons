// // // class Node {
// // //     constructor(data) {
// // //       this.data = data;
// // //       this.next = null; // Ссылка на следующий узел (изначально null)
// // //     }
// // //   }

// // //   class LinkedList {
// // //     constructor() {
// // //       this.head = null; // Начальный узел (изначально null)
// // //     }

// // //     append(data) {
// // //       const newNode = new Node(data);
// // //       if (!this.head) {
// // //         this.head = newNode;
// // //         return;
// // //       }
// // //       let current = this.head;
// // //       while (current.next) {
// // //         current = current.next;
// // //       }
// // //       current.next = newNode;
// // //     }

// // //     display() {
// // //       let current = this.head;
// // //       while (current) {
// // //         console.log(current.data);
// // //         current = current.next;
// // //       }
// // //     }
// // //   }

// // //   const linkedList = new LinkedList();
// // //   linkedList.append(10);
// // //   linkedList.append(20);
// // //   linkedList.append(30);

// // //   linkedList.display();

// // function squareAllDigits(num) {
// //   let list = num.toString().split("");
// //   resList = [];
// //   for (let index = 0; index < list.length; index++) {
// //     let resDigit = list[index] * list[index];
// //     resList.push(resDigit);
// //   }
// //   return +resList.join("");
// // }

// // function a(n) {
// //   return +n
// //     .toString()
// //     .split("")
// //     .map((e) => {
// //       return e * e;
// //     })
// //     .join("");
// // }

// // function squareDigits(n) {
// //   return +("" + n).replace(/\d/g, (m) => +m * +m);
// // }

// // function countOfVovels(string) {
// //   let res = 0;
// //   string.split("").forEach((e) => {
// //     e.charCodeAt() == 97 ||
// //     e.charCodeAt() == 111 ||
// //     e.charCodeAt() == 117 ||
// //     e.charCodeAt() == 105 ||
// //     e.charCodeAt() == 101
// //       ? res++
// //       : res;
// //   });
// //   return res;
// // }

// // console.log(countOfVovels("abracadabra"));

// // let user = {
// //   name: 'john',
// //   age: 12
// // }
// /**
//  * Documentation
//  */
// class User {
//   constructor(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//   }
// }

// let list = [
//   new User("Jennet", 12, "Manager"),
//   new User("Andrey", 44, "Frontend dev"),
//   new User("Nury", 12, "IT engineer"),
//   new User("Hemra", 33, "Mobile dev"),
//   new User("Agamyrat", 22, "Backend dev"),
//   new User("Vasiliy", 44, "Finance manager"),
//   new User("Chary", 33, "Fullstack dev"),
//   new User("Umyt", 18, "Mobile dev"),
//   new User("Nazar", 18, "Mobile dev"),
// ];

// // class Teacher extends User {
// //   listOfStudents = []
// //   constructor(skills, name, age,){
// //     super(name,age)
// //     this.skills = skills;
// //   }
// //   addStudent(student){
// //     this.listOfStudents.push(student)
// //   }
// //   getStudents(){
// //     return this.listOfStudents;
// //   }
// // }

// // const john = new User('Writin', 'last', 'John', 44, );

// // console.log(john.fullName);

// //! we have array of users we need to group this users by age 12
// // group by job

// function groupByAge(listOfUsers) {
//   let res = new Map();
//   for (user of listOfUsers) {
//     const age = user.age;

//     delete user.age;
//     if (!res[age]) {
//       res[age] = [];
//     }

//     res[age].push(user);
//   }

//   return res;
// }

// function groupByDynamic(listOfUsers, byWhat) {
//   let res = new Map();

//   // for (let i = 0; i < listOfUsers.length; i++) {

//   //    age = listOfUsers[i].age;
//   //    delete listOfUsers[i].age;
//   //   if ( res[age] == undefined) {
//   //     res[age] = []
//   //   } else {
//   //     res[age].push(listOfUsers[i])
//   //   }
//   // };

//   // eval(byWhat.toString());

//   for (user of listOfUsers) {
//     // console.log(user[byWhat.toString()])
//     // const name = eval(`user.${byWhat}`)
//     const name = user[byWhat.toString()];
//     delete name;
//     if (!res[name]) {
//       res[name] = [];
//     }

//     res[name].push(user);
//   }

//   return res;
// }

// // console.log(groupByDynamic(list, 'job'))

// class SoldProducts {
//   constructor(division, date, count) {
//     this.division = division;
//     this.date = date;
//     this.count = count;
//   }
// }

// let soldGoodsList = [
//   new SoldProducts(1, "21.11.23", 12),
//   new SoldProducts(2, "31.01.23", 11),
//   new SoldProducts(3, "01.12.23", 5),
//   new SoldProducts(2, "04.10.23", 22),
//   new SoldProducts(1, "11.08.23", 2),
//   new SoldProducts(2, "22.04.23", 14),
//   new SoldProducts(3, "02.04.23", 150),
// ];

// function groupByDate(list) {
//   return list.reduce((res, index) => {
//     res[index.date] = res[index.date]
//       ? res[index.date] + index.count
//       : index.count;
//     return res;
//   }, {});
// }

// // console.log(groupByDate(soldGoodsList))
// // console.log(groupByDivison(soldGoodsList));

// //! dodelay grupirowku po date i po otdelam

// class Country {
//   constructor(
//     name,
//     flagColors,
//     population,
//     countryType,
//     currency,
//     isDeveloped,
//     square
//   ) {
//     this.name = name;
//     this.flagColors = flagColors;
//     (this.population = population),
//       (this.countryType = countryType),
//       (this.currency = currency);
//     this.isDeveloped = isDeveloped;
//     this.square = square;
//   }
//   // get gdp(){
//   //   return population
//   // }

//   get squareBySoul() {
//     return this.square / this.population;
//   }
// }

// // class Kingdom extends Country{
// //   constructor(name,flagColors,population,monarh) {
// //     super(name,flagColors,population);
// //     this.monarh = monarh
// //   }
// // }

// let russia = new Country(
//   "Russia",
//   ["red", "white", "blue"],
//   2000,
//   "Federaion",
//   "rub",
//   true,
//   10000
// );

// // console.log(russia.squareBySoul);

// function fetchData(url,callBack) {
//   fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((err) => callBack(err));
// }

//  fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));

// fetchData("https://jsonplaceholder.typicode.com/posts",function callBack(err) {
//   console.log(err)
// })



// let a = 2;
// a = 3;
// a = 4;
// console.log(a)


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => response.json())
// .then((json) => {
//   // for (let post of json) {
//   //   document.getElementById('body').innerHTML
//   // }
// })
// .catch((err) => console.log(err));

// console.log('Hello')
// import sub from './sub/functions';
import sub from './sub/functions.js'
console.log(sub)
// console.log(sub(5,1))