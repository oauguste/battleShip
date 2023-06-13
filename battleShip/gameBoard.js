import BattleShips from "../BattleShips";

export default class gameBoard {
  constructor(size) {
    this.size = size;
    this.gameBoard = Array(size)
      .fill()
      .map(() => Array(size).fill(0));
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(length, startX, startY, orientation) {
    if (
      startX < 0 ||
      startY > this.size - 1 ||
      startY < 0 ||
      startY > this.size - 1
    ) {
      throw new Error("Invalid coordinates");
    }
    const endX =
      orientation === "horizontal"
        ? startX + length - 1
        : startX;
    const endY =
      orientation === "vertical"
        ? startY + length - 1
        : startY;
    if (endX > this.size - 1 || endY > this.size - 1) {
      throw new Error("Ship cannot fit on board");
    }

    // Check if ship overlaps with any existing ship
    for (let i = startX; i <= endX; i++) {
      for (let j = startY; j <= endY; j++) {
        if (this.gameBoard[i][j] !== 0) {
          throw new Error(
            "Ship overlaps with an existing ship"
          );
        }
      }
    }
    // Place ship on the board
    const newShip = new BattleShips(length);
    for (let i = startX; i <= endX; i++) {
      for (let j = startY; j <= endY; j++) {
        this.gameBoard[i][j] = newShip;
      }
    }
    this.ships.push(newShip);
    this.gameBoard[x][y] = 1; // '1' to indicate a ship.
  }

  receiveAttack(x, y) {
    if (
      x < 0 ||
      x > this.size - 1 ||
      y < 0 ||
      y > this.size - 1
    ) {
      throw new Error("Invalid coordinates");
    }
    const target = this.gameBoard[x][y];
    if (target instanceof BattleShips) {
      target.hit();
      if (target.isSunk()) {
        console.log("Ship sunk!");
      }
      return true;
    } else {
      this.missedAttacks.push({ x, y });
      return false;
    }
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}
