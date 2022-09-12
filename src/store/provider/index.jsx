import React, { useState } from 'react';
import MainContext from '../context';

const MainProvider = ({ children }) => {
  const listProcedureDefault = ['limpeza', 'clareamento', 'aparelho'];
  const [name, setName] = useState('');
  const [procedure, setProcedure] = useState('');
  const [numberParcels, setNumberParcels] = useState(0);
  const [valueProcedure, setValueProcedure] = useState(0);
  const [allPatients, setAllPatients] = useState([]);
  const [dateStartPayment, setDateStartPayment] = useState('');
  const [valueParcel, setValueParcel] = useState(0);
  const [initialPeriod, setInitialPeriod] = useState('');
  const [finalPeriod, setFinalPeriod] = useState('');
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [procedureList, setProcedureList] = useState(listProcedureDefault);
  const [statusBtn, setStatusBtn] = useState(true);

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
    setValueParcel,
    initialPeriod,
    setInitialPeriod,
    finalPeriod,
    setFinalPeriod,
    filteredPatients,
    setFilteredPatients,
    procedureList,
    setProcedureList,
    statusBtn,
    setStatusBtn
  };

  return <MainContext.Provider value={contextValues}>{children}</MainContext.Provider>;
};

export default MainProvider;
