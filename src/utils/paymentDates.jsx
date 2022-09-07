import convertDate from './convertDate';
import formatDate from './formatDate';

const paymentDates = (dateStartPayment, numberParcels) => {
  try {
    const list = [];

    const firstPayment = convertDate(dateStartPayment);
    const arrayDate = firstPayment.split('/');
    let month = arrayDate[0];
    let day = arrayDate[1];
    let year = arrayDate[2];

    const firstDate = `${month}/${day}/${year}`;
    list.push(firstDate);

    let monthNum = Number(month);
    let currentYear = Number(year);
    const twelve = 12;

    for (let i = 1; i < numberParcels; i++) {
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
