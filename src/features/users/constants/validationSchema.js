import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Name is required"),
  fullName: Yup.string(),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  status: Yup.string(),
});
export default validationSchema;
