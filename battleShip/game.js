import Player from "./player";

export default class Game {
  constructor() {
    this.computerPlayer = new Player(true);
    this.humanPlayer = new Player();
    this.currentPlayer = this.humanPlayer;
  }

  switchTurns() {
    this.currentPlayer =
      this.currentPlayer === this.humanPlayer
        ? this.computerPlayer
        : this.humanPlayer;
  }

  playTurn(x, y) {
    const hit = this.currentPlayer.attackBoard(x, y);
    if (this.currentPlayer === this.computerPlayer) {
      this.switchTurns();
    }
    return hit;
  }

  playComputerTurn() {
    this.currentPlayer.makeRandomMove();
    this.switchTurns();
  }

  checkGameOver() {
    if (
      this.humanPlayer.gameBoard.allShipsSunk() ||
      this.computerPlayer.gameBoard.allShipsSunk()
    ) {
      return true;
    }
    return false;
  }
}
