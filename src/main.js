/* Global Variables */

var game = new Game();

/* Query Selectors */

var boardGrid = document. getElementById('boardGrid');
var playerOneScore = document.getElementById('playerOneScore');
var playerTwoScore = document.getElementById('playerTwoScore');
var displayWinner = document.getElementById('displayWinner');
var nextPlayerTurn = document.getElementById('playersTurn');
var squares = document.querySelectorAll('.square');
var resetButton = document.getElementById('resetButton');

/* Event Listeners */

window.addEventListener('load', displayPlayerWins);
boardGrid.addEventListener('click', function(event) {
  clickSquare(event);
});

/* Functions */

function displayPlayerWins() {
    game.player1.retrieveWinsFromStorage();
    game.player2.retrieveWinsFromStorage();
    playerOneScore.innerText = `${game.player1.wins}`;
    playerTwoScore.innerText = `${game.player2.wins}`;
  }

  function clickSquare(event) {
    var gridSquare = event.target;
    var gridSquareId = event.target.id;
    if(gridSquare.innerText === '') {
      gridSquare.innerText = `${game.playerTurn.token}`;
      console.log(gridSquare);
      game.updateGameSquare(gridSquareId);
      game.nextTurn();
    } else if(gridSquare) {
      boardGrid.removeEventListener('click', clickSquare);
    }
  }


function checkGameStatus() {
  game.checkForWinner();
  game.checkForDraw();
  displayGameWinner();
  displayGameDraw();
}

function displayGameWinner() {
  if(game.player1.winner) {
    displayHide(displayWinner, nextPlayerTurn);
    displayWinner.innerText = `${game.player1.token} is the WINNER`;
    game.player1.saveWinsToStorage();
    refreshBoard();
  } else if(game.player2.winner) {
    displayHide(displayWinner, nextPlayerTurn);
    displayWinner.innerText = `${game.player2.token} is the WINNER`;
    game.player2.saveWinsToStorage();
    refreshBoard();
  }
}

function displayHide(display, hide) {
  display.classList.remove('hidden');
  hide.classList.add('hidden');
}
