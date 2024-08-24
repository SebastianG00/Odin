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

const rock = document.querySelector('.button1');
const paper = document.querySelector(".button2");
const scissors = document.querySelector(".button3");

function playRound(humanChoice, computerChoice) {

    let resulty = "";
    
    computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        resulty = "Tie!";
        //console.log("Tie!");

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        resulty = `You Lose! ${computerChoice} beats ${humanChoice}`;
        //console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        resulty = `You Win! ${humanChoice} beats ${computerChoice}`;
        //console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        resulty = `You Lose! ${computerChoice} beats ${humanChoice}`;
        //console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        resulty = `You Win! ${humanChoice} beats ${computerChoice}`;
        //console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        resulty = `You Lose! ${computerChoice} beats ${humanChoice}`;
        //console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        resulty= `You Win! ${humanChoice} beats ${computerChoice}`;
        //console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    result.textContent = resulty;
    score.textContent = `Current-Score: Human Score:${humanScore} - ComputerScore:${computerScore}`;

    //console.log(`Current-Score: Human Score:${humanScore} - ComputerScore:${computerScore}`);
}






rock.addEventListener('click', () =>playRound('rock')); 
paper.addEventListener('click', () =>playRound('paper')); 
scissors.addEventListener('click', () =>playRound('scissors')); 

//Create Results and Scoare

const result = document.createElement("div")
result.id = "result";
result.textContent = "I exists";

const score = document.createElement("div")
score.id = "score";
score.textContent = "score also exists";

const classButtons = document.querySelector(".buttons");

classButtons.appendChild(result);
classButtons.appendChild(score);







