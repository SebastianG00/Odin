function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) -1;
    
    if (x < 0) {
        return "rock";
    } else if (x == 0) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

function getHumanChoice() {
    let answer = prompt("Write either Rock, Paper, Scissors");
    const choices = ["rock", "paper", "scissors"];
    if (answer.toLowerCase() == choices[0]) {
        return "rock";

    } else if (answer.toLowerCase() == choices[1]) {
        return "paper";
    } else if (answer.toLowerCase() == choices[2]) {
        return "scissors";
    } else {
        console.warn("select a valid answer");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        console.log("Tie!");

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    console.log(`Current-Score: Human Score:${humanScore} - ComputerScore:${computerScore}`);
}