import React from 'react';
import Input from '../../components/input/Input';
import convertDate from '../../utils/convertDate';

const Filter = () => {
  const handleInitial = (date) => {
    const newDate = convertDate(date);
    console.log(newDate);
  };

  const handleFinal = (date) => {
    const newDate = convertDate(date);
    console.log(newDate);
  };

  return (
    <div>
      <h2>FILTRAR POR PERIODO</h2>
      <label>
        data inicial:
        <Input type="date" onChange={(date) => handleInitial(date)} />
      </label>
      <label>
        data final:
        <Input type="date" onChange={(date) => handleFinal(date)} />
      </label>
      <button>voltar</button>
      <button>Filtrar</button>
    </div>
  );
};

export default Filter;
