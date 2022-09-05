import React, { useState } from 'react';
import MainContext from '../context';

const MainProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [procedure, setProcedure] = useState('');
  const [numberParcels, setNumberParcels] = useState(0);
  const [valueProcedure, setValueProcedure] = useState(0);
  const [allPatients, setAllPatients] = useState([]);
  const [dateStartPayment, setDateStartPayment] = useState('');
  const [valueParcel, setValueParcel] = useState(0);

  const contextValues = {
    name,
    setName,
    procedure,
    setProcedure,
    numberParcels,
    setNumberParcels,
    valueProcedure,
    setValueProcedure,
    allPatients,
    setAllPatients,
    dateStartPayment,
    setDateStartPayment,
    valueParcel,
    setValueParcel
  };

  // console.log(contextValues);

  return <MainContext.Provider value={contextValues}>{children}</MainContext.Provider>;
};

export default MainProvider;
