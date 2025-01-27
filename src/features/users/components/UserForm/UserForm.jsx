import React, { useImperativeHandle } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Grid,
  FormControl,
  FormControlLabel,
  Switch,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { UserFormWrapper } from "./style";
import { validationSchema } from "features/users/constants";

const UserForm = ({
  initialValues,
  formRef,
  handleSubmit: hanldleSubmitAction,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      hanldleSubmitAction(values);
      setSubmitting(false);
    },
  });
  const { handleSubmit, values, setFieldValue, submitForm, touched, errors } =
    formik;
  useImperativeHandle(formRef, () => ({
    submitForm,
  }));

  return (
    <UserFormWrapper component="form" ref={formRef} onSubmit={handleSubmit}>
      <Grid container spacing={"24px"}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="username">Name</label>
            <TextField
              size="small"
              variant="outlined"
              placeholder="User Name"
              id="username"
              name="username"
              value={values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="fullName">Full Name</label>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Full Name"
              id="fullName"
              name="fullName"
              value={values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={touched.fullName && Boolean(errors.fullName)}
              helperText={touched.fullName && errors.fullName}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <label htmlFor="email">Email</label>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Email"
              id="email"
              name="email"
              value={values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <label htmlFor="username">Status</label>
          <div>
            <FormControlLabel
              control={
                <Switch
                  id="status"
                  name="status"
                  checked={values.enabled}
                  onChange={(e) => {
                    setFieldValue("status", e.target.checked);
                  }}
                />
              }
              label={values.enabled ? "Enabled" : "Disabled"}
            />
          </div>
        </Grid>
      </Grid>
    </UserFormWrapper>
  );
};

UserForm.propTypes = {
  initialValues: PropTypes.object,
  isEdit: PropTypes.bool,
};

export default UserForm;
