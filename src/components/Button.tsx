// src/components/Button.tsx

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  // Generate a safe test ID by replacing spaces and special characters
  const testId = `button-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <button
      onClick={onClick}
      className={`font-bold py-2 rounded hover:opacity-75 ${className}`}
      data-testid={testId}
    >
      {label}
    </button>
  );
};

export default Button;
