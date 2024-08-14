import * as Yup from "yup";
import { phoneRegExp } from "../../assets/utils/utils";

export const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short!This field must contain at least 4 characters")
    .max(50, "Too Long!")
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  phone: Yup.string()
    .matches(phoneRegExp, { message: "Only numbers" })
    .required("This field is required"),
  textQuestion: Yup.string().required("This field is required"),
});
