

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

