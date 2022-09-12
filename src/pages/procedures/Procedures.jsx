import React, { useContext, useState } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import MainContext from '../../store/context';
import { notifyError, notifySuccess, notifyWarning, ToastNotify } from '../../utils/toastNotify';
import { validateProcedure } from '../../validations/validadeInputs';

const Procedures = () => {
  const { procedure, setProcedure, procedureList, setProcedureList } = useContext(MainContext);

  const [statusBtn, setStatusBtn] = useState(true);

  const handleCreateProcedure = () => {
    if (!procedure) {
      return notifyError('Procedimento inválido');
    }
    if (procedureList.includes(procedure)) {
      return notifyWarning('Esse procedimento já existe');
    }
    setProcedureList([...procedureList, procedure]);
  };

  const handleRemoveProcedure = (item) => {
    const newListProcedure = procedureList.filter((proced) => proced !== item);
    setProcedureList(newListProcedure);
    setProcedure('');
    return notifySuccess('Procedimento removido');
  };

  return (
    <div>
      <p>PROCEDURES</p>
      <Input
        type="text"
        placeholder="Procedimento"
        onChange={(procedure) => validateProcedure(procedure, setProcedure, setStatusBtn)}
        required
      />
      <button onClick={handleCreateProcedure} disabled={statusBtn}>
        Cadastrar procedimento
      </button>
      <ToastNotify />
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
