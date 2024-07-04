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
      winCheck();
    });
  };
  let playerTurn = 1;

  const currentPlayerTurn = function () {
    if (playerTurn > 2) playerTurn = 1;
    else if (playerTurn == 1) playerTurn = 1;
    else playerTurn = 2;

    return playerTurn;
  };

  const fillBoard = function () {
    const board = document.querySelector("#board");
    board.addEventListener("click", (event) => {
      const clickedCell = event.target.id;
      switch (clickedCell) {
        case "cell1":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[0][0] = game.secondPlayer.marker;
          } else gameBoard.board[0][0] = game.firstPlayer.marker;
          break;
        case "cell2":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[0][1] = game.secondPlayer.marker;
          } else gameBoard.board[0][1] = game.firstPlayer.marker;
          break;
        case "cell3":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[0][2] = game.secondPlayer.marker;
          } else gameBoard.board[0][2] = game.firstPlayer.marker;
          break;
        case "cell4":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[1][0] = game.secondPlayer.marker;
          } else gameBoard.board[1][0] = game.firstPlayer.marker;
          break;
        case "cell5":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[1][1] = game.secondPlayer.marker;
          } else gameBoard.board[1][1] = game.firstPlayer.marker;
          break;
        case "cell6":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[1][2] = game.secondPlayer.marker;
          } else gameBoard.board[1][2] = game.firstPlayer.marker;
          break;
        case "cell7":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[2][0] = game.secondPlayer.marker;
          } else gameBoard.board[2][0] = game.firstPlayer.marker;
          break;
        case "cell8":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[2][1] = game.secondPlayer.marker;
          } else gameBoard.board[2][1] = game.firstPlayer.marker;
          break;
        case "cell9":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[2][2] = game.secondPlayer.marker;
          } else gameBoard.board[2][2] = game.firstPlayer.marker;
      }
    });
    winCheck();
  };
  const winCheck = function () {
    const displayResult = document.querySelector("#displayResult");

    if (
      gameBoard.board[0][0] === game.firstPlayer.marker &&
      gameBoard.board[0][1] === game.firstPlayer.marker &&
      gameBoard.board[0][2] === game.firstPlayer.marker
    )
      displayResult.textContent = `${game.firstPlayer.name} WINS!! GAME OVER!`;
  };

  return {
    board,
    playerChoice,
    currentPlayerTurn,
    playerTurn,
    fillBoard,
    winCheck,
  };
})();
gameBoard.populateBoard();
displayController.playerChoice();
displayController.fillBoard();
displayController.winCheck();
