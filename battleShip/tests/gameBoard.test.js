import { describe, expect, test } from "vitest";
import gameBoard from "../gameBoard";

describe("gameBoard", () => {
  test("should initialize with correct size", () => {
    const board = new gameBoard(10);
    expect(board.gameBoard.length).toBe(10);
    board.gameBoard.forEach((row) => {
      expect(row.length).toBe(10);
    });
  });

  test("should place a ship at the correct location", () => {
    const board = new gameBoard(10);
    board.placeShip(5, 5);
    expect(board.gameBoard[5][5]).toBe(1);
  });

  test("should throw error for invalid ship location", () => {
    const board = new gameBoard(10);
    expect(() => board.placeShip(10, 10)).toThrow(
      "Invalid coordinates"
    );
  });

  test("should correctly record a hit", () => {
    const board = new gameBoard(10);
    board.placeShip(5, 5);
    expect(board.receiveAttack(5, 5)).toBe(true);
    expect(board.gameBoard[5][5]).toBe("X");
  });

  test("should correctly record a miss", () => {
    const board = new gameBoard(10);
    expect(board.receiveAttack(5, 5)).toBe(false);
    expect(board.gameBoard[5][5]).toBe("O");
  });

  test("should throw error for invalid attack location", () => {
    const board = new gameBoard(10);
    expect(() => board.receiveAttack(10, 10)).toThrow(
      "Invalid coordinates"
    );
  });
});
