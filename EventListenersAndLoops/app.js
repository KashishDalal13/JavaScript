// let k = 2
// for (let i=1; i<=10; i++){
//     console.log(k*i)
// }

// foreach will always be used with aray and not without array

// with id
// let btn = document.getElementById('btn')
// function btnClicked(){
//     console.log('btn Clicked!')
// }

// btn.addEventListener('click',btnClicked)

// with class
// let btn = document.querySelector('.btn')
// function btnClicked(e){
//     console.log('btn Clicked!')
//     console.log(e.target.value)
// }
// btn.addEventListener('click',btnClicked)

function changeColor(){
    let text = document.querySelectorAll('.text')
    for(let i=0; i<text.length; i++)
    {
        text[i].style.color = 'white'
    }
    let body = document.querySelector('body')
    body.style.backgroundColor = 'black'

    let logo = document.querySelector('.logo')
    logo.style.color = 'orange'

    let darkMode = document.querySelector('.darkBtn')
    darkMode.style.border = '1px solid white'
}
let btn = document.querySelector('.darkBtn')
// console.log(btn)
btn.addEventListener('click',changeColor)
