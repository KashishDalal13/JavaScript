// let addbtn = document.getElementById('btn')
// addbtn.addEventListener('click',)
let users = []
let userdetailsContainer = document.getElementById('user-details-Container')
let deleteUser = document.getElementById('delete')
let userDetails = document.getElementById('userDetails')

// function removeUser(){
//     users.map((user)=>{
//         let email = user.email
        // console.log(index,email)
        // console.log(userdetailsContainer)
        // userdetailsContainer.remove(email)   
        // userDetails.remove(email)
//     })
// }

function displayData(e){
    // console.log(e.target.innerText)  
    userdetailsContainer.innerHTML = ''
    let emailDis = e.target.innerText
    let res = users.find((use)=>{
        return use.email == emailDis
    })
    console.log(res)
    // let nameElement = document.createElement('p')
    let emailElement = document.createElement('p')
    // nameElement.innerText = res.name
    emailElement.innerText = res.email

    // userdetailsContainer.appendChild(nameElement)
    userdetailsContainer.appendChild(emailElement)
}

function renderUser(){
    userDetails.innerHTML = ''
    users.map((user)=>{
        let div = document.createElement('div')
        let p = document.createElement('p')
        let p1 = document.createElement('p')
        div.classList.add('dummy')
        p.innerText = user.name
        p1.innerText = user.email
        userDetails.appendChild(div)
        div.appendChild(p)
        div.appendChild(p1)
        div.addEventListener('click',displayData)
        // p1.addEventListener('click',displayData)
        
    })
}

function fetchData(){
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let tempUser = {
        name: name.value,
        email: email.value
    }
    users.push(tempUser)
    renderUser()
    name.value = ''
    email.value = ''
}
// console.log(users)