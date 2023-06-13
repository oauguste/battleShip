import gameBoard from "./gameBoard";

export default class Player {
  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.gameBoard = new gameBoard(10);
  }
  attackBoard(x, y) {
    return this.gameBoard.receiveAttack(x, y);
  }

  makeRandomMove() {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (this.gameBoard.gameBoard[x][y] !== 0);
    return this.attackBoard(x, y);
  }
}
