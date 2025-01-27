import React, { useImperativeHandle } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Grid,
  FormControl,
  Switch,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
} from "@mui/material";
import { CompanyFormWrapper } from "./style";
import PropTypes from "prop-types";
import { companyValidation } from "features/companies/constants";

const CompanyForm = ({
  initialValues,
  handleSubmit: handleSubmitAction,
  isEdit = false,
  formRef,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema: companyValidation,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmitAction(values);
      setSubmitting(false);
    },
  });
  const {
    handleSubmit,
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    setFieldValue,
    submitForm,
  } = formik;
  useImperativeHandle(formRef, () => ({
    submitForm: submitForm,
  }));
  return (
    <CompanyFormWrapper
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Grid container spacing={"24px"}>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <label htmlFor="name">Name</label>
            <TextField
              variant="outlined"
              placeholder="Company Name"
              size="small"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <label htmlFor="domain">Domain</label>
            <TextField
              variant="outlined"
              placeholder="Company Domain"
              size="small"
              id="domain"
              name="domain"
              value={values.domain}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.domain && Boolean(errors.domain)}
              helperText={touched.domain && errors.domain}
            />
          </FormControl>
        </Grid>

        <Grid className="switches_items" item xs={12} md={6}>
          <label>Status</label>
          <div className="label_div">
            <FormControlLabel
              control={
                <Switch
                  id="enabled"
                  name="enabled"
                  checked={values.enabled}
                  onChange={(e) => setFieldValue("enabled", e.target.checked)}
                />
              }
              label="Enabled"
            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <label>Subscriber</label>
            <RadioGroup
              value={values.subscriber}
              onChange={(e) => {
                const { value } = e.target;
                setFieldValue("subscriber", value);
              }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                className="radio_btn"
                value={true}
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel
                className="radio_btn"
                value={false}
                control={<Radio />}
                label="No"
              />
            </RadioGroup>
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <label>Private Data</label>
          <RadioGroup
            value={values.privateData}
            onChange={(e) => {
              const { value } = e.target;
              setFieldValue("privateData", value);
            }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              className="radio_btn"
              value={true}
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              className="radio_btn"
              value={false}
              control={<Radio />}
              label="No"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </CompanyFormWrapper>
  );
};
CompanyForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
  isEdit: PropTypes.bool,
};
export default CompanyForm;
