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
    game.playerOne.retrieveWinsFromStorage();
    game.playerTwo.retrieveWinsFromStorage();
    playerOneScore.innerText = `${game.playerOne.wins}`;
    playerTwoScore.innerText = `${game.playerTwo.wins}`;
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
  displayResults();
}

function displayResults() {
  
}

function displayHide(display, hide) {
  display.classList.remove('hidden');
  hide.classList.add('hidden');
}
