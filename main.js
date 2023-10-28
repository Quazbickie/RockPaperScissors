let playerWins = 0;
let computerWins = 0;
let lastResult;
let flavourText;
let playerImageSelector;
let cpuImageSelector;
let buttons = document.querySelector('.buttons');
let playerChoicePath;
let cpuChoicePath;

let playerChoiceImage = document.querySelector('.player-choice-img');
let cpuChoiceImage = document.querySelector('.cpu-choice-img');



console.log(buttons);

function getComputerChoice() {
    cpuImageSelector = Math.floor(Math.random() * 3);
    switch(cpuImageSelector){
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

        let computerChoice = getComputerChoice();
        let gameResultString = playRound(playerChoice, computerChoice);
        console.log(gameResultString);

        if(whoWonInt(gameResultString) == 0){
            playerWins++;
            lastResult = "You Won!";
        } else if(whoWonInt(gameResultString) == 1){
            computerWins++;
            lastResult = "You Lost!";
        } else {
            lastResult = "Draw!";
        }

        flavourText = gameResultString;
        
        console.log("The Score is Now: \nPlayer: " + playerWins + "\nComputer: " + computerWins);
        
        updateUI();
    
}


buttons.addEventListener('click', (event) => {
    let target = event.target;
    console.log(target);

    switch(target.id) {
        case 'rock-button':
            console.log("You pressed ROCK");
            playerImageSelector = 0;
            game('rock');
            break;
        case 'paper-button':
            console.log("You pressed PAPER");
            playerImageSelector = 1;
            game('paper');
            break;
        case 'scissors-button':
            console.log("You pressed SCISSORS");
            playerImageSelector = 2;
            game('scissors');
            break;
    }

});


function updateUI(){

    console.log("UI FUNCTION");

    let playerScore = document.querySelector('#p1-score');
    let cpuScore = document.querySelector('#cpu-score');
    let resultPara = document.querySelector('.result-main');
    let resultFlavour = document.querySelector('.result-flavour');
   
    console.log(playerChoiceImage);
    console.log(cpuChoiceImage);


    setImagePaths();

    console.log(resultPara);
    console.log(resultFlavour);


    playerScore.textContent = playerWins;
    cpuScore.textContent = computerWins;
    resultPara.textContent = lastResult;
    resultFlavour.textContent = flavourText;




}

function setImagePaths(){

    switch(playerImageSelector){
        case 0:
            playerChoiceImage.setAttribute("src", "./assets/rock.svg");
            break;
        case 1:
            playerChoiceImage.setAttribute("src", "./assets/paper.svg");
            break;
        case 2:
            playerChoiceImage.setAttribute("src", "./assets/scissors.svg");
            break;
    }
    switch(cpuImageSelector){
        case 0:
            cpuChoiceImage.setAttribute("src", "./assets/rock.svg");
            break;
        case 1:
            cpuChoiceImage.setAttribute("src", "./assets/paper.svg");
            break;
        case 2:
            cpuChoiceImage.setAttribute("src", "./assets/scissors.svg");
            break;
    }

}


