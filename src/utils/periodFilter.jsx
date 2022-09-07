const periodFilter = (initialPeriod, finalPeriod, allPatients) => {
  const date1 = new Date(initialPeriod).getTime();
  const date2 = new Date(finalPeriod).getTime();

  let list = [];

  allPatients.filter((patient) => {
    return patient.payDays.forEach((date) => {
      const { id, name, parcelValue } = patient;
      const currentDate = new Date(date).getTime();

      if (currentDate <= date2 && currentDate >= date1) {
        const newPatient = { id, name, parcelValue, date };
        list.push(newPatient);
      }
    });
  });

  // let sum = 0;
  // list.forEach((patient) => (sum += Number(patient.parcelValue)));

  // return sum.toFixed(2);

  return list;
};

export default periodFilter;
