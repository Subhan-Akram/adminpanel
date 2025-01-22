import React, { useImperativeHandle } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Grid,
  FormControl,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { OrganizationFormWrapper } from "./style";
import PropTypes from "prop-types";
import { organizationValidation } from "features/organizations/constants";

const OrganizationForm = ({
  initialValues,
  handleSubmit: handleSubmtAction,
  isEdit = false,
  formRef,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema: organizationValidation,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmtAction(values);
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
    submitForm,
    setFieldValue,
  } = formik;
  useImperativeHandle(formRef, () => ({
    submitForm,
  }));

  return (
    <OrganizationFormWrapper component="form" onSubmit={handleSubmit}>
      <Grid container spacing={"24px"}>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <label htmlFor="name">Name</label>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Organization Name"
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

        <Grid className="switches_items" item xs={12} md={12}>
          <FormControlLabel
            control={
              <Switch
                id="subscriber"
                name="subscriber"
                checked={values.subscriber}
                onChange={(e) => setFieldValue("subscriber", e.target.checked)}
              />
            }
            label="Subscriber"
          />
        </Grid>

        {isEdit && (
          <Grid className="switches_items" item xs={12} md={12}>
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
          </Grid>
        )}
      </Grid>
    </OrganizationFormWrapper>
  );
};

OrganizationForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
  isEdit: PropTypes.bool,
};
export default OrganizationForm;
