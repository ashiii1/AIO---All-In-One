import * as Yup from "yup";

export const ReviewsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(4, "Name must be 4 or more characters long")
    .required("This field is required"),
  rating: Yup.number().positive().min(1).required("This field is required."),
  comment: Yup.string()
    .trim()
    .min(10, "Comment must be 10 or more characters long.")
    .max(1000, "The comment must not exceed 1000 characters.")
    .required("This field is required."),
});
