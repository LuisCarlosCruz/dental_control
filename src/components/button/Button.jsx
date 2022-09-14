import React from 'react';

const Button = ({ onClick, text, className = '' }) => {
  return (
    <div>
      <button type="button" onClick={() => onClick()} className={className}>
        {text}
      </button>
    </div>
  );
};

export default Button;
