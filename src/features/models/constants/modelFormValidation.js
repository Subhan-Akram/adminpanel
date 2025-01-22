import * as Yup from "yup";

const modelFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  ssbxCode: Yup.string().required("SSBX Code is required"),
  modelCard: Yup.string().required("Model Card is required"),
  originUrl: Yup.string()
    .url("Invalid URL format")
    .required("Origin URL is required"),
  logoUrl: Yup.string()
    .url("Invalid URL format")
    .required("Logo URL is required"),
  rating: Yup.number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must not exceed 5")
    .required("Rating is required"),
  createdBy: Yup.string().required("Created By is required"),
  license: Yup.string(),
});

export default modelFormValidationSchema;
