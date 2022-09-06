import formatDate from './formatDate';

const paymentDates = (dateStartPayment, numberParcels) => {
  try {
    const list = [];
    const firstPayment = new Date(dateStartPayment).toLocaleDateString('en-US', {
      timeZone: 'UTC'
    });

    const arrayDate = firstPayment.split('/');
    let month = formatDate(arrayDate[0]);
    let day = formatDate(arrayDate[1]);
    let year = Number(arrayDate[2]);

    const firstDate = `${month}/${day}/${year}`;
    list.push(firstDate);

    let monthNum = Number(month);
    const twelve = 12;
    let currentYear = year;

    for (let i = 0; i < numberParcels; i++) {
      monthNum += 1;

      if (monthNum > twelve) {
        monthNum = 1;
        currentYear += 1;

        const parcel = `${formatDate(monthNum)}/${day}/${currentYear.toString()}`;

        list.push(parcel);
      } else {
        const parcel = `${formatDate(monthNum)}/${day}/${currentYear.toString()}`;

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
