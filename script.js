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
    if (a === b) {
        return ("It was a draw!");
    } else if (a === "ROCK" && b === "PAPER") {
        return ("Paper beats rock! Player wins!");
    } else if (a === "PAPER" && b === "SCISSORS") {
        return ("Scissors beats paper! Player wins!");
    } else if (a === "SCISSORS" && b === "ROCK") {
        return ("Rock beats scissors! Player wins!");
    } else if (a === "PAPER" && b === "ROCK") {
        return ("Paper beats rock! Computer wins!");
    } else if (a === "SCISSORS" && b === "PAPER") {
        return ("Scissors beats paper! Computer wins!");
    } else if (a === "ROCK" && b === "SCISSORS") {
        return ("Rock beats scissors! Computer wins!");
    } else {
        console.log("There was an error.");
    }
}
