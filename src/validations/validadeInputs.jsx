import { notifyWarning } from '../utils/toastNotify';

const reg = /[0-9]+/;
const validateName = (name, setName) => {
  if (reg.exec(name)) {
    return notifyWarning('Nome inválido');
  }
  setName(name);
};

const validateStartPaymentDate = (date, setDateStartPayment) => {
  const dateNow = new Date().getTime();
  const dateObj = new Date(date).getTime();
  if (dateObj < dateNow) {
    setDateStartPayment('');
    return notifyWarning('Essa data já passou');
  }
  setDateStartPayment(date);
};

const validateProcedure = (procedure, setProcedure) => {
  if (reg.exec(procedure)) {
    return notifyWarning('Procedimento inválido');
  }
  setProcedure(procedure);
};

export { validateName, validateStartPaymentDate, validateProcedure };
