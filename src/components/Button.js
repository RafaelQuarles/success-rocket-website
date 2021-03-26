import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const colors = {
  default: 'bg-primary',
  purple: 'bg-secondary',
  blue: 'bg-tertiary'
};

const Button = ({ children, className = '', size, color }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        ${colors[color] || colors.default}
        hover:${colors[color] || colors.default}-darker
        rounded
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;
