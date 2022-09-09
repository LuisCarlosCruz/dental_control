const clearCurrentState = (setName, setValueProcedure, setNumberParcels, setDateStartPayment) => {
  setName('');
  setValueProcedure(0);
  setNumberParcels(0);
  setDateStartPayment('');
};

export default clearCurrentState;
