const clearCurrentState = (
  setName,
  setProcedure,
  setValueProcedure,
  setNumberParcels,
  setDateStartPayment
) => {
  setName('');
  setProcedure([]);
  setValueProcedure(0);
  setNumberParcels(0);
  setDateStartPayment('');
};

export default clearCurrentState;
