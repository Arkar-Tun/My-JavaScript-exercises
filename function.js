// 1. get user input first
function userInput() {
  let result = prompt("Choose your move for ROCK, PAPER or SCISSORS!");
  if (result) {
    return result.toUpperCase();
  } else {
    return " ";
  }
}
let playerMove = userInput();
console.log(playerMove);

// 2. get random number for computer
function computerMove() {
  const result = ["ROCK", "PAPER", "SCISSORS"];
  let index = Math.floor(Math.random() * 3);
  return result[index];
}
let computerChoose = computerMove();
console.log(computerChoose);

// 3. checking conditions
function result() {
  let resultMsg = " ";
  if (playerMove === computerChoose) {
    return "It's a tie!";
  } else {
    switch (playerMove) {
      case "ROCK":
        resultMsg =
          computerChoose === "SCISSORS" ? "player win" : "computer win";
        break;

      case "PAPER":
        resultMsg = computerChoose === "ROCK" ? "player win" : "computer win";
        break;

      case "SCISSORS":
        resultMsg = computerChoose === "PAPER" ? "player win" : "computer win";
        break;

      default:
        return " ";
    }
  }
}
let finalResult = result();
console.log(finalResult);
