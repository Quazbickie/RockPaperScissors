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





console.log(playRound("ROCK", getComputerChoice()));