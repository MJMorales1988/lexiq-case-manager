import React from 'react';

const Button = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
