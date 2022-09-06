import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import MainContext from '../../store/context';
import calculateParcel from '../../utils/calculateParcel';
import clearCurrentState from '../../utils/clearCurrentState';
import paymentDates from '../../utils/paymentDates';

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

      const currentPatient = {
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

      alert('Serviço Adicionado');
    } catch (Error) {
      alert('Data inválida');
      location.reload(true);
    }
  };

  const navigate = useNavigate();

  const handleFilter = () => {
    navigate('/filter');
  };

  return (
    <div>
      <h3>Dentista</h3>
      <section>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Nome do cliente" onChange={(e) => setName(e)} />
          <Input type="text" placeholder="Procedimento" onChange={(e) => setProcedure(e)} />
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
            <Input type="date" onChange={(e) => setDateStartPayment(e)} />
          </label>
          <button type="submit">Adicionar Serviço</button>
        </form>
        <br />
        <Button onClick={handleFilter} text="Filtrar serviços por periodo" />
      </section>
    </div>
  );
};

export default Home;
