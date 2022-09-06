const formatDate = (string) => {
  let ten = 10;
  if (string < ten) {
    return '0' + string;
  }
  return string;
};

export default formatDate;
