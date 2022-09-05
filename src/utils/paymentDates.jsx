const paymentDates = (dateStartPayment, numberParcels) => {
  try {
    const list = [];
    const firstPayment = new Date(dateStartPayment).toLocaleDateString('en-US', {
      timeZone: 'UTC'
    });

    list.push('0' + firstPayment);

    const arrayDate = firstPayment.split('/');
    let month = arrayDate[0];
    const day = arrayDate[1];
    let year = +arrayDate[2];

    let monthNum = +month;
    // let currentMonth = 0;

    const twelve = 12;

    let currentYear = year;

    for (let i = 1; i < numberParcels; i++) {
      monthNum += 1;

      if (monthNum > twelve) {
        monthNum = 1;
        currentYear += 1;

        const parcel = `0${monthNum.toString()}/${day}/${currentYear.toString()}`;
        list.push(parcel);
      } else {
        let monthString = monthNum;
        if (monthNum < 10) monthString = '0' + monthNum;

        const parcel = `${monthString.toString()}/${day}/${currentYear.toString()}`;
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
