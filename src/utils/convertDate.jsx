import formatDate from './formatDate';

const convertDate = (date, ptBR = null) => {
  const tempDate = new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC'
  });

  const arrayDate = tempDate.split('/');
  let month = formatDate(arrayDate[0]);
  let day = formatDate(arrayDate[1]);
  let year = Number(arrayDate[2]);

  if (ptBR) {
    return `${day}/${month}/${year}`;
  }

  return `${month}/${day}/${year}`;
};

export default convertDate;
