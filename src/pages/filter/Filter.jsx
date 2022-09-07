import React, { useContext } from 'react';
import Input from '../../components/input/Input';
import convertDate from '../../utils/convertDate';
import MainContext from '../../store/context/index';
import Button from '../../components/button/Button';
import periodFilter from '../../utils/periodFilter';

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
    // VALIDAR AS DATAS ANTES DE FILTRAR
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
      <Button onClick={() => {}} text="Limpar" />
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>valorParcela</th>
            <th>DataPagamento</th>
          </tr>
          {filteredPatients.length > 0 &&
            filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.parcelValue}</td>
                <td>{patient.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
