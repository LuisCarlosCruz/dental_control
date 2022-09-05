import React, { useContext } from 'react';
import MainContext from '../../store/context';

const Payments = () => {
  const { allPatients } = useContext(MainContext);

  return (
    <div>
      <table>{allPatients && <h3>map de pagamentos</h3>}</table>
    </div>
  );
};

export default Payments;
