import * as Yup from "yup";

export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("This field is required"),
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
});
