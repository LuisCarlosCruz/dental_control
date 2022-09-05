const paymentDates = (dateStartPayment, numberParcels) => {
  try {
    const list = [];
    const firstPayment = new Date(dateStartPayment).toLocaleDateString('en-US', {
      timeZone: 'UTC'
    });

    list.push(firstPayment);

    const arrayDate = firstPayment.split('/');
    const month = arrayDate[0];
    const day = arrayDate[1];
    const year = +arrayDate[2];

    let count = +month;
    let count2 = 0;

    const twelve = 12;

    for (let i = 1; i < numberParcels; i++) {
      count += 1;

      if (count > twelve) {
        const newYear = year + 1;
        count2 += 1;

        const parcel = `${count2.toString()}/${day}/${newYear.toString()}`;
        list.push(parcel);
      } else {
        const parcel = `${count.toString()}/${day}/${year.toString()}`;
        list.push(parcel);
      }
    }

    return list;
  } catch (error) {
    error;
    return null;
  }
};

export default paymentDates;
