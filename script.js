let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

function getComputerSelection() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)]
}

function playRound(playerSelection) {

    let computerSelection = getComputerSelection();
    let result = '';

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'You won!';
        playerScore += 1;

        if (playerScore == 5) {
            result = 'You won the game! Reload the page to play again.'
            disableButtons();
        }
    } else if (playerSelection == computerSelection) {
        result = 'Draw!'
    } else {
        result = 'You lost!'
        computerScore += 1;
        if (computerScore == 5) {
            result = 'You lost this game! The computer got 5 points first. Reload the page to play again.'
            disableButtons();
        }
    }

    return document.querySelector('.result').innerHTML = result;

}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.textContent)
    })
})

