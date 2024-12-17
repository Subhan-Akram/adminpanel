import React from "react";
import { FastField, Field } from "formik";
import { TextField } from "@mui/material";
import TextFieldWrapper from "../TextFieldWrapper";

export const withTextFastField = (Component) => {
  return (props) => (
    <FastField name={props.name}>{() => <Component {...props} />}</FastField>
  );
};
const TextFastFieldWrapper = withTextFastField(TextFieldWrapper);

export default TextFastFieldWrapper;
