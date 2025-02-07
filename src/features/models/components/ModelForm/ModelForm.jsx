import { FormikProvider, useFormik } from "formik";
import {
  TextField,
  Typography,
  Rating,
  FormControl,
  Box,
  Autocomplete,
} from "@mui/material";
import { Grid } from "@mui/material";
import { FormWrapper } from "./style";
import {
  OutlinedButton,
  PrimaryButton,
  TextFastFieldWrapper,
} from "components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  InputLabelWrapper,
  AutoCompleteStyledPopperWrapper,
} from "globalStyles";
import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ModelFeaturesForm from "./ModelFeaturesForm";
import { modelFormValidationSchema } from "features/models/constants";

function ModelForm({
  initialValues,
  handleSubmit: apiHandleSubmit,
  isLoading,
  isEdit = false,
  setType,
  setOpen,
}) {
  const { tags } = useSelector((state) => state.models);

  const formik = useFormik({
    initialValues,
    validationSchema: modelFormValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      apiHandleSubmit(values);
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
  } = formik;
  return (
    <FormikProvider value={formik}>
      <FormWrapper component="form" onSubmit={handleSubmit} isEdit={isEdit}>
        <Grid className="form_container" container spacing={"24px"}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabelWrapper>Name</InputLabelWrapper>
              <TextFastFieldWrapper
                size="small"
                variant="outlined"
                placeholder="Model Name"
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

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabelWrapper>SSBX Code</InputLabelWrapper>
              <TextFastFieldWrapper
                size="small"
                variant="outlined"
                placeholder="SSBX Code"
                id="ssbxCode"
                name="ssbxCode"
                value={values.ssbxCode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.ssbxCode && Boolean(errors.ssbxCode)}
                helperText={touched.ssbxCode && errors.ssbxCode}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabelWrapper
                className="InputLabelWrapper_text"
                htmlFor="modelCard"
              >
                Model Card
              </InputLabelWrapper>
              <TextFastFieldWrapper
                size="small"
                variant="outlined"
                placeholder="Model Card"
                id="modelCard"
                name="modelCard"
                value={values.modelCard}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.modelCard && Boolean(errors.modelCard)}
                helperText={touched.modelCard && errors.modelCard}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabelWrapper
                className="InputLabelWrapper_text"
                htmlFor="originUrl"
              >
                Origin URL
              </InputLabelWrapper>
              <TextFastFieldWrapper
                size="small"
                placeholder="Origin URL"
                variant="outlined"
                id="originUrl"
                name="originUrl"
                value={values.originUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.originUrl && Boolean(errors.originUrl)}
                helperText={touched.originUrl && errors.originUrl}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabelWrapper
                className="InputLabelWrapper_text"
                htmlFor="logoUrl"
              >
                Logo URL
              </InputLabelWrapper>
              <TextFastFieldWrapper
                size="small"
                placeholder="Logo URL"
                variant="outlined"
                id="logoUrl"
                name="logoUrl"
                value={values.logoUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.logoUrl && Boolean(errors.logoUrl)}
                helperText={touched.logoUrl && errors.logoUrl}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabelWrapper
                className="InputLabelWrapper_text"
                htmlFor="createdBy"
              >
                Created By
              </InputLabelWrapper>
              <TextFastFieldWrapper
                size="small"
                placeholder="Created By"
                variant="outlined"
                id="createdBy"
                name="createdBy"
                value={values.createdBy}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.createdBy && Boolean(errors.createdBy)}
                helperText={touched.createdBy && errors.createdBy}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={12}>
            <FormControl fullWidth>
              <InputLabelWrapper
                className="InputLabelWrapper_text"
                htmlFor="license"
              >
                License
              </InputLabelWrapper>
              <TextFastFieldWrapper
                size="small"
                variant="outlined"
                placeholder="License"
                id="license"
                name="license"
                value={values.license}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.license && Boolean(errors.license)}
                helperText={touched.license && errors.license}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={12}>
            <InputLabelWrapper
              className="InputLabelWrapper_text"
              htmlFor="createdBy"
            >
              Tags
            </InputLabelWrapper>
            <Autocomplete
              className="autocomplete_tags"
              multiple
              size="small"
              id="tags-outlined"
              options={tags.map((val) => val.name)}
              getOptionLabel={(option) => {
                return option;
              }}
              isOptionEqualToValue={(option, value) => {
                return option === value;
              }}
              value={values.tags}
              onChange={(_, val) => {
                setFieldValue("tags", val);
              }}
              PopperComponent={(props) => (
                <AutoCompleteStyledPopperWrapper
                  {...props}
                  placement="bottom-start"
                />
              )}
              ChipProps={{
                deleteIcon: <CloseOutlinedIcon className="close_chip_icon" />,
              }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Add Tags" />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Box className="rating_box">
              <Typography className="InputLabelWrapper_text" variant="body1">
                Rating:
              </Typography>
              <Rating
                size="large"
                name="rating"
                value={values.rating}
                onChange={(_, value) => setFieldValue("rating", value)}
              />
              <Box className="rating_error">
                {touched.rating && errors.rating && (
                  <Typography variant="caption" color="error">
                    {errors.rating}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={12}>
            <FormControl fullWidth>
              <InputLabelWrapper htmlFor="description">
                Description
              </InputLabelWrapper>
              <TextFastFieldWrapper
                variant="outlined"
                placeholder="Description"
                id="description"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                multiline
                rows={4}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description && errors.description}
              />
            </FormControl>
          </Grid>

          {/* {isEdit && (
            <Grid item xs={12} md={12}>
              <Typography className="InputLabelWrapper_text" variant="body1">
                Features
              </Typography>
              <ModelFeaturesForm formik={formik} />
            </Grid>
          )} */}
        </Grid>

        <Box className="form_buttons">
          <OutlinedButton
            onClick={() => {
              isEdit ? setType("view") : setOpen(false);
            }}
            variant="contained"
            color="primary"
          >
            Cancel
          </OutlinedButton>
          <PrimaryButton
            type="submit"
            variant="contained"
            color="primary"
            isLoading={isLoading}
          >
            Save
          </PrimaryButton>
        </Box>
      </FormWrapper>
    </FormikProvider>
  );
}

ModelForm.propTypes = {
  isEdit: PropTypes.bool,
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  setType: PropTypes.func,
};
export default ModelForm;
