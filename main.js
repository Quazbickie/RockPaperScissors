let playerWins = 0;
let computerWins = 0;

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

function game(){
    for(let i = 0; i < 5; i++){

        let gameResultString = playRound(prompt("Please enter Rock, Paper or Scissors"), getComputerChoice());
        console.log(gameResultString);

        if(whoWonInt(gameResultString) == 0){
            playerWins++;
        } else if(whoWonInt(gameResultString) == 1){
            computerWins++;
        }

        console.log("The Score is Now: \nPlayer: " + playerWins + "\nComputer: " + computerWins);

    }
}




game();