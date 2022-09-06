import React from 'react';

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button type="button" onClick={() => onClick()}>
        {text}
      </button>
    </div>
  );
};

export default Button;