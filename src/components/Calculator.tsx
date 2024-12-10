// src/components/Calculator.tsx

import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { computeResult, initialState, CalculatorState, Operator } from '../helpers/calculatorLogic';

const Calculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  const handleNumber = (num: string) => {
    if (state.overwrite) {
      setState({
        ...state,
        display: num,
        currentInput: num,
        overwrite: false,
      });
    } else {
      const newInput = state.currentInput === '0' && num === '0'
        ? state.currentInput
        : state.currentInput === '0'
        ? num
        : state.currentInput + num;

      setState({
        ...state,
        currentInput: newInput,
        display: newInput,
      });
    }
  };

  const handleDecimal = () => {
    if (state.overwrite) {
      setState({
        ...state,
        display: '0.',
        currentInput: '0.',
        overwrite: false,
      });
      return;
    }
    if (!state.currentInput.includes('.')) {
      const newInput = state.currentInput === '' ? '0.' : state.currentInput + '.';
      setState({
        ...state,
        currentInput: newInput,
        display: newInput,
      });
    }
  };

  const handleOperator = (op: Operator) => {
    if (state.operator && !state.overwrite) {
      const result = computeResult(state);
      setState({
        ...state,
        display: result.toString(),
        previousInput: result.toString(),
        operator: op,
        overwrite: true,
      });
    } else {
      setState({
        ...state,
        operator: op,
        previousInput: state.currentInput,
        overwrite: true,
      });
    }
  };

  const handleEqual = () => {
    if (state.operator && !state.overwrite) {
      const result = computeResult(state);
      setState({
        ...state,
        display: result.toString(),
        currentInput: result.toString(),
        operator: null,
        overwrite: true,
      });
    }
  };

  const handleClear = () => {
    setState(initialState);
  };

  const handleDelete = () => {
    if (state.overwrite) {
      setState({
        ...state,
        display: '0',
        currentInput: '',
        overwrite: false,
      });
      return;
    }
    if (state.currentInput.length === 0) return;
    const newInput = state.currentInput.slice(0, -1);
    setState({
      ...state,
      currentInput: newInput,
      display: newInput === '' ? '0' : newInput,
    });
  };

  return (
    <div
      data-testid="calculator-container"
      className="flex items-center justify-center min-h-screen bg-gray-100 p-4"
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6" data-testid="calculator-box">
        <Display value={state.display} />
        <ButtonPanel
          onNumber={handleNumber}
          onOperator={handleOperator}
          onDecimal={handleDecimal}
          onClear={handleClear}
          onDelete={handleDelete}
          onEqual={handleEqual}
        />
      </div>
    </div>
  );
};

export default Calculator;
