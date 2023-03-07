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
  const imageOne = playerOne.getElementsByTagName("img")[0];
  imageOne.setAttribute("src", `images/${moveOne}.png`);
  const playerOneMove = document.getElementById("player-one-move__name");
  playerOneMove.innerText = moveOne;

  const playerTwo = document.getElementById("player-two-move");
  const imageTwo = playerTwo.getElementsByTagName("img")[0];
  imageTwo.setAttribute("src", `images/${moveTwo}.png`);
  const playerTwoMove = document.getElementById("player-two-move__name");
  playerTwoMove.innerText = moveTwo;

  const outcomeText = document.getElementById('player-results');
  outcomeText.innerHTML = outcome;
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
