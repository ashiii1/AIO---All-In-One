import * as Yup from "yup";

export const CreditCardValidationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Card number is required")
    .min(16, "Incomplete card number"),
  name: Yup.string().required("Name is required"),
  expiryDate: Yup.string()
    .required("Expiry date is required")
    .test("valid-month", "Invalid month", function (value) {
      if (!value) {
        return false;
      }

      const [month] = value.split("/").map((item) => parseInt(item, 10));

      return month >= 1 && month <= 12;
    })
    .test(
      "is-future-date",
      "Expiry date must be in the future",
      function (value) {
        if (!value) {
          return false;
        }

        const currentDate = new Date();
        const [month, year] = value
          .split("/")
          .map((item) => parseInt(item, 10));

        const expiryDate = new Date(year + 2000, month, 1);

        return expiryDate > currentDate;
      }
    ),
  cvv: Yup.string()
    .matches(/^[0-9]{3,4}$/, "Invalid CVV")
    .required("CVV is required"),
});
