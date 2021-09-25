class Game {
  constructor(playerOne, playerTwo) {
    this.player1 = new Player(playerOne);
    this.player2 = new Player(playerTwo);
    this.playerTurn = this.player1;
    this.isGameActive = true;
    this.isDraw = false;
    this.board = [0,1,2,
                  3,4,5,
                  6,7,8];
  }

  turnGameOff() {
    this.isGameActive = !this.isGameActive;
  }
