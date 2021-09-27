class Game {
  constructor() {
    this.player1 = new Player('player1', '🐱');
    this.player2 = new Player('player2', '🐶');
    this.playerTurn = this.player1;
    this.turnsTaken = 0;
    this.isDraw = false;
    this.board = [0,1,2,
                  3,4,5,
                  6,7,8];
  }

  nextTurn() {
    if(this.playerTurn === this.player1) {
    return this.playerTurn = this.player2;
    nextPlayerTurn.innerText = `It's ${game.playerTurn.token}'s turn!`
    } else {
   return this.playerTurn = this.player1;
    nextPlayerTurn.innerText = `It's ${game.playerTurn.token}'s turn!`
    }
  }

  updateGameSquare(square) {
    var gameSquare = parseInt(square);
    this.board[gameSquare] = this.playerTurn.token;
    this.turnsTaken += 1;
  }

  checkWinningCombo(board, token) {
    if (
     board[0] === token && board[3] === token && board[6] === token ||
     board[1] === token && board[4] === token && board[7] === token ||
     board[2] === token && board[5] === token && board[8] === token ||
     board[0] === token && board[1] === token && board[2] === token ||
     board[3] === token && board[4] === token && board[5] === token ||
     board[6] === token && board[7] === token && board[8] === token ||
     board[0] === token && board[4] === token && board[8] === token ||
     board[2] === token && board[4] === token && board[6] === token
   ) {
     return true;
   } else {
     return false;
      }
    }
    checkWinner() {
    for (var i = 0; i < this.board.length; i++) {
      var playerOne = this.checkWinningCombo(this.board, '🐱');
      var playerTwo = this.checkWinningCombo(this.board, '🐶');
    if (playerOne) {
        this.player1.winner = true;
        this.player1.wins++;
        return true;
    } else if (playerTwo) {
        this.player2.winner = true;
        this.player2.wins++;
        return true;
    } else {
        return false;
      }
    }
  }
}
