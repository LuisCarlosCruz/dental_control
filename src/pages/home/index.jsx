import React, { useContext } from 'react';
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

      console.log(payDays, 'RETURN');

      const currentPatient = {
        name,
        procedure,
        valueProcedure,
        numberParcels,
        dateStartPayment,
        parcelValue
      };

      setAllPatients([...allPatients, currentPatient]);
      e.preventDefault();
      e.target.reset();

      // LIMPAR STATE CURRENT
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

  const handleFilter = () => {
    console.log('FILTROU');
  };

  // useEffect(() => {
  //   let year = {};
  //   const twelve = 12;

  //   for (let i = 1; i <= twelve; i++) {
  //     year[[i]] = [];
  //   }

  //   setCalendar(year);
  // }, []);

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
        <Button onClick={handleFilter} text="filtrar" />
      </section>
    </div>
  );
};

export default Home;
