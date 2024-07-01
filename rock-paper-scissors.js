// Generate the computer choice.
function getComputerChoice() {
    let number = Math.random();
    if(number < .34) {
        return "rock";
    } else if (number > .33 && number < .67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Get the player's choice.
function getHumanChoice(){
    let userInput = prompt("Select rock, paper, or scissors.");

    if(userInput == "rock"){
        return "rock";
    } else if(userInput == "paper"){
        return "paper";
    }else if(userInput == "scissors"){
        return "scissors";
    } else{
        alert(`${userInput} is not a valid input Selection. Please try again.`);
    }
}

function playRound(humanChoice, computerChoice){
    let humanSelction = humanChoice.toLowerCase();

    if(humanSelction == "rock" && computerChoice == "scissors"){
        humanScore++;
        console.log("You win! Rock beats scissors.");
    } else if(humanSelction == "paper" && computerChoice == "rock"){
        humanScore++;
        console.log("You win! Paper beats rock.");
    } else if(humanSelction == "scissors" && computerChoice == "paper"){
        humanScore++;
        console.log("You win! Scissors beats paper.");
    } else if(humanSelction == "paper" && computerChoice == "scissors"){
        computerScore++;
        console.log("You lose! Scissors beats paper.");
    } else if(humanSelction == "scissors" && computerChoice == "rock"){
        computerScore++;
        console.log("You lose! Rock beats scissors.");
    } else if(humanSelction == "rock" && computerChoice == "paper"){
        computerScore++;
        console.log("You lose! Paper beats rock.");
    } else {
        console.log("It is a tie.");
    }
}