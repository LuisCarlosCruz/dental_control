import React, { useContext } from 'react';
import MainContext from '../../store/context';

const Select = ({ onChange }) => {
  const { procedureList } = useContext(MainContext);
  return (
    <>
      <select
        className="input"
        name="procedures"
        required
        defaultValue=""
        onChange={(e) => onChange(e)}>
        <option value="" disabled hidden>
          escolher procedimento
        </option>
        {procedureList.map((procedure, index) => (
          <option key={index} value={procedure}>
            {procedure}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
