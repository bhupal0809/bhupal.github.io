let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random()*10)
}

function compareGuesses(human,computer,secret){
   let humanDiff = Math.abs(secret - human);
   let computerDiff = Math.abs(secret - computer);
   return humanDiff <=computerDiff;
}

function updateScore(winner){
    if (winner == 'human'){
        humanScore++;
    }
    else if (winner == "computer"){
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}
