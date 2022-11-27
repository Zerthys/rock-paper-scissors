function getComputerChoice() {
    let x = Math.floor(Math.random() * 1000) + 1;
    return (x);
}

function getPlayerChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    x = choice.toUpperCase();
    return (x);
}
