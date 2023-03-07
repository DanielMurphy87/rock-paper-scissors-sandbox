const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {

  const playerOne = document.getElementById("player-one-move");
  playerOne.getElementsByTagName("img")[0].setAttribute("src", `images/${moveOne}.png`);
  document.getElementById("player-one-move__name").innerText = moveOne;

  const playerTwo = document.getElementById("player-two-move");
  playerTwo.getElementsByTagName("img")[0].setAttribute("src", `images/${moveTwo}.png`);
  document.getElementById("player-two-move__name").innerText = moveTwo;

  const outcomeText = document.getElementById('player-results');
  outcomeText.innerHTML = outcome;
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
