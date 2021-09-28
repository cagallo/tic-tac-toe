/* Global Variables */

var game = new Game()

/* Query Selectors */

var boardGrid = document. getElementById('boardGrid');
var playerOneScore = document.getElementById('player1Score');
var playerTwoScore = document.getElementById('player2Score');
var resetButton = document.getElementById('resetButton');
var squares = document.querySelectorAll('.square');
var displayWinner = document.getElementById('displayWinner');
var nextPlayerTurn = document.getElementById('playersTurn');

/* Event Listeners */

window.addEventListener('load', displayPlayerWins);


function displayPlayerWins() {
    game.player1.retrieveWinsFromStorage();
    game.player2.retrieveWinsFromStorage();
    playerOneScore.innerText = `${game.player1.wins}`;
    playerTwoScore.innerText = `${game.player2.wins}`;
  };

// function retrievedStoredWins() {
//   playerOneScore.innerText = game.player1.retrieveWinsFromStorage();
//   playerTwoScore.innerText = game.player2.retrieveWinsFromStorage();
// }


function displayHide(display, hide) {
  display.classList.remove('hidden');
  hide.classList.add('hidden');
}
