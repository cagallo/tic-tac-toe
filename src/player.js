class Player {
  constructor(player, token) {
    this.id = player;
    this.token = token;
    this.wins =  0;
    this.winner = false;
  }

  saveWinsToStorage() {
      localStorage.setItem(`${this.token}`, JSON.stringify(this.wins));
  }

    retrieveWinsFromStorage() {
      this.wins = JSON.parse(localStorage.getItem(`${this.token}`)) || 0;
      return this.wins;
  }
}
