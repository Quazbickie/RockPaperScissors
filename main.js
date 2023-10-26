let playerWins = 0;
let computerWins = 0;
let buttons = document.querySelector('.buttons');
console.log(buttons);

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    switch(randomInt){
        case 0:
            console.log("ROCK");
            return "rock";
        case 1:
            console.log("PAPER");
            return "paper";
        case 2:
            console.log("SCISSORS");
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    switch(lowerCasePlayerSelection){
        case "rock":
            return computerSelection == lowerCasePlayerSelection ? "Draw" :
                    computerSelection == "paper" ? "You Lose! Paper beats Rock!" :
                        "You Win! Rock beats Scissors!";
        case "paper":
            return computerSelection == lowerCasePlayerSelection ? "Draw" :
                    computerSelection == "scissors" ? "You Lose! Scissors beats Paper!" :
                        "You Win! Paper beats Rock!";
        case "scissors":
            return computerSelection == lowerCasePlayerSelection ? "Draw" :
                    computerSelection == "rock" ? "You Lose! Rock beats Scissors!" :
                        "You Win! Scissors beats Paper!";
    }
}

function whoWonInt(gameMessage){
        if(gameMessage.includes("You Win")){
            return 0;
        } else if(gameMessage.includes("You Lose")){
            return 1;
        } else {
            return -1;
        }
}

function game(playerChoice){

        let gameResultString = playRound(playerChoice, getComputerChoice());
        console.log(gameResultString);

        if(whoWonInt(gameResultString) == 0){
            playerWins++;
        } else if(whoWonInt(gameResultString) == 1){
            computerWins++;
        }
        console.log("The Score is Now: \nPlayer: " + playerWins + "\nComputer: " + computerWins);
        
        updateUI();
    
}


buttons.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target);

    switch(target.id) {
        case 'rock-button':
            console.log("You pressed ROCK");
            game('rock');
            break;
        case 'paper-button':
            console.log("You pressed PAPER");
            game('paper');
            break;
        case 'scissors-button':
            console.log("You pressed SCISSORS");
            game('scissors');
            break;
    }


});


function updateUI(){

    console.log("UI FUNCTION");

    let playerScore = document.querySelector('#p1-score');
    let cpuScore = document.querySelector('#cpu-score');

    console.log(playerScore);

    playerScore.textContent = playerWins;
    cpuScore.textContent = computerWins;


}