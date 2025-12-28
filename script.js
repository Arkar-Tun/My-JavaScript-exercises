// 1. Select necessary DOM elements
const cards = document.querySelectorAll(".card");
const statusText = document.querySelector("#status-text");
const winnerMsg = document.querySelector("#winner-msg");

// 2.function that generates a random answer for the computer
function getComputerMove() {
  const moves = ["ROCK", "PAPER", "SCISSOR"];
  const randomNumber = Math.floor(Math.random() * 3);
  return moves[randomNumber];
}

// 3.checking result function
function playRound(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return "It's a tie!";
  } else if (
    (playerMove === "ROCK" && computerMove === "SCISSOR") ||
    (playerMove === "PAPER" && computerMove === "ROCK") ||
    (playerMove === "SCISSOR" && computerMove === "PAPER")
  ) {
    return "You win! 🎉 ";
  } else {
    return "You lose! 💀 ";
  }
}

// 4.adding Event Listener to each card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // taking result from Player by class name
    const playerMove = card.classList[0].toUpperCase();
    const computerMove = getComputerMove();

    // caculating result
    const result = playRound(playerMove, computerMove);

    // change result in DOM
    statusText.textContent = result;
    winnerMsg.textContent = `You chose ${playerMove} | Computer chose ${computerMove}`;

    // change color for win and lose or tie result
    if (result.includes("win")) {
      statusText.style.color = "#2ecc71";
    } else if (result.includes("lose")) {
      statusText.style.color = "#e74c3c";
    } else {
      statusText.style.color = "white";
    }
  });
});
