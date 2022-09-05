import React from 'react';

const Input = ({ type, placeholder, onChange }) => {
  return (
    <div>
      <label>
        <input
          required
          type={type}
          placeholder={placeholder}
          onChange={({ target }) => onChange(target.value)}></input>
      </label>
    </div>
  );
};

export default Input;
