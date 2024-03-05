// functions

// function grinder(items)
// {
//     console.log('grinding...',items)
// }
// grinder('tomatoes')
// grinder('onions')

// add two numbers

// let sum;                 | function add(n1,n2)
// function add(n1,n2)      | {
// {                        |   let sum = n1+n2
//     sum = n1+n2          |   return sum
//     return sum           | }
// }                        | let res = add(2,3)
// add(2,3)                 | console.log(res)
// console.log(sum)         | 

// -------------------------------------------

function joined()
{
    let title = document.getElementById('title')
    // console.log(title)
    title.innerText = 'Thanks for joinig us'
    title.style.color = 'tomato'
    let btn = document.getElementById('btn')
    btn.style.display = 'none'
}

function welcome()
{
    let name = document.getElementById('name');
    // console.log(name.value)
    document.getElementById('nameinput').innerText = name.value
    name.value = ""
}