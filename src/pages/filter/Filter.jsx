import React, { useContext } from 'react';
import Input from '../../components/input/Input';
import convertDate from '../../utils/convertDate';
import MainContext from '../../store/context/index';
import Button from '../../components/button/Button';
import periodFilter from '../../utils/periodFilter';
import Table from '../../components/table/table';
import sumValuesPeriod from '../../utils/sumValuesPeriod';
import { notifyError, ToastNotify } from '../../utils/toastNotify';
import './filter.css';

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
    <div className="container">
      <h2>FILTRAR POR PERIODO</h2>
      <section>
        <div>
          data inicial:
          <Input type="date" onChange={(date) => handleInitial(date)} />
        </div>
        <div>
          data final:
          <Input type="date" onChange={(date) => handleFinal(date)} />
        </div>
      </section>
      <div className="buttonsContainer">
        <Button onClick={() => handleFilter()} text="Filtrar" className="filter" />
        <Button onClick={() => setFilteredPatients([])} text="Limpar" className="clear" />
        <Button onClick={() => history.back()} text="Voltar" className="back" />
      </div>
      <ToastNotify />
      <p>Valor a receber R$: {sumValuesPeriod(filteredPatients)}</p>
      <Table filteredPatients={filteredPatients} />
    </div>
  );
};

export default Filter;
