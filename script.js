// // 1- Getting User Input!
let userSelection = prompt("rock, paper, scissors?") .toUpperCase();

// // 2- GEt random number between 0 to 2 for Computer Move! 
let choices = ["ROCK", "PAPER", "SCISSORS"];

let computerSelection = choices[Math.floor(Math.random() * 3)];

console.log("computer chose: " + computerSelection);

// // 3- Comparison statement for result
if (userSelection === computerSelection) {
    console.log("it's a tie!");
}   else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
) {
    console.log("You win!")
}   else {
    console.log("You lose!")
}