// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>
//     const usersList = (users.length === 0)
//         ? <p>List is empty</p>
//         : <ul>
//             {users.map(getUser)}
//         </ul>
//     return (
//         <main>
//             <button onClick={() => setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//             {usersList}
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?
// users.length good


// import React, { ChangeEvent, useState } from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// const MIN_COMMENT_SIZE = 5
// function LongCommentChecker() {
//     const [comment, setComment] = useState<string>('')
//     const isCommentReady = comment.length > MIN_COMMENT_SIZE
//     const onClickSendComment = () => {
//         if (isCommentReady) {
//             setComment('')
//         }
//     }
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         const newComment = e.currentTarget.value
//         setComment(newComment)
//     }
//     return (
//         <main>
//             <textarea
//                 placeholder={'Your comment must have more than 5 charters'}
//                 value={comment}
//                 onChange={onChangeHandler}
//             />
//             <div>
//                 <button
//                     disabled={!isCommentReady}
//                     onClick={onClickSendComment}>
//                     Send comment
//                 </button>
//             </div>
//         </main>
//     )
// }
// ReactDOM.render(<LongCommentChecker/>, document.getElementById('root'))
// !isCommentReady good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function PasswordChecker() {
//     const [password, setPassword] = useState<string>("")
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={e => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}
//         </main>
//     )
// }
// ReactDOM.render(
//     <PasswordChecker/>, document.getElementById('root')
// );
// // Что надо вставить вместо XXX, чтобы код работал нормально?
// password.length good

// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function ColorButton() {
//     const [isColored, setIsColored] = useState<boolean>(false)
//     return (
//         <button
//             style={{ backgroundColor: `${ isColored === true ? "red": ""}`}}
//             onClick={()=>setIsColored(true)}
//         >
//             Меняю цвет по клику
//         </button>
//     )
// }
// ReactDOM.render(
//     <ColorButton/>, document.getElementById('root')
// );
// // Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?
// isColored good

// import React, {ChangeEvent, useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function Colorize() {
//     const [color, setColor] = useState<string>("black")
//     const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"]
//     const styles = {
//         width: "100px",
//         height: "100px",
//         borderRadius: "50%",
//         backgroundColor: "black"
//     }
//     const getColor = (colors: string[]) => {
//         const nextColor = colors[Math.floor(Math.random() * colors.length)]
//         return nextColor
//     }
//     return (
//         <main>
//             <div style={{...styles, backgroundColor: color}}/>
//             <div>
//                 <button
//                     onClick={() => setColor(getColor(colors))}
//                 >
//                     Get random color
//                 </button>
//             </div>
//         </main>
//     )
// }
// ReactDOM.render(
//     <Colorize/>, document.getElementById('root')
// );
// // Что надо вставить вместо XXX, чтобы круг менял цвет по клику?
// getColor(colors) good

// import React, { ChangeEvent, useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// type UserType = {
//     id: number
//     name: string
//     personalData: PersonalDataType
// }
// type PersonalDataType = {
//     gender: string
//     age: number
//     technologies: Array<TechnologiesType>
// }
// type TechnologiesType = 'HTML' | 'CSS' | 'React' | 'JS/TS' | 'Redux'
// function UsersList() {
//     const [users, setUsers] = useState<Array<UserType>>([
//         {
//             id: 1,
//             name: 'Bob',
//             personalData: {
//                 gender: 'male',
//                 age: 23,
//                 technologies: ['HTML', 'CSS', 'React', 'JS/TS', 'Redux']
//             }
//         },
//         {
//             id: 2,
//             name: 'Alex',
//             personalData: {
//                 gender: 'male',
//                 age: 21,
//                 technologies: ['HTML', 'CSS', 'React']
//             }
//         },
//         {
//             id: 3,
//             name: 'Ann',
//             personalData: {
//                 gender: 'female',
//                 age: 26,
//                 technologies: ['HTML', 'CSS', 'JS/TS']
//             }
//         },
//         {
//             id: 4,
//             name: 'Helen',
//             personalData: {
//                 gender: 'female',
//                 age: 31,
//                 technologies: ['HTML', 'CSS']
//             }
//         },
//         {
//             id: 5,
//             name: 'Donald',
//             personalData: {
//                 gender: 'male',
//                 age: 28,
//                 technologies: ['React', 'JS/TS', 'Redux']
//             }
//         },
//     ])
//     return <ul>
//         {users.map(u => {
//             return (
//                 u.personalData.technologies.length >= 5
//                     ? <li key={u.id}>
//                         {`User ${u.name}. ${u.personalData.age}. Ready to work.`}
//                     </li>
//                     : <li key={u.id}>
//                         {`User ${u.name}. ${u.personalData.age}. `}
//                     </li>)
//         })}
//     </ul>
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Те пользователи, у которых в стэке пять и более технологий, должны в списке
// // быть отмечены, как готовые к работе.
// // Что надо вставить вместо XXX, чтобы код работал нормально?
// personalData.technologies good


//4
// type ActionType = {
//     type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP"
//     payload: number
// }
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
//Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?
// console.log(calculator(10, {type: "MULT", payload: 2}))
// 10 good

