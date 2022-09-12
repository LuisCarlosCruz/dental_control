import { notifyWarning } from '../utils/toastNotify';

const reg = /[0-9]+/;
const validateName = (name, setStatusBtn, setName) => {
  if (reg.exec(name) || !name) {
    setStatusBtn(true);
    return notifyWarning('Nome inválido');
  }
  setStatusBtn(false);
  setName(name);
};

const validateStartPaymentDate = (date, setDateStartPayment, setStatusBtn) => {
  const dateNow = new Date().getTime();
  const dateObj = new Date(date).getTime();
  if (dateObj < dateNow) {
    setStatusBtn(true);
    return notifyWarning('Essa data já passou');
  }
  setStatusBtn(false);
  setDateStartPayment(date);
};

const validateProcedure = (procedure, setProcedure, setStatusBtn) => {
  if (reg.exec(procedure) || !procedure) {
    setStatusBtn(true);
    return notifyWarning('Procedimento inválido');
  }
  setStatusBtn(false);
  setProcedure(procedure);
};

export { validateName, validateStartPaymentDate, validateProcedure };
