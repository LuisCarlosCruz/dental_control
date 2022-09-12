import { notifyWarning } from '../utils/toastNotify';

const validateName = (name, setStatusBtn, setName) => {
  const reg = /[0-9]+/;
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

export { validateName, validateStartPaymentDate };
