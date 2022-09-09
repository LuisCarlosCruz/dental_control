const sumValuesPeriod = (filteredPatients) => {
  const initial = 0;
  const sum = filteredPatients.reduce((acc, { parcelValue }) => {
    return acc + Number(parcelValue);
  }, initial);
  return sum.toFixed(2);
};

export default sumValuesPeriod;
