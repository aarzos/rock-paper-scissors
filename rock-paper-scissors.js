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

// Control the game.
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    // See who wins the round
    function playRound(humanChoice, computerChoice){
    let humanSelction = humanChoice.toLowerCase();
    
    if(humanSelction == "rock" && computerChoice == "scissors"){
        humanScore++;
        results.textContent = "You win! Rock beats scissors.";
    } else if(humanSelction == "paper" && computerChoice == "rock"){
        humanScore++;
        results.textContent = "You win! Paper beats rock.";
    } else if(humanSelction == "scissors" && computerChoice == "paper"){
        humanScore++;
        results.textContent = "You win! Scissors beats paper.";
    } else if(humanSelction == "paper" && computerChoice == "scissors"){
        computerScore++;
        results.textContent = "You lose! Scissors beats paper.";
    } else if(humanSelction == "scissors" && computerChoice == "rock"){
        computerScore++;
        results.textContent = "You lose! Rock beats scissors.";
    } else if(humanSelction == "rock" && computerChoice == "paper"){
        computerScore++;
        results.textContent = "You lose! Paper beats rock.";
    } else {
        results.textContent = "It is a tie.";
    }
}

    // Game control loop.
    // while(rounds < 5) {
    //     playRound(getHumanChoice(), getComputerChoice());
    //     ++rounds;
    // }

    function getScore(){
        if (humanScore > computerScore){
            console.log(`You win with ${humanScore} points.`);
        } else if(computerScore == humanScore){
            console.log("The game is a tie.")
        } else {
            console.log(`You lost by ${computerScore - humanScore} point(s).`)
        }
    }
    
    getScore();

    const rockBtn = document.createElement('button');
    const paperBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');

    rockBtn.textContent = 'Rock';
    paperBtn.textContent = 'Paper';
    scissorsBtn.textContent = 'Scissors';

    document.body.appendChild(rockBtn);
    document.body.appendChild(paperBtn);
    document.body.appendChild(scissorsBtn);

    rockBtn.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });

    paperBtn.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });

    scissorsBtn.addEventListener('click', () => {
        playRound('scissors', getComputerChoice());
    });

    const results = document.createElement('div');
    document.body.appendChild(results);
        
}

playGame();


