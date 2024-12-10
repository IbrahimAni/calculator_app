// src/components/ButtonPanel.tsx

import React from 'react';
import Button from './Button';
import { Operator } from '../helpers/calculatorLogic';

interface ButtonPanelProps {
  onNumber: (num: string) => void;
  onOperator: (op: Operator) => void;
  onDecimal: () => void;
  onClear: () => void;
  onDelete: () => void;
  onEqual: () => void;
}

const ButtonPanel: React.FC<ButtonPanelProps> = ({
  onNumber,
  onOperator,
  onDecimal,
  onClear,
  onDelete,
  onEqual,
}) => {
  return (
    <div data-testid="button-panel" className="grid grid-cols-4 gap-2">
      {/* Clear and Delete Buttons */}
      <Button
        label="AC"
        onClick={onClear}
        className="col-span-2 bg-red-500 text-white"
      />
      <Button
        label="DEL"
        onClick={onDelete}
        className="bg-yellow-500 text-white"
      />
      <Button
        label="÷"
        onClick={() => onOperator('/')}
        className="bg-blue-500 text-white"
      />

      {/* Number Buttons */}
      <Button
        label="7"
        onClick={() => onNumber('7')}
        className="bg-gray-300 text-black"
      />
      <Button
        label="8"
        onClick={() => onNumber('8')}
        className="bg-gray-300 text-black"
      />
      <Button
        label="9"
        onClick={() => onNumber('9')}
        className="bg-gray-300 text-black"
      />
      <Button
        label="×"
        onClick={() => onOperator('*')}
        className="bg-blue-500 text-white"
      />

      <Button
        label="4"
        onClick={() => onNumber('4')}
        className="bg-gray-300 text-black"
      />
      <Button
        label="5"
        onClick={() => onNumber('5')}
        className="bg-gray-300 text-black"
      />
      <Button
        label="6"
        onClick={() => onNumber('6')}
        className="bg-gray-300 text-black"
      />
      <Button
        label="-"
        onClick={() => onOperator('-')}
        className="bg-blue-500 text-white"
      />

      <Button
        label="1"
        onClick={() => onNumber('1')}
        className="bg-gray-300 text-black"
      />
      <Button
        label="2"
        onClick={() => onNumber('2')}
        className="bg-gray-300 text-black"
      />
      <Button
        label="3"
        onClick={() => onNumber('3')}
        className="bg-gray-300 text-black"
      />
      <Button
        label="+"
        onClick={() => onOperator('+')}
        className="bg-blue-500 text-white"
      />

      {/* Zero and Decimal */}
      <Button
        label="0"
        onClick={() => onNumber('0')}
        className="col-span-2 bg-gray-300 text-black"
      />
      <Button
        label="."
        onClick={onDecimal}
        className="bg-gray-300 text-black"
      />
      <Button
        label="="
        onClick={onEqual}
        className="bg-green-500 text-white"
      />
    </div>
  );
};

export default ButtonPanel;
