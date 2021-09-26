class Player {
  constructor(player, token) {
    this.id = player;
    this.token = token;
    this.wins =  0;
    this.winner = false;
  }

  saveWinsToStorage() {
      var stringifyWins = JSON.stringify(this.wins);
      localStorage.setItem(`${this.token} wins:`, stringifyWins);
    };

    retrieveWinsFromStorage() {
      var retrievedWins = localStorage.getItem(`${this.token} wins:`);
      this.wins = JSON.parse(retrievedWins) || 0;
      return this.wins;
    }

  };
