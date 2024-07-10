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

    // See who wins the round
    function playRound(humanChoice, computerChoice){

        if(humanChoice == "rock" && computerChoice == "scissors"){
            humanScore++;
            results.textContent = "Rock beats scissors.";
            score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
        } else if(humanChoice == "paper" && computerChoice == "rock"){
            humanScore++;
            results.textContent = "Paper beats rock.";
            score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
        } else if(humanChoice == "scissors" && computerChoice == "paper"){
            humanScore++;
            results.textContent = "Scissors beats paper.";
            score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
        } else if(humanChoice == "paper" && computerChoice == "scissors"){
            computerScore++;
            results.textContent = "Scissors beats paper.";
            score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
        } else if(humanChoice == "scissors" && computerChoice == "rock"){
            computerScore++;
            results.textContent = "Rock beats scissors.";
            score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
        } else if(humanChoice == "rock" && computerChoice == "paper"){
            computerScore++;
            results.textContent = "Paper beats rock.";
            score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
        } else {
            results.textContent = `It is a tie.`;
            score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
        }

        if(humanScore == 5 || computerScore == 5) {
            getScore();
            humanScore = 0;
            computerScore = 0;
        }

    }

    function getScore(){
        if (humanScore > computerScore){
            score.style.fontWeight = 'bold';
            score.textContent = `You win with ${humanScore} points.`;
        } else if(computerScore == humanScore){
            score.style.fontWeight = 'bold';
            score.textContent = 'The game is a tie.';
        } else {
            score.style.fontWeight = 'bold';
            score.textContent = `Computer wins with ${computerScore} points.`;
        }
    }
    
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

    const score = document.createElement('div');
    document.body.appendChild(score);
  
}

playGame();


