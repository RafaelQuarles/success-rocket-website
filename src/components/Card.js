import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`mb-8 bg-gray-100 rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    {children}
  </div>
);

export default Card;
