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
import './home.css';

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
    setDateStartPayment
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

      notifySuccess('Serviço Adicionado');
    } catch (Error) {
      notifyWarning('Data inválida');
      location.reload(true);
    }
  };

  const disabledBtn = !name || !procedure || !valueProcedure || !numberParcels || !dateStartPayment;

  const navigate = useNavigate();
  const handleFilter = () => {
    navigate('/filter');
  };

  const handleCreateProcedure = () => {
    navigate('/procedures');
  };

  return (
    <div className="home">
      <section className="section-inputs">
        <form onSubmit={handleSubmit} className="form">
          <h3>Dentista</h3>
          <Input
            type="text"
            placeholder="Nome do cliente"
            onChange={(name) => validateName(name, setName)}
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
          Primeiro pagamento:
          <Input
            type="date"
            onChange={(date) => validateStartPaymentDate(date, setDateStartPayment)}
          />
          <button type="submit" disabled={disabledBtn}>
            Adicionar Serviço
          </button>
          <ToastNotify />
          <div>
            <Button
              className={'createButton'}
              onClick={handleCreateProcedure}
              text="Cadastrar procedimento"
            />
            <Button
              className={'filterButton'}
              onClick={handleFilter}
              text="Filtrar serviços por periodo"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Home;
