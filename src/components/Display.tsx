// src/components/Display.tsx

import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div
      data-testid="calculator-display"
      className="mb-4 bg-gray-200 text-right p-4 rounded"
    >
      <span className="text-2xl">{value}</span>
    </div>
  );
};

export default Display;
