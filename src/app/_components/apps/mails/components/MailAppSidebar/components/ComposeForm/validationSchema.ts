import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  to: Yup.string().required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});
