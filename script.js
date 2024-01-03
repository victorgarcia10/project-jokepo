const res = document.querySelector('.res')
const scoreHuman = document.querySelector('#spanOne')
const scoreMachine = document.querySelector('#spanTwo')

let humanValueScore = 0
let machineValueScore = 0

const playHuman = (choiceHuman) => {
    playTheGame(choiceHuman, playMachine())

}

const playMachine = () =>{
    let choice = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random()*3)

    return choice[randomNumber]

}

const playTheGame = (human, machine) =>{

    console.log('Humano:' + human + 'Maquina' + machine)

    if(human === machine){
        res.innerHTML = 'Deu Empate'

    }else if((human === 'paper' && machine === 'rock') || (human === 'rock' && machine === 'scissors') || (human === 'scissors' && machine === 'scissors')){
        humanValueScore++
        scoreHuman.innerHTML = humanValueScore
        res.innerHTML = 'Voce Ganhou'
        
    }else {
        machineValueScore++
        scoreMachine.innerHTML = machineValueScore
        res.innerHTML = 'Voce Perdeu'
    }
}



    
