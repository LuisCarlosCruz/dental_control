const periodFilter = (initialPeriod, finalPeriod, allPatients) => {
  const date1 = new Date(initialPeriod).getTime();
  const date2 = new Date(finalPeriod).getTime();

  let list = [];

  allPatients.filter((patient) => {
    const { id, name, parcelValue } = patient;
    return patient.payDays.forEach((date) => {
      const currentDate = new Date(date).getTime();

      if (currentDate <= date2 && currentDate >= date1) {
        const newPatient = { id, name, parcelValue, date };
        list.push(newPatient);
      }
    });
  });

  return list;
};

export default periodFilter;
