function getComputerChoice() {
    let x = Math.floor(Math.random() * 1000) + 1;
    let choice = null;
    (x <= 333) ? choice = "ROCK" :
    (x <= 666) ? choice = "PAPER" :
    (x <= 1000) ? choice = "SCISSORS" : console.log("Error");
    return (choice);
}

function getPlayerChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    x = choice.toUpperCase();
    return (x);
}

function playRound() {
    a = getComputerChoice();
    b = getPlayerChoice();
    roundOn = true;
    if (a === b) {
        ++roundsPlayed;
        console.log("It was a draw!");
        return ("It was a draw!");
    } else if (a === "ROCK" && b === "PAPER") {
        ++playerScore;
        ++roundsPlayed;
        console.log("Paper beats rock! Player wins!");
        return ("Paper beats rock! Player wins!");
    } else if (a === "PAPER" && b === "SCISSORS") {
        ++playerScore;
        ++roundsPlayed;
        console.log("Scissors beats paper! Player wins!");
        return ("Scissors beats paper! Player wins!");
    } else if (a === "SCISSORS" && b === "ROCK") {
        ++playerScore;
        ++roundsPlayed;
        console.log("Rock beats scissors! Player wins!");
        return ("Rock beats scissors! Player wins!");
    } else if (a === "PAPER" && b === "ROCK") {
        ++computerScore;
        ++roundsPlayed;
        console.log("Paper beats rock! Computer wins!");
        return ("Paper beats rock! Computer wins!");
    } else if (a === "SCISSORS" && b === "PAPER") {
        ++computerScore;
        ++roundsPlayed;
        console.log("Scissors beats paper! Computer wins!");
        return ("Scissors beats paper! Computer wins!");
    } else if (a === "ROCK" && b === "SCISSORS") {
        ++computerScore;
        ++roundsPlayed;
        console.log("Rock beats scissors! Computer wins!");
        return ("Rock beats scissors! Computer wins!");
    } else {
        console.log("There was an error.");
    }
}

let roundsPlayed = 0;
let computerScore = 0;
let playerScore = 0;
let roundOn = false;
let gameFinished = true;

function game() {
    if (roundsPlayed >= 5) {
        if (playerScore === computerScore) {
            console.log(`The game was a tie, with a score of ${playerScore} to the Player and ${computerScore} to the Computer!`);
            roundsPlayed = 0;
            computerScore = 0;
            playerScore = 0;
            gameFinished = false;
        } else if (playerScore > computerScore) {
            console.log(`Player wins with a staggering ${playerScore} points to the Computer's ${computerScore}!`);
            roundsPlayed = 0;
            computerScore = 0;
            playerScore = 0;
            gameFinished = false;
        } else if (playerScore < computerScore) {
            console.log(`The Computer wins with ${computerScore} points to the Player's ${playerScore}!`);
            roundsPlayed = 0;
            computerScore = 0;
            playerScore = 0;
            gameFinished = false;
        } else {
            console.log("Error");
            roundsPlayed = 0;
            computerScore = 0;
            playerScore = 0;
            gameFinished = false;
        }
    } else if (roundOn === true) {
        roundOn = false;
        playRound();
    }
}

while (gameFinished = false) {
    game();
}