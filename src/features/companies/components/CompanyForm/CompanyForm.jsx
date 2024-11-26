/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Grid,
  FormControl,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { FormWrapper } from "./style";
import PropTypes from "prop-types";

// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  domain: Yup.string().required("Domain is required"),
  enabled: Yup.boolean().required("Enabled is required"),
  subscriber: Yup.boolean().required("Subscriber is required"),
  privateData: Yup.boolean().required("Private Data is required"),
});

const CompanyForm = forwardRef(({ initialValues, handleSubmit }, ref) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("val", values);
      handleSubmit(values);
      setSubmitting(false);
    },
  });

  // Attach submit function to ref
  React.useImperativeHandle(ref, () => ({
    submitForm: formik.submitForm,
  }));

  return (
    <FormWrapper
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Grid container spacing={2}>
        {/* Name Field */}
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <label htmlFor="name">Name</label>
            <TextField
              variant="outlined"
              placeholder="Company Name"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </FormControl>
        </Grid>

        {/* Domain Field */}
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <label htmlFor="domain">Domain</label>
            <TextField
              variant="outlined"
              placeholder="Company Domain"
              id="domain"
              name="domain"
              value={formik.values.domain}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.domain && Boolean(formik.errors.domain)}
              helperText={formik.touched.domain && formik.errors.domain}
            />
          </FormControl>
        </Grid>

        {/* Enabled Field */}
        <Grid item xs={12} md={12}>
          <FormControlLabel
            control={
              <Switch
                id="enabled"
                name="enabled"
                checked={formik.values.enabled}
                onChange={(e) =>
                  formik.setFieldValue("enabled", e.target.checked)
                }
              />
            }
            label="Enabled"
          />
        </Grid>

        {/* Subscriber Field */}
        <Grid item xs={12} md={12}>
          <FormControlLabel
            control={
              <Switch
                id="subscriber"
                name="subscriber"
                checked={formik.values.subscriber}
                onChange={(e) =>
                  formik.setFieldValue("subscriber", e.target.checked)
                }
              />
            }
            label="Subscriber"
          />
        </Grid>

        {/* Private Data Field */}
        <Grid item xs={12} md={12}>
          <FormControlLabel
            control={
              <Switch
                id="privateData"
                name="privateData"
                checked={formik.values.privateData}
                onChange={(e) =>
                  formik.setFieldValue("privateData", e.target.checked)
                }
              />
            }
            label="Private Data"
          />
        </Grid>
      </Grid>
    </FormWrapper>
  );
});
CompanyForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
};
export default CompanyForm;
