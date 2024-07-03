const gameBoard = (function () {
  const board = [];
  const row = 3;
  const column = 3;
  const populateBoard = () => {
    for (let i = 0; i < row; i++) {
      board[i] = [];
      for (let j = 0; j < column; j++) {
        board[i].push();
      }
    }
  };
  return { board, populateBoard };
})();

const gameLogic = function () {
  const firstPlayer = {
    name: "Player1",
    marker: "X",
  };

  const secondPlayer = {
    name: "Player2",
    marker: "O",
  };

  return { firstPlayer, secondPlayer };
};

const displayController = (function () {
  const game = gameLogic();

  const playerChoice = function () {
    const board = document.querySelector("#board");
    board.addEventListener("click", (event) => {
      let clickedCell = event.target;
      if (currentPlayerTurn() === 1) {
        clickedCell.style.fontSize = "100px";
        clickedCell.innerHTML = game.firstPlayer.marker;
        playerTurn++;
      } else {
        clickedCell.style.fontSize = "100px";
        clickedCell.innerHTML = game.secondPlayer.marker;
        playerTurn++;
      }
    });
  };
  let playerTurn = 1;

  const currentPlayerTurn = function () {
    if (playerTurn > 2) playerTurn = 1;
    else if (playerTurn == 1) playerTurn = 1;
    else playerTurn = 2;

    return playerTurn;
  };

  return { board, playerChoice, currentPlayerTurn, playerTurn };
})();
displayController.playerChoice();
