import * as Yup from "yup";
import { phoneRegExp } from "../../../assets/utils/utils";

export const SignUpValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(4, "Too Short!This field must contain at least 4 characters")
    .max(50, "Too Long!")
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  phone: Yup.string()
    .matches(phoneRegExp, { message: "Only numbers" })
    .required("This field is required"),
  password: Yup.string()
    .min(8, "You must enter at least 8 characters.")
    .matches(/[0-9]/, "You must enter at least one number.")
    .matches(/[a-z]/, "You must enter at least one lowercase letter.")
    .matches(/[A-Z]/, "You must enter at least one uppercase letter.")
    .matches(
      /[#?!@$%^&*()_+\=[\]{};':"\\|,.<>/~]/,
      "You must enter at least one symbols."
    )
    .required("This field is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match.")
    .required("This field is required."),
  streetAddress: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  postalCode: Yup.string().required("Postal code is required"),
  checkbox: Yup.boolean().required(),
});
