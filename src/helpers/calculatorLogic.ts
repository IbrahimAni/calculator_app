// src/helpers/calculatorLogic.ts

export type Operator = '+' | '-' | '*' | '/' ;

export interface CalculatorState {
  display: string;
  currentInput: string;
  previousInput: string;
  operator: Operator | null;
  overwrite: boolean;
}

export const initialState: CalculatorState = {
  display: '0',
  currentInput: '',
  previousInput: '',
  operator: null,
  overwrite: false,
};

export const computeResult = (state: CalculatorState): number => {
    const current = parseFloat(state.currentInput);
    
    // If operator is null, return currentInput or 0 if invalid
    if (state.operator === null) {
      return isNaN(current) ? 0 : current;
    }
  
    const prev = parseFloat(state.previousInput);
    
    // If either input is invalid, return 0
    if (isNaN(prev) || isNaN(current)) return 0;
  
    let result = 0;
    switch (state.operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = current !== 0 ? prev / current : 0;
        break;
      default:
        result = current;
    }
    return result;
  };