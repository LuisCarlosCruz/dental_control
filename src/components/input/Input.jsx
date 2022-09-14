import React from 'react';

const Input = ({ type, placeholder, onChange }) => {
  return (
    <>
      <input
        className="input"
        required
        type={type}
        placeholder={placeholder}
        onChange={({ target }) => onChange(target.value)}></input>
    </>
  );
};

export default Input;
