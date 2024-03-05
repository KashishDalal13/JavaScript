let API = 'https://official-joke-api.appspot.com/jokes/ten'
function fetchAPI(){
    fetch(API)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        let random = Math.floor(Math.random()*data.length)
        document.getElementById('title').innerText = data[random].setup
        document.getElementById('descr').innerText = data[random].punchline
    })
}