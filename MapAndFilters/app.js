// let ar = [1,2,3,4,5,6,7,8,9]
// map => to traverse and transform all the values. Map is a predefined function
// to calculate square of every no

// function sqr(num){
//     return num*num;
// }
// let res = ar.map(sqr);
// console.log('Sqrt:',res)

// anonymous func => function with no name
// let cube = ar.map((num) => num*num*num)
// console.log('Cube:',cube)

// ------------------------------------------
// filters => to filter out something
// let filters = ar.filter((num) => num > 5)
// console.log('Num greater than 5:',filters)

// let evenno = ar.filter((num) => num%2==0)
// console.log('Even no:',evenno)

// ----------------------------------------
// chaining => use map and filter / filter and map
// first filter even no then perform sqrt on fltered no
// let chaining = ar.filter((x) => x%2==0).map((x)=>x*x)
// console.log(chaining)

// let names = users.map((user)=>user.fname+" "+user.lname)
// console.log(names)

// let female = users.filter((user)=>user.gender=='female').map((user)=>user.fname+" "+user.lname)
// console.log(female)

// ----------------------------------------



let users = []
let userdetails = document.getElementById('user-details')
let leftContainer = document.getElementById('left-container')
let userDetailsContainer = document.getElementById('user-details-container')
userdetails.style.display = 'none'

showUserDetails = (e)=>{
    userDetailsContainer.innerHTML = ''
    userdetails.style.display = 'block'
    leftContainer.style.display = 'none'
    let email = e.target.innerText
    let result = users.find((user)=>{   
        return user.email == email
    })
    // console.log(result)
    let nameElement = document.createElement('p')
    let emailElement = document.createElement('p')
    nameElement.innerText = result.name
    emailElement.innerText = result.email

    userDetailsContainer.appendChild(nameElement)
    userDetailsContainer.appendChild(emailElement)
}

goBack = ()=>{
    userdetails.style.display = 'none'
    leftContainer.style.display = 'block'
}


function renderUsers(){
    let userContainer = document.getElementById('users');
    userContainer.innerHTML = " "
    users.map((user)=>{
        let div = document.createElement('div');
        // let userName = document.createElement('p')
        let userEmail = document.createElement('p')
        div.classList.add('user');

        // userName.innerText = user.name;
        userEmail.innerText = user.email

        userEmail.addEventListener('click',showUserDetails)

        userContainer.appendChild(div);
        // div.appendChild(userName)
        div.appendChild(userEmail)
    })
}


function successAlert(){
    let alert = document.getElementById('alert')
    alert.classList.add('success')
    alert.innerText = 'User added successfully!'
    setTimeout(()=>{
        alert.classList.remove('success');
        alert.innerText = '';   
    },2000)
}
function failAlert(){
    let alert = document.getElementById('alert')
    alert.classList.add('danger')
    alert.innerText = 'User already exists!'
    setTimeout(()=>{
        alert.classList.remove('danger');
        alert.innerText = '';   
    },2000)
}

function register(){
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let tempUser = {
        name: name.value,
        email: email.value
    }
    let userEmailCount = users.filter((user)=>user.email == email.value)
    if(userEmailCount.length == 0)
    {
        users.push(tempUser)
        successAlert();

    }
    else{
        failAlert()
    }
    renderUsers()
    name.value = ''
    email.value = ''
}