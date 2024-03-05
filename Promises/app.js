// console.log('Task 1')
// console.log('Task 2')
// setTimeout(()=>{
//     console.log('Task 3')
// },2000)
// console.log('Task 4')


function notify(){
    console.log('Email Sent')
}
// function uploadRecording(){
//     setTimeout(()=>{
//         console.log('Recording uploaded')
//     },2000)
//     notify()
// }
// uploadRecording();

// -----------------------------------------

// promise syntax : 
// new Promise(()=>{

// }).then(()=>{

// }).then(()=>{

// })


// example: 
// let test = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Recording uploaded')
//         resolve()
//     },2000)
    
// }).then(()=>{
//     notify();
// })

// random quotes
function fetchQuote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response){
        return response.json();
    }).then(function(data){
        let random = Math.floor(Math.random()*data.length)
        // console.log(data[random].text)
        document.getElementById('quote').innerText = data[random].text
        document.getElementById('author').innerText = data[random].author
    })
}
