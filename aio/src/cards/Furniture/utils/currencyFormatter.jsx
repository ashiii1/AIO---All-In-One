export default function CurrencyFormatter(locale = "en-US", number) {
  const formattedNumber = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(number);

  return formattedNumber;
}
