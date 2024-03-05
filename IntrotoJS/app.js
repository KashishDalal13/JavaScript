// variabels => var,let,const
// var email = 'kk@gmail.com';
// console.log(email)

// datatypes => strings,numbers,boolean,objects,arrays
// strings
// let names = 'kk'
// console.log(names)
// console.log(typeof names)

// numbers
// let age = 20.45
// console.log(age)
// console.log(typeof age)

//boolean
// let aliveuser = false
// console.log(typeof aliveuser)

// ---------------------------

// arrays => basics
// let list = ['bread','butter','milk',10,true]
// console.log(list)
// console.log(typeof list)

// -------------------------------------

// objects => basics [key-value pairs]
// let user = {
//     name: 'kk',
//     email: 'kk@gmail.com',
//     city: 'surat',
//     cno: '435435'
// }
// console.log(user)
// console.log(typeof user)

// --------------------------------------

// advance arrays and objects methods
// conditions => if and else

// let items = ['bread','butter','milk']
// console.log(items)
// items.push('coffee') //to add item in array at last
// items.pop() // to remove last item from array
// items[0] = 'sugar' // to add any item at specific postion

// splice => index number, how much to delete, add new items
// items.splice(1,0,'apple','cookies')
// console.log(items)
// console.log(items)

// ---------------------------------------
 
// objects

// let user = {
//         name: 'kk',
//         email: 'kk@gmail.com',
//         city: 'surat',
//         cno: '435435',
//         hobbies: ['reading','coding']
//     }
// user.salary = 4000
// delete user.cno
// console.log(user.hobbies[0])
// console.log(user.cno) //access specific value using key

// let users = [
//     {name: 'kk',email: 'kk@gmail.com'},
//     {name: 'ss',email: 'ss@gmail.com'},
//     {name: 'cc',email: 'cc@gmail.com'},
//     {name: 'mm',email: 'mm@gmail.com'},
//     {name: 'll',email: 'll@gmail.com'},
// ]
// console.log(users[1].email)
// console.log(users.length)

// --------------------------------------

// conditionals

// let age = 71
// if(age > 18)
// {
//     console.log('You can vote')
// }
// else{
//     console.log('No cant vote')
// }

// let names = 'kk'
// if(names == 'kk')
// {
//     console.log("Hello",names)
// }

// Ternary operator
let age = 12
age>18 ? console.log('eligible') : console.log('not eligible')