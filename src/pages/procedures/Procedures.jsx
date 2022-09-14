import React, { useContext } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import MainContext from '../../store/context';
import { notifyError, notifySuccess, notifyWarning, ToastNotify } from '../../utils/toastNotify';
import { validateProcedure } from '../../validations/validadeInputs';
import './procedure.css';

const Procedures = () => {
  const { procedure, setProcedure, procedureList, setProcedureList } = useContext(MainContext);

  const disabledBtn = !procedure;

  const handleCreateProcedure = () => {
    if (!procedure) {
      return notifyError('Procedimento inválido');
    }
    if (procedureList.includes(procedure)) {
      setProcedure('');
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
    <div className="container">
      <h3>Procedimentos</h3>
      <Input
        type="text"
        placeholder="Procedimento"
        onChange={(procedure) => validateProcedure(procedure, setProcedure)}
        required
      />
      <button onClick={handleCreateProcedure} disabled={disabledBtn}>
        Cadastrar procedimento
      </button>
      <ToastNotify />
      <span>
        {procedureList.map((procedure, index) => {
          return (
            <div key={index} className="procedureList">
              <p>{procedure}</p>
              <Button onClick={() => handleRemoveProcedure(procedure)} text="X" />
            </div>
          );
        })}
      </span>
      <Button onClick={() => history.back()} text="Voltar" className="back" />
    </div>
  );
};

export default Procedures;
