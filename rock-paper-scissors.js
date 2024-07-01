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
