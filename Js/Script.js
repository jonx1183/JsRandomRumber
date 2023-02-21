console.log("Script")

const lblmessage = document.querySelector(".message")
console.log("lblmessage")
const btnAgain = document.querySelector(".again")

const lblnumber = document.querySelector(".number")

const lblscore = document.querySelector(".score")

const inpGuess = document.querySelector(".guess")

inpGuess.value = 10

const btnCheck = document.querySelector(".check")

let randNum = 0 + 1
function genRandomNumber(){
    const ranNumber = Math.random()*20
    const randNum = Math.trunc(ranNumber)
    console.log(randNum)
}

function setNumber(){
    console.log(inpGuess.value)
    const ranNumb = Math.random()*20
    const rand2 = Math.trunc(ranNumb)
    console.log(rand2)
}

function score(){
    if(inpGuess == randNum){
        lblscore + 1
    }
}

btnCheck.addEventListener('click', setNumber)

btnAgain.addEventListener('click', genRandomNumber)