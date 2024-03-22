function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let choice;
    switch (randomNumber) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let result;
    let score = 0;
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            result = `You lose, ${computerSelection} beats ${playerSelection}`;
        } else if (computerSelection === "scissors") {
            result = `You WIN, ${playerSelection} beats ${computerSelection}`;
            score = 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = `You WIN, ${playerSelection} beats ${computerSelection}`;
            score = 1;
        } else if (computerSelection === "scissors") {
            result = `You lose, ${computerSelection} beats ${playerSelection}`;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = `You lose, ${computerSelection} beats ${playerSelection}`;
        } else if (computerSelection === "paper") { 
            result = `You WIN, ${playerSelection} beats ${computerSelection}`;
            score = 1;
        }
    }
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    }
    return score;
}

function playGame() {
    let userScore = 0;
    userScore += playRound(prompt("Enter your choice:"), 
        getComputerChoice());
    userScore += playRound(prompt("Enter your choice:"), 
        getComputerChoice());
    userScore += playRound(prompt("Enter your choice:"), 
        getComputerChoice());
    userScore += playRound(prompt("Enter your choice:"), 
        getComputerChoice());
    userScore += playRound(prompt("Enter your choice:"), 
        getComputerChoice());

    let computerScore = NUM_OF_ROUNDS - userScore;
    if (userScore > computerScore) {
        console.log("YOU WIN!!!!");
    } else if (computerScore > userScore) {
        console.log("Sorry, better luck next time!");
    } else {
        console.log("It's a TIE");
    }
}

const NUM_OF_ROUNDS = 5;
playGame();