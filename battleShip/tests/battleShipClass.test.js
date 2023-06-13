import { describe, expect, test } from "vitest";
import BattleShips from "../battleShips";

describe("isSunk()", () => {
  test("should return true when the ship is sunk call happen", () => {
    const destroyer = new BattleShips(3);
    expect(destroyer.isSunk()).toBe(destroyer.sunk);
  });

  test("should add one to hits when the ship is hit", () => {
    const destroyer = new BattleShips(3);
    expect(destroyer.hit()).toBe(1);
  });

  test("should initialize ship with the correct length", () => {
    const destroyer = new BattleShips(3);
    expect(destroyer.length).toBe(3);
    expect(destroyer.hits).toBe(0);
    expect(destroyer.sunk).toBe(false);
  });

  test("should increase hits when hit", () => {
    const destroyer = new BattleShips(3);
    destroyer.hit();
    expect(destroyer.hits).toBe(1);
    expect(destroyer.sunk).toBe(false);
  });

  test("sunk value === true when ship is hit 3 times", () => {
    const destroyer = new BattleShips(3);
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.hits).toBe(3);
    expect(destroyer.sunk).toBe(true);
  });

  test("should return correct sunk status", () => {
    const ship = new BattleShips(3);
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
