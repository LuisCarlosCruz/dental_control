import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import MainContext from '../../store/context';
import calculateParcel from '../../utils/calculateParcel';
import clearCurrentState from '../../utils/clearCurrentState';
import paymentDates from '../../utils/paymentDates';
import Select from '../../components/select/Select';
import idGenerator from '../../utils/idGenerator';

import { notifySuccess, notifyWarning, ToastNotify } from '../../utils/toastNotify';
import { validateName, validateStartPaymentDate } from '../../validations/validadeInputs';

const Home = () => {
  const {
    name,
    setName,
    procedure,
    setProcedure,
    valueProcedure,
    setValueProcedure,
    numberParcels,
    setNumberParcels,
    allPatients,
    setAllPatients,
    dateStartPayment,
    setDateStartPayment,
    statusBtn,
    setStatusBtn
  } = useContext(MainContext);

  const handleSubmit = (e) => {
    try {
      const parcelValue = calculateParcel(valueProcedure, numberParcels);

      const payDays = paymentDates(dateStartPayment, numberParcels);
      if (!payDays) throw new Error();

      const id = idGenerator(0, 1000);

      const currentPatient = {
        id,
        name,
        procedure,
        valueProcedure,
        numberParcels,
        dateStartPayment,
        parcelValue,
        payDays
      };

      setAllPatients([...allPatients, currentPatient]);
      e.preventDefault();
      e.target.reset();

      clearCurrentState(
        setName,
        setProcedure,
        setValueProcedure,
        setNumberParcels,
        setDateStartPayment
      );

      setStatusBtn(true);
      notifySuccess('Serviço Adicionado');
    } catch (Error) {
      notifyWarning('Data inválida');
      location.reload(true);
    }
  };

  const navigate = useNavigate();
  const handleFilter = () => {
    navigate('/filter');
  };

  const handleCreateProcedure = () => {
    navigate('/procedures');
  };

  return (
    <div>
      <h3>Dentista</h3>
      <section>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome do cliente"
            onChange={(name) => validateName(name, setStatusBtn, setName)}
          />
          <Select onChange={({ target }) => setProcedure(target.value)} />
          <Input
            type="number"
            placeholder="Valor do procedimento"
            onChange={(e) => setValueProcedure(e)}
          />
          <Input
            type="number"
            placeholder="Quantidade de parcelas"
            onChange={(e) => setNumberParcels(e)}
          />
          <label>
            Primeiro pagamento:
            <Input
              type="date"
              onChange={(date) => validateStartPaymentDate(date, setDateStartPayment, setStatusBtn)}
            />
          </label>
          <button type="submit" disabled={statusBtn}>
            Adicionar Serviço
          </button>
          <ToastNotify />
        </form>
        <br />
        <Button onClick={handleCreateProcedure} text="Cadastrar procedimento" />
        <br />
        <Button onClick={handleFilter} text="Filtrar serviços por periodo" />
      </section>
    </div>
  );
};

export default Home;
