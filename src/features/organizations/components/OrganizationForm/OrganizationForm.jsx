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

        <Grid item xs={6} md={6}>
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
        </Grid>

        {isEdit && (
          <Grid item xs={12} md={6}>
            <label>Status</label>
            <div>
              <FormControlLabel
                control={
                  <Switch
                    id="enabled"
                    name="enabled"
                    checked={values.enabled}
                    onChange={(e) => setFieldValue("enabled", e.target.checked)}
                  />
                }
                label={values.enabled ? "Enabled" : "Disabled"}
              />
            </div>
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
