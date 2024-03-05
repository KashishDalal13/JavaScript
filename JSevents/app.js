function test(){
    console.log('Test function called')
}
let alertDiv = document.getElementById('alert')
function mouseOver(){
    alertDiv.style.display = 'block'
}
function mouseOut(){
    alertDiv.style.display = 'hidden'
}
function submitName(){
    let name = document.getElementById('name')
    let value = name.value
    document.getElementById('userInput').innerText = value
    // name.value = '';
}
let magicStatus = false
let magicbtn = document.getElementById('magicbtn')
let stopmagicbtn = document.getElementById('stopmagicbtn')
function checkMagicstatus()
{
    if(magicStatus == true)
    {
        magicbtn.style.display = 'none'
        stopmagicbtn.style.display = 'block'
    }
    else{
        stopmagicbtn.style.display = 'none'
        magicbtn.style.display = 'block'
    }
}
function magic()
{
    magicStatus = true
    let title = document.getElementById('title')
    title.classList.add('magic')
    checkMagicstatus();
    
}
function stopmagic()
{
    magicStatus = false
    let title = document.getElementById('title')
    title.classList.remove('magic')
    checkMagicstatus()
}
 // -----------------------------------------

// arrow function
// add = (num1,num2) =>{
//     console.log(num1+num2)
// }
// add(2,3)

add = (n1,n2) => n1+n2;
multiply = (nn,ns) => nn*ns;
console.log('Multiplication:',multiply(2,3))
console.log('Addition:',add(2,3))