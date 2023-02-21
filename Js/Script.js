console.log("Script")

const lblmessage = document.querySelector(".message")
console.log("lblmessage")
const pbAgain = document.querySelector(".again")

const lblnumber = document.querySelector(".number")

const lblscore = document.querySelector(".score")

const inpGuess = document.querySelector(".guess")

inpGuess.value = 10

const btnCheck = document.querySelector(".check")

let randNum = 0
function genRandomNumber(){
    const ranNumber = Math.random()*20
    const ran = Math.trunc(ranNumber)
    console.log(ran)
}

function setNumber(){
    console.log(inpGuess.value)
    const ranNumb = Math.random()*20
    const rand2 = Math.trunc(ranNumb)
    console.log(rand2)
}

btnCheck.addEventListener('click', setNumber)