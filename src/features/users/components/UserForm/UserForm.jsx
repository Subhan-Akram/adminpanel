/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Grid,
  FormControl,
  FormControlLabel,
  Switch,
  MenuItem,
  Select,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import PropTypes from "prop-types";
import { UserFormWrapper } from "./style";
import { useDispatch } from "react-redux";
import { triggerAlert } from "../../../../slice/alertSlice";

// Validation Schema
const validationSchema = (isEdit) => {
  return Yup.object().shape({
    name: Yup.string().required("Name is required"),
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    roles: Yup.array()
      .of(Yup.string())
      .required("At least one role is required"),
    status: Yup.string().required("Status is required"),
  });
};

const UserForm = ({ initialValues, isEdit = false, formRef, setOpen }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema(isEdit),
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values);
      setSubmitting(false);
    },
  });
  const dispatch = useDispatch();
  // Attach submit function to ref
  const handleSubmit = async (val) => {
    // const { payload } = await dispatch(updateCompany({ dispatch, payload: val }));
    const payload = true;
    if (payload) {
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Company Updated Successfully",
          alertType: "success",
        })
      );
      setOpen(false);
    }
  };
  React.useImperativeHandle(formRef, () => ({
    submitForm: formik.submitForm,
  }));

  return (
    <UserFormWrapper
      component="form"
      ref={formRef}
      onSubmit={formik.handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Grid container spacing={2}>
        {/* Name Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="name">Name</label>
            <TextField
              size="small"
              variant="outlined"
              placeholder="User Name"
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

        {/* Full Name Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="fullName">Full Name</label>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Full Name"
              id="fullName"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </FormControl>
        </Grid>

        {/* Email Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="email">Email</label>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="roles">Roles</label>
            <Select
              select
              size="small"
              variant="outlined"
              placeholder="Roles"
              id="roles"
              name="roles"
              displayEmpty={true}
              multiple
              value={formik.values.roles}
              onChange={formik.handleChange}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <em
                      style={{
                        color: "#7e7f82",
                        fontSize: "13px",
                        fontWeight: "500",
                      }}
                    >
                      Select Roles
                    </em>
                  );
                }

                return selected.join(", ");
              }}
              onBlur={formik.handleBlur}
              error={formik.touched.roles && Boolean(formik.errors.roles)}
              helperText={formik.touched.roles && formik.errors.roles}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Status Field */}
        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Switch
                id="status"
                name="status"
                checked={formik.values.status === "active"}
                onChange={(e) =>
                  formik.setFieldValue(
                    "status",
                    e.target.checked ? "active" : "inactive"
                  )
                }
              />
            }
            label="Active"
          />
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
