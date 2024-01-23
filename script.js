function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()  * 3) + 1
  
    if (computerChoice == 1) {
        return 'rock'
    } else if (computerChoice == 2) {
        return 'paper'
    } else {
        return 'scissors'
    }  
}


function playRound(playerSelection, computerSelection) {

    if (computerChoice === 'rock' && playerSelection === 'rock' || 
    computerChoice === 'paper' && playerSelection === 'paper' ||
    computerChoice === 'scissors' && playerSelection === 'scissors') {
        return 'Draw! You and computer chose the same element'
    } else if (computerChoice === 'rock' && playerSelection === 'scissors') {
        return 'You lost! Rock beat scissors.'
    } else if (computerChoice === 'rock' && playerSelection === 'paper') {
        return 'You win! Paper beat rock.'
    } else if (computerChoice === 'paper' && playerSelection === 'rock') {
        return 'You lost! Paper beat rock.'
    } else if (computerChoice === 'paper' && playerSelection === 'scissors') {
        return 'You win! Scissors beat paper.'
    } else if (computerChoice === 'scissors' && playerSelection === 'rock') {
        return 'You win! Rock beat scissors.'
    } else if (computerChoice === 'scissors' && playerSelection === 'paper') {
        return 'You lost! Scissors beat paper.'
    } else {
        return 'Choose one of these elements only!'
    }

}


function game() {
 
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose rock, paper or scissors: ').toLowerCase();
        console.log(playRound(playerSelection, computerChoice));
    }

}

const playerSelection = 'rock'
const computerChoice = getComputerChoice();


console.log(game());
