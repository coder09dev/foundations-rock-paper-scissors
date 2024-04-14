function playGame() {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const body = document.querySelector("body");

    const runningScore = document.createElement("div");
    let roundResult = '';
    
    rock.addEventListener('click', () => {
        console.log(`user selected rock`);
        roundResult = playRound('rock', getComputerChoice());
        getScores(roundResult);
        runningScore.textContent = userScore;
        declareWinner(body);
    });
    paper.addEventListener('click', () => {
        console.log(`user selected paper`);
        roundResult = playRound('paper', getComputerChoice());
        getScores(roundResult);
        runningScore.textContent = userScore;
        declareWinner(body);
    });
    scissors.addEventListener('click', () => {
        console.log(`user selected scissors`);
        roundResult = playRound('scissors', getComputerChoice());
        getScores(roundResult);
        runningScore.textContent = userScore;
        declareWinner(body);
    });
    body.appendChild(runningScore);
}

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
    let returnVal = '';
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            returnVal = 'computer wins';
        } else if (computerSelection === "scissors") {
            returnVal = 'user wins';
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            returnVal = 'computer wins';
        } else if (computerSelection === "scissors") {
            returnVal = 'user wins';
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            returnVal = 'computer wins';
        } else if (computerSelection === "paper") { 
            returnVal = 'user wins';
        }
    }
    if (playerSelection === computerSelection) {
        returnVal = "tie";
    }
    return returnVal;
}

function getScores(roundResult) {
    if (roundResult.includes('user')) {
        userScore += 1;
    } else if (roundResult.includes('computer')) {
        computerScore += 1;
    } 
}

function declareWinner(body) {
    console.log(`userScore: ${userScore}: computerScore: ${computerScore}`);
    const winner = document.createElement("div");
    if (userScore === 5 || computerScore === 5) {
        if (userScore > computerScore) {
            winner.textContent = "YOU WIN!!!!";
        } else if (computerScore > userScore) {
            winner.textContent = "Sorry, better luck next time!";
        } else {
            winner.textContent = "It's a TIE";
        };
    }
    body.appendChild(winner);
}

const NUM_OF_ROUNDS = 5;
let userScore = 0;
let computerScore = 0;
playGame();