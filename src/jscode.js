// const user = {
//     name: "Liza",
//     age: 67
// }
// const copyUser = {...user}
// user.name = "Margo"
// console.log(copyUser.name)
// /*Чему равно copyUser.name после выполнения этого кода?*/
// "Liza" good

// const client = {
//     name: "Leo",
//     age: 44,
//     friends: ["Vladimir", "Maxim", "Leonid"]
// }
// const updatedClient = {...client}
// updatedClient.friends.push("Michail")
// console.log(client.friends[3])
/*Какое значение будет выведено в консоль?*/
// "Michail" good

// const student = {
//     name: "Vladislav",
//     age: 22
// }
// const copyStudent = student
//
// student.age = 92
// /*Чему равно значение copyStudent.age после выполнения этого кода?*/
// 92 good

// const student = {
//     name: "Natali"
// }
// console.log(student.name)
// const newStudent = student
// const myFriend = {
//     ...newStudent
// }
// console.log(newStudent)
// console.log(myFriend)
// const newUser = {
//     name: "Daniil"
// }
// console.log(newUser)
// const myFriendName = student.name !== myFriend.name
//     ? newUser.name
//     : student.name
// console.log(myFriendName.name)
// /*Какое значение получит переменная "myFriendName"?*/
// undefined good

// const humanYearsCatYearsDogYears = (humanYears) => {
//     let catYears = 0;
//     let dogYears = 0;
//
//     for (let i = 1; i <= humanYears; i = i + 1) {
//         if (i === 1) {
//             catYears = catYears + 15;
//             dogYears = dogYears + 15;
//         } else if (i === 2) {
//             catYears = catYears + 9;
//             dogYears = dogYears + 9;
//         } else {
//             catYears = catYears + 4;
//             dogYears = dogYears + 5;
//         }
//     }
//     return [humanYears, catYears, dogYears];
// }
// console.log(humanYearsCatYearsDogYears(8))

// function find(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) return i;
//   }
//   return "Not found";
// }
// const find = (array, element) => array.indexOf(element) < 0 ? "Not found" : array.indexOf(element)
// console.log(find([1, 2, 3, 4, 5, 6], 5))


//4
// const name = "Svetlana"
// const student = {
//     [name]: name
// }
// const number = student["name"]
//     ? 0.30
//     : 60.87
// /*Какое значение получит переменная number?*/
// console.log(number)
//60.87 false

// const {community} = {
//     community: 64
// }
// const multiply = community * 70.75
// const randomValue = multiply && "Natali" && "Maxim"
/* Какое значение получит переменная randomValue ? */
// console.log(randomValue)
// "Maxim" потому что всё true

// const clothes = {
//     name: "Artur",
//     scores: 15
// }
// const client = {
//     ...clothes, scores: clothes.scores++
// }
// const scores = client.scores
// Какое значение получит переменная scores?
// console.log(scores)
// 15 good

// let result = 0
// for (let i = 0; i < 5; i++) {
//     if (i % 2) {
//         result += i
//     }
// }
// const studentName = (result - 4)
//     ? "Konstantin"
//     : "Konstantin"
/* Какое значение получит переменная studentName? */
// console.log(studentName)
// "Konstantin" good

