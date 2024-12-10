import React, { useState } from 'react';

type Props = {};

const Calculator: React.FC<Props> = () => {
  const [display, setDisplay] = useState<string>('0');
  const [currentInput, setCurrentInput] = useState<string>('');
  const [previousInput, setPreviousInput] = useState<string>('');
  const [operator, setOperator] = useState<string | null>(null);
  const [overwrite, setOverwrite] = useState<boolean>(false);

  const handleNumber = (num: string) => {
    if (overwrite) {
      setDisplay(num);
      setCurrentInput(num);
      setOverwrite(false);
    } else {
      if (currentInput === '0' && num === '0') return;
      if (currentInput === '0') {
        setCurrentInput(num);
        setDisplay(num);
      } else {
        setCurrentInput(currentInput + num);
        setDisplay(display === '0' ? num : display + num);
      }
    }
  };

  const handleDecimal = () => {
    if (overwrite) {
      setDisplay('0.');
      setCurrentInput('0.');
      setOverwrite(false);
      return;
    }
    if (!currentInput.includes('.')) {
      setCurrentInput(currentInput + '.');
      setDisplay(display + '.');
    }
  };

  const handleOperator = (op: string) => {
    if (operator && !overwrite) {
      const result = compute();
      setDisplay(result.toString());
      setPreviousInput(result.toString());
    } else {
      setPreviousInput(currentInput);
    }
    setOperator(op);
    setOverwrite(true);
  };

  const compute = (): number => {
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return 0;

    let result = 0;
    switch (operator) {
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

  const handleEqual = () => {
    if (operator && !overwrite) {
      const result = compute();
      setDisplay(result.toString());
      setCurrentInput(result.toString());
      setOperator(null);
      setOverwrite(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setCurrentInput('');
    setPreviousInput('');
    setOperator(null);
    setOverwrite(false);
  };

  const handleDelete = () => {
    if (overwrite) {
      setDisplay('0');
      setCurrentInput('');
      setOverwrite(false);
      return;
    }
    if (currentInput.length === 0) return;
    const newInput = currentInput.slice(0, -1);
    setCurrentInput(newInput);
    setDisplay(newInput === '' ? '0' : newInput);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4 bg-gray-200 text-right p-4 rounded">
          <span className="text-2xl">{display}</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {/* Clear and Delete Buttons */}
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-500 text-white font-bold py-2 rounded hover:bg-red-600"
          >
            AC
          </button>
          <button
            onClick={handleDelete}
            className="bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600"
          >
            DEL
          </button>
          <button
            onClick={() => handleOperator('/')}
            className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
          >
            ÷
          </button>

          {/* Number Buttons */}
          <button
            onClick={() => handleNumber('7')}
            className="bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-400"
          >
            7
          </button>
          <button
            onClick={() => handleNumber('8')}
            className="bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-400"
          >
            8
          </button>
          <button
            onClick={() => handleNumber('9')}
            className="bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-400"
          >
            9
          </button>
          <button
            onClick={() => handleOperator('*')}
            className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
          >
            ×
          </button>

          <button
            onClick={() => handleNumber('4')}
            className="bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-400"
          >
            4
          </button>
          <button
            onClick={() => handleNumber('5')}
            className="bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-400"
          >
            5
          </button>
          <button
            onClick={() => handleNumber('6')}
            className="bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-400"
          >
            6
          </button>
          <button
            onClick={() => handleOperator('-')}
            className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
          >
            -
          </button>

          <button
            onClick={() => handleNumber('1')}
            className="bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-400"
          >
            1
          </button>
          <button
            onClick={() => handleNumber('2')}
            className="bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-400"
          >
            2
          </button>
          <button
            onClick={() => handleNumber('3')}
            className="bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-400"
          >
            3
          </button>
          <button
            onClick={() => handleOperator('+')}
            className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
          >
            +
          </button>

          {/* Zero and Decimal */}
          <button
            onClick={() => handleNumber('0')}
            className="col-span-2 bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-400"
          >
            0
          </button>
          <button
            onClick={handleDecimal}
            className="bg-gray-300 text-black font-bold py-2 rounded hover:bg-gray-400"
          >
            .
          </button>
          <button
            onClick={handleEqual}
            className="bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
