// const users = []
// let nameContainer = document.getElementById('nameContainer')

// renderNames = ()=>{
//     nameContainer.innerHTML = ''
//     users.map((user)=>{
//         let div = document.createElement('div')
//         let p = document.createElement('p')
//         div.classList.add('container')
//         p.innerText = user.name
//         nameContainer.appendChild(div)
//         div.appendChild(p)
//     })
// }

// addUser = ()=>{
//     let name = document.getElementById('name')
//     let tempUser = {name: name.value}
//     users.push(tempUser)
//     // console.log(users)
//     name.value = ''
//     renderNames()
// }


let lists = []
let listContainer = document.getElementById('listContainer')
let options = {weekday: 'long', day:'numeric', month: 'long'}

renderList = ()=>{
    listContainer.innerHTML = ''
    lists.map((ll)=>{
        let div = document.createElement('div')
        let p = document.createElement('p')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        div.classList.add('container')
        p.innerText = ll.task
        p1.innerText = ll.desc
        let datetoFormat = new Date(ll.date)
        let fdate = datetoFormat.toLocaleDateString('en',options)
        p2.innerText = fdate
        listContainer.appendChild(div)
        div.appendChild(p)
        div.appendChild(p1)
        div.appendChild(p2)
    })
}

addList = ()=>{
    let task = document.getElementById('task')
    let desc = document.getElementById('desc')
    let date = document.getElementById('date')
    let tempList = {task: task.value, desc: desc.value, date: date.value}
    lists.push(tempList)
    console.log(lists)
    task.value = ''
    desc.value = ''
    date.value = ''
    renderList()
}