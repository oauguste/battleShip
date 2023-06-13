export default class BattleShips {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
    if (this.hits === this.length) {
      this.sunk = true;
    }
    return this.hits;
  }
  isSunk() {
    return this.sunk;
  }
}
