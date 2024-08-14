import * as Yup from "yup";
import { phoneRegExp } from "../../assets/utils/utils";

export const DeliveryValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short!This field must contain at least 4 characters")
    .max(50, "Too Long!")
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  phone: Yup.string()
    .matches(phoneRegExp, { message: "Only numbers" })
    .required("This field is required"),
  streetAddress: Yup.string().required("Street address is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  postalCode: Yup.string().required("Postal code is required"),
});
