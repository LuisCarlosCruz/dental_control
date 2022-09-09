import React, { useContext } from 'react';
import MainContext from '../../store/context';

const Select = () => {
  const { procedureList } = useContext(MainContext);
  return (
    <select name="procedures" required>
      <option value="" selected disabled hidden>
        Choose here
      </option>
      {procedureList.map((procedure, index) => (
        <option key={index} value={procedure}>
          {procedure}
        </option>
      ))}
    </select>
  );
};

export default Select;
