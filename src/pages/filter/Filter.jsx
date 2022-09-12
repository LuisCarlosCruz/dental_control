import React, { useContext } from 'react';
import Input from '../../components/input/Input';
import convertDate from '../../utils/convertDate';
import MainContext from '../../store/context/index';
import Button from '../../components/button/Button';
import periodFilter from '../../utils/periodFilter';
import Table from '../../components/table/table';
import sumValuesPeriod from '../../utils/sumValuesPeriod';
import { notifyError, ToastNotify } from '../../utils/toastNotify';

const Filter = () => {
  const {
    initialPeriod,
    setInitialPeriod,
    finalPeriod,
    setFinalPeriod,
    allPatients,
    filteredPatients,
    setFilteredPatients
  } = useContext(MainContext);

  const handleInitial = (date) => {
    const newDate = convertDate(date);
    setInitialPeriod(newDate);
  };

  const handleFinal = (date) => {
    const newDate = convertDate(date);
    setFinalPeriod(newDate);
  };

  const handleFilter = () => {
    const dataInitial = new Date(initialPeriod).getTime();
    const dataFinal = new Date(finalPeriod).getTime();
    if (dataInitial > dataFinal) {
      return notifyError('Data inicial inválida');
    }
    const patientsFilter = periodFilter(initialPeriod, finalPeriod, allPatients);
    setFilteredPatients(patientsFilter);
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
      <Button onClick={() => history.back()} text="Voltar" />
      <Button onClick={() => handleFilter()} text="Filtrar" />
      <ToastNotify />
      <Button onClick={() => setFilteredPatients([])} text="Limpar" />
      <p>Valor a receber R$: {sumValuesPeriod(filteredPatients)}</p>
      <Table filteredPatients={filteredPatients} />
    </div>
  );
};

export default Filter;
