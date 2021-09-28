class Game {
  constructor() {
    this.player1 = new Player('player1', '🐱');
    this.player2 = new Player('player2', '🐶');
    this.playerTurn = this.player1;
    this.turnsTaken = 0;
    this.isDraw = false;
    this.board =  [
       '', '', '',
       '', '', '',
       '', '', ''
     ];
  }

  nextTurn() {
    if(this.playerTurn === this.player1) {
    this.playerTurn = this.player2;
    nextPlayerTurn.innerText = `It's ${game.playerTurn.token}'s turn!`
    } else {
   this.playerTurn = this.player1;
    nextPlayerTurn.innerText = `It's ${game.playerTurn.token}'s turn!`
    }
  }

  updateGameSquare(square) {
    var gameSquare = parseInt(square);
    this.board[gameSquare] = this.playerTurn.token;
    this.turnsTaken ++;
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
      var player1Winner = this.checkWinningCombo(this.board, '🐱');
      var player2Winner = this.checkWinningCombo(this.board, '🐶');
    if (player1Winner) {
        this.player1.winner = true;
        this.player1.wins++;
        return true;
    } else if (player2Winner) {
        this.player2.winner = true;
        this.player2.wins++;
        return true;
    } else {
        return false;
      }
    }
  }
  checkForDraw() {
    if(this.turnsTaken === 9) {
      this.isDraw = true;
    }
  }
  gameReset() {
    location.reload();
  }
}
