const sumValuesPeriod = (filteredPatients) => {
  const initial = 0;
  const sum = filteredPatients.reduce((acc, { parcelValue }) => {
    return acc + Number(parcelValue);
  }, initial);
  console.log(sum.toFixed(2));
  return sum;
};

export default sumValuesPeriod;