// type UserType = {
//     id: number
//     userName: string
//     email: string
//     password: string
// }
// type ChangeUserPasswordTypeAT = {
//     type: "CHANGE-USER-PASSWORD"
//     payload: {
//         id: number,
//         newPassword: string
//     }
// }
// export const userReducer =
//     (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
//         switch (action.type) {
//             case "CHANGE-USER-PASSWORD":
//                 return state.map(u =>
//                     u.id === action.payload.id
//                         ? {...u, password: action.payload.newPassword}
//                         : u)
//             default:
//                 return state
//         }
//     }
//Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
//В ответе напишите через пробел: XXX  YYY
// id: number, newPassword: string good

// type ActionType = {
//     type: "SUM" | "SUB" | "MULT" | "DIV"
//     payload: number
// }
// export const calculator = (state: number, action: ActionType) => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         default:
//             return state
//     }
// }
//Что надо написать вместо ХХХ, чтобы функция calculator работала?
// action.type good

// type ActionType = {
//     type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP"
//     payload: number
// }
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
// const result = calculator(10, {type: 'EXP', payload: 0})
// if (!(result - 1)) {
//     console.log("IT-INCUBATOR")
// }
//Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
// type: 'EXP' good повезло

// type ActionType = {
//     type: "SUM" | "SUB" | "MULT" | "DIV"
//     payload: number
// }
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         default:
//             return state
//     }
// }
//Обработка какого action.type не предусмотрена в функции calculator?
// "MULT" good

// type ActionType = {
//     type: "SUM" | "SUB" | "MULT" | "DIV"
//     payload: number
// }
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         default:
//             return state
//     }
// }
// const result = calculator(10, {type: 'SUB', payload: 5})
// console.log(result)
//Что надо написать вместо XXX, что бы переменная result содержала значение 5?
// type: 'SUB' good

//finish 2sprint
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function PasswordChecker() {
//     const [password, setPassword] = useState<string>("")
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={e => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}
//         </main>
//     )
// }
//
// ReactDOM.render(
//     <PasswordChecker/>, document.getElementById('root')
// );
// Что надо вставить вместо XXX, чтобы код работал нормально?
// password.length good

// type StudentType = {
//     id: number
//     name: string
// }
// type FriendsType = {
//     [key: string]: Array<string>
// }
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут:  friends[3][1]?
// console.log(friends[3][1])
// "Michael" good

// type StudentType = {
//     id: number
//     name: string
// }
// type FriendsType = {
//     [key: string]: Array<string>
// }
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
// const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
//     const result: Array<string> = []
//     friends[st_1.id].forEach(f => friends[st_2.id].includes(f)? result.push(f): null)
//     return result
// }
//Дан массив студентов и структура,
//которая содержит список друзей каждого из студентов.
// Так же дана функция  getMutualFriends, проверяющая наличие общих друзей
// у двух выбранных студентов.
//Функция принимает параметром два объекта типа StudentType
// и возвращает массив с именами общих друзей,
//если они есть и пустой массив, если таковых нету.
// Что надо написать вместо ххх, чтобы функция работала?
// st_2.id good

// type StudentType = {
//     id: number
//     name: string
// }
// type FriendsType = {
//     [key: string]: Array<String>
// }
// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]
// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }
//Дан список студентов и структура,
//которая содержит список друзей каждого из студентов.
//Id студента является ключом к массиву его друзей.
//Какое значение лежит тут: friends[students[0].id][3]?
// console.log(friends[students[0].id][3])
// undefined good

type UserType = {
    id: number
    userName: string
    email: string
    password: string
}
type ChangeUserPasswordTypeAT = {
    type: "CHANGE-USER-PASSWORD"
    payload: {
        id: number,
        newPassword: string,
    }
}
export const userReducer =
    (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
        switch (action.type) {
            case "CHANGE-USER-PASSWORD":
                return state.map(u =>
                    u.id === action.payload.id
                        ? {...u, password: action.payload.newPassword}
                        : u)
            default:
                return state
        }
    }
//Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
//В ответе напишите через пробел: XXX  YYY
// id: number newPassword: string good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>
//     const usersList = (users.length === 0)
//         ? <p>List is empty</p>
//         :  <ul>
//             { users.map(getUser)}
//         </ul>
//     return (
//         <main>
//             <button onClick={()=>setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//             {usersList}
//         </main>
//     )
// }
// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?
// users.length good

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
// function ColorButton() {
//     const [isColored, setIsColored] = useState<boolean>(false)
//     return (
//         <button
//             style={{backgroundColor: `${isColored === true ? "red" : ""}`}}
//             onClick={() => setIsColored(true)}
//         >
//             Меняю цвет по клику
//         </button>
//     )
// }
//
// ReactDOM.render(
//     <ColorButton/>, document.getElementById('root')
// );
// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?
// isColored good

// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }
// type AddressType = {
//     country: string
//     city: string
//     email: string
// }
// type AdressesType = {
//     [userID: string]: AddressType
// }
// const users: Array<UserType> = [
//     {id: 1, name: "Bob", status: "online"},
//     {id: 2, name: "Alex", status: "offline"},
//     {id: 3, name: "Ann", status: "offline"},
// ]
// const addresses: AdressesType = {
//     1: {country: "Russia", city: "Moscow", email: "hey@email.com"},
//     2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},
//     3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},
// }
// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//     return {...addresses,
//         [userID]: {...addresses[userID], [key]: newValue}
//     }
// }
// Дан список пользователей и структура, хранящая адреса пользователей.
// Так же дана функция updateUserAddress,
// которая обновляет указанное в параметрах поле в адресе пользователя.
// Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// Что надо написать вместо ххх, чтобы функция работала корректно?
// userID good