class Player {
  constructor(player, icon, wins) {
    this.id = player;
    this.icon = icon;
    this.wins = wins || 0;
  }

  saveWinsToStorage() {
    var savedWins = JSON.parse(localStorage.getItem(this.id)) || 0;
    savedWins = this.wins;
    localStorage.setItem(this.id, savedWins);
  }

  retrieveWinsFromStorage() {
    var savedWins = JSON.parse(localStorage.getItem(this.id)) || 0;
    this.wins = savedWins;
  }

}
