// src/helpers/calculatorLogic.test.ts

import {
  computeResult,
  CalculatorState,
  Operator,
} from "../helpers/calculatorLogic";

describe("computeResult", () => {
  const createState = (
    previousInput: string,
    currentInput: string,
    operator: Operator | null
  ): CalculatorState => ({
    display: "",
    currentInput,
    previousInput,
    operator,
    overwrite: false,
  });

  test("adds two numbers correctly", () => {
    const state = createState("5", "3", "+");
    expect(computeResult(state)).toBe(8);
  });

  test("subtracts two numbers correctly", () => {
    const state = createState("10", "4", "-");
    expect(computeResult(state)).toBe(6);
  });

  test("multiplies two numbers correctly", () => {
    const state = createState("7", "6", "*");
    expect(computeResult(state)).toBe(42);
  });

  test("divides two numbers correctly", () => {
    const state = createState("20", "5", "/");
    expect(computeResult(state)).toBe(4);
  });

  test("handles division by zero gracefully", () => {
    const state = createState("20", "0", "/");
    expect(computeResult(state)).toBe(0);
  });

  test("returns current input when operator is null", () => {
    const state = createState("", "15", null);
    expect(computeResult(state)).toBe(15);
  });

  test("returns 0 when previousInput is invalid", () => {
    const state = createState("a", "5", "+");
    expect(computeResult(state)).toBe(0);
  });

  test("returns 0 when currentInput is invalid", () => {
    const state = createState("5", "b", "+");
    expect(computeResult(state)).toBe(0);
  });

  test("returns 0 when both inputs are invalid", () => {
    const state = createState("a", "b", "+");
    expect(computeResult(state)).toBe(0);
  });

  test("handles unexpected operator by returning current input", () => {
    const state = createState("5", "10", '%' as Operator); 
    expect(computeResult(state)).toBe(10);
  });
});


