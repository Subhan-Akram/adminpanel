import * as Yup from "yup";

const companyValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  domain: Yup.string(),
  enabled: Yup.boolean(),
  subscriber: Yup.boolean(),
  privateData: Yup.boolean(),
});

export default companyValidation;
