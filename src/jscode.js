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

const student = {
    name: "Natali"
}
console.log(student.name)
const newStudent = student
const myFriend = {
    ...newStudent
}
console.log(newStudent)
console.log(myFriend)
const newUser = {
    name: "Daniil"
}
console.log(newUser)
const myFriendName = student.name !== myFriend.name
    ? newUser.name
    : student.name
console.log(myFriendName.name)
// /*Какое значение получит переменная "myFriendName"?*/
// undefined good