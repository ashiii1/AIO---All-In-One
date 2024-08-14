export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const formatCardNumber = (number) => {
  const numberWithoutSpaces = number.replace(/\\\\s+/g, "");
  return numberWithoutSpaces.replace(/(\\\\d{4})/g, "$1 ").trim();
};

export const formatExpiryDate = (value) => {
  const numericValue = value.replace(/\D/g, "");
  const formattedValue = numericValue.slice(0, 4);

  if (formattedValue.length > 2) {
    return formattedValue.slice(0, 2) + " / " + formattedValue.slice(2);
  } else {
    return formattedValue;
  }
};

export const getCardType = (number) => {
  const cardTypes = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
  };

  return (
    Object.keys(cardTypes).find((type) => cardTypes[type].test(number)) ||
    "unknown"
  );
};
