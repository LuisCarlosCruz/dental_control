import React, { useContext } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import MainContext from '../../store/context';

const Procedures = () => {
  const { procedure, setProcedure, procedureList, setProcedureList } = useContext(MainContext);

  const handleCreateProcedure = () => {
    if (!procedure) {
      return alert('Campo inválido');
    }
    if (procedureList.includes(procedure)) {
      return alert('Esse procedimento já existe');
    }
    setProcedureList([...procedureList, procedure]);
  };

  const handleRemoveProcedure = (item) => {
    if (!procedureList.includes(item)) {
      return alert('Esse procedimento não existe');
    }

    const newListProcedure = procedureList.filter((proced) => proced !== item);
    setProcedureList(newListProcedure);
    setProcedure('');
    alert('procedimento removido');
  };

  return (
    <div>
      <p>PROCEDURES</p>
      <Input type="text" placeholder="Procedimento" onChange={(e) => setProcedure(e)} required />
      <Button onClick={handleCreateProcedure} text="Cadastrar procedimento" />
      <Button onClick={() => history.back()} text="Voltar" />
      <ul>
        {procedureList.map((procedure, index) => {
          return (
            <div key={index}>
              <li>{procedure}</li>
              <Button onClick={() => handleRemoveProcedure(procedure)} text="X" />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Procedures;
