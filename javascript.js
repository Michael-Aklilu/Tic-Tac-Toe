const firstPlayerName = prompt("PLAYER 1 NAME ?");
const secondPlayerName = prompt("PLAYER 2 NAME?");

const gameBoard = (function () {
  const board = [];
  const row = 3;
  const column = 3;
  const populateBoard = () => {
    for (let i = 0; i < row; i++) {
      board[i] = [];
      for (let j = 0; j < column; j++) {
        board[i].push(null);
      }
    }
  };

  const firstPlayer = {
    name: firstPlayerName,
    marker: "X",
  };

  const secondPlayer = {
    name: secondPlayerName,
    marker: "O",
  };
  return { board, populateBoard, firstPlayer, secondPlayer };
})(firstPlayerName, secondPlayerName);

const gameLogic = (function () {
  const game = gameBoard;

  const playerChoice = function () {
    const board = document.querySelector("#board");
    board.addEventListener("click", (event) => {
      let clickedCell = event.target;
      if (clickedCell.innerHTML !== "") return;
      if (currentPlayerTurn() === 1) {
        clickedCell.style.fontSize = "100px";
        clickedCell.innerHTML = game.firstPlayer.marker;
        playerTurn++;
      } else {
        clickedCell.style.fontSize = "100px";
        clickedCell.innerHTML = game.secondPlayer.marker;
        playerTurn++;
      }
      if (!winCheck()) drawCheck();
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
          winCheck();
          drawCheck();
          break;
        case "cell2":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[0][1] = game.secondPlayer.marker;
          } else gameBoard.board[0][1] = game.firstPlayer.marker;
          winCheck();
          drawCheck();
          break;
        case "cell3":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[0][2] = game.secondPlayer.marker;
          } else gameBoard.board[0][2] = game.firstPlayer.marker;
          winCheck();
          drawCheck();
          break;
        case "cell4":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[1][0] = game.secondPlayer.marker;
          } else gameBoard.board[1][0] = game.firstPlayer.marker;
          winCheck();
          drawCheck();
          break;
        case "cell5":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[1][1] = game.secondPlayer.marker;
          } else gameBoard.board[1][1] = game.firstPlayer.marker;
          winCheck();
          drawCheck();
          break;
        case "cell6":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[1][2] = game.secondPlayer.marker;
          } else gameBoard.board[1][2] = game.firstPlayer.marker;
          winCheck();
          drawCheck();
          break;
        case "cell7":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[2][0] = game.secondPlayer.marker;
          } else gameBoard.board[2][0] = game.firstPlayer.marker;
          winCheck();
          drawCheck();
          break;
        case "cell8":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[2][1] = game.secondPlayer.marker;
          } else gameBoard.board[2][1] = game.firstPlayer.marker;
          winCheck();
          drawCheck();
          break;
        case "cell9":
          if (currentPlayerTurn() === 1) {
            gameBoard.board[2][2] = game.secondPlayer.marker;
          } else gameBoard.board[2][2] = game.firstPlayer.marker;
          winCheck();
          drawCheck();
      }
    });
  };
  const winCheck = function () {
    const displayResult = document.querySelector("#displayResult");

    for (let i = 0; i < 3; i++) {
      if (
        gameBoard.board[i][0] === game.firstPlayer.marker &&
        gameBoard.board[i][1] === game.firstPlayer.marker &&
        gameBoard.board[i][2] === game.firstPlayer.marker
      ) {
        displayResult.textContent = `${game.firstPlayer.name} WINS!! GAME OVER!`;
        endGame();
      } else if (
        gameBoard.board[0][i] === game.firstPlayer.marker &&
        gameBoard.board[1][i] === game.firstPlayer.marker &&
        gameBoard.board[2][i] === game.firstPlayer.marker
      ) {
        displayResult.textContent = `${game.firstPlayer.name} WINS!! GAME OVER!`;
        endGame();
      }
    }

    if (
      gameBoard.board[0][0] === game.firstPlayer.marker &&
      gameBoard.board[1][1] === game.firstPlayer.marker &&
      gameBoard.board[2][2] === game.firstPlayer.marker
    ) {
      displayResult.textContent = `${game.firstPlayer.name} WINS!! GAME OVER!`;
      endGame();
    }
    if (
      gameBoard.board[0][2] === game.firstPlayer.marker &&
      gameBoard.board[1][1] === game.firstPlayer.marker &&
      gameBoard.board[2][0] === game.firstPlayer.marker
    ) {
      displayResult.textContent = `${game.firstPlayer.name} WINS!! GAME OVER!`;
      endGame();
    }
    for (let i = 0; i < 3; i++) {
      if (
        gameBoard.board[i][0] === game.secondPlayer.marker &&
        gameBoard.board[i][1] === game.secondPlayer.marker &&
        gameBoard.board[i][2] === game.secondPlayer.marker
      ) {
        displayResult.textContent = `${game.secondPlayer.name} WINS!! GAME OVER!`;
        endGame();
      } else if (
        gameBoard.board[0][i] === game.secondPlayer.marker &&
        gameBoard.board[1][i] === game.secondPlayer.marker &&
        gameBoard.board[2][i] === game.secondPlayer.marker
      ) {
        displayResult.textContent = `${game.secondPlayer.name} WINS!! GAME OVER!`;
        endGame();
      }
    }

    if (
      gameBoard.board[0][0] === game.secondPlayer.marker &&
      gameBoard.board[1][1] === game.secondPlayer.marker &&
      gameBoard.board[2][2] === game.secondPlayer.marker
    ) {
      displayResult.textContent = `${game.secondPlayer.name} WINS!! GAME OVER!`;
      endGame();
    }
    if (
      gameBoard.board[0][2] === game.secondPlayer.marker &&
      gameBoard.board[1][1] === game.secondPlayer.marker &&
      gameBoard.board[2][0] === game.secondPlayer.marker
    ) {
      displayResult.textContent = `${game.secondPlayer.name} WINS!! GAME OVER!`;
      endGame();
    }
  };

  const drawCheck = function () {
    const displayResult = document.querySelector("#displayResult");
    let isDraw = gameBoard.board.flat().every((cell) => {
      return (
        cell === game.firstPlayer.marker || cell === game.secondPlayer.marker
      );
    });
    if (isDraw) displayResult.textContent = "GAME OVER! IT'S A DRAW!";
  };

  const endGame = function () {
    const board = document.querySelector("#board");
    board.removeEventListener("click");
  };

  return {
    //board,
    playerChoice,
    currentPlayerTurn,
    playerTurn,
    fillBoard,
    winCheck,
    drawCheck,
  };
})();

gameBoard.populateBoard();
gameLogic.playerChoice();
gameLogic.fillBoard();
gameLogic.winCheck();
gameLogic.drawCheck();
