import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import id_16 from 'id-16';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import MainContext from '../../store/context';
import calculateParcel from '../../utils/calculateParcel';
import clearCurrentState from '../../utils/clearCurrentState';
import paymentDates from '../../utils/paymentDates';
import Select from '../../components/select/Select';

const Home = () => {
  const {
    name,
    setName,
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

  const id = id_16(5);

  const handleSubmit = (e) => {
    try {
      const parcelValue = calculateParcel(valueProcedure, numberParcels);

      const payDays = paymentDates(dateStartPayment, numberParcels);
      if (!payDays) throw new Error();

      const currentPatient = {
        id,
        name,
        valueProcedure,
        numberParcels,
        dateStartPayment,
        parcelValue,
        payDays
      };

      setAllPatients([...allPatients, currentPatient]);
      e.preventDefault();
      e.target.reset();

      clearCurrentState(setName, setValueProcedure, setNumberParcels, setDateStartPayment);

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

  const handleCreateProcedure = () => {
    navigate('/procedures');
  };

  return (
    <div>
      <h3>Dentista</h3>
      <section>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Nome do cliente" onChange={(e) => setName(e)} />
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
            <Input type="date" onChange={(e) => setDateStartPayment(e)} />
          </label>
          <button type="submit">Adicionar Serviço</button>
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
