import 'dart:async';

void main(List<String> args) {

  setTimeout( (){print(2);}, 2);


  durationFuc();
}

  setTimeout(callback, time) {
    Duration timeDelay = Duration(milliseconds: time);
    return Timer(timeDelay, callback);
  }


Future durationFuc() async {
  print(1);
  print(2);
  print(3);
  await Duration(seconds: 2);
  print(4);
  print(5);
}

// class User {
//   final String name;
//   final int age;
//   final dynamic job;
//   User({ 
//     required this.name,
//     required this.age,
//     required this.job
//   });
// }


// List <User> testUsers = [
//   User(name: 'Jennet' , age: 12, job: 'Manager'),
//   User(name: 'Aman' , age: 23, job: 'dev Css'),
//   User(name: 'Nury' , age: 12, job: 'It engineer'),
//   User(name: 'Umyt' , age: 18, job: 'Flutter dev'),
//   User(name: 'Umyt' , age: 18, job: 'Flutter dev'),
//   User(name: 'Agamyrat' , age: 44, job: 'Backend dev'),
//   User(name: 'Vasiliy' , age: 44, job: 'Finance manager'),
// ];

// sortByAge(List listOfUsers){
//   Map <int,List<User>> res = {};

//   // listOfUsers.forEach((element) => res.addAll({
//   //   element.age : [element]
//   // }));
//   for (var i = 0; i < listOfUsers.length; i++) {
//    res.addAll({
//     listOfUsers[i].age : []
//    });
//   }
//   for (var i = 0; i < listOfUsers.length; i++) {
//     res[listOfUsers[i].age]!.add(listOfUsers[i]);
//   }
//   return res;
// }



