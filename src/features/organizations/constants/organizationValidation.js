import * as Yup from "yup";

const organizationValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  subscriber: Yup.boolean(),
});

export default organizationValidation;
