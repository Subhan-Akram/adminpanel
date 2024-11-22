/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Typography,
  Rating,
  FormControl,
  Grid,
  Autocomplete,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { FormWrapper } from "./style";
import { PrimaryButton } from "../../../../components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const tags = [{ name: "Sales Funnel" }, { name: "Gpt 3.0" }];
// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  ssbxCode: Yup.string().required("SSBX Code is required"),
  modelCard: Yup.string().required("Model Card is required"),
  originUrl: Yup.string()
    .url("Invalid URL format")
    .required("Origin URL is required"),
  logoUrl: Yup.string()
    .url("Invalid URL format")
    .required("Logo URL is required"),
  rating: Yup.number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must not exceed 5")
    .required("Rating is required"),
  createdBy: Yup.string().required("Created By is required"),
  license: Yup.string().required("License is required"),
});

function ModelForm({ initialValues, handleSubmit, isLoading }) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values);
      setSubmitting(false);
    },
  });

  return (
    <FormWrapper
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Grid container spacing={2}>
        {/* Name Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="name">Name</label>
            <TextField
              variant="outlined"
              placeholder="Model Name"
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

        {/* SSBX Code Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="ssbxCode">SSBX Code</label>
            <TextField
              variant="outlined"
              placeholder="SSBX Code"
              id="ssbxCode"
              name="ssbxCode"
              value={formik.values.ssbxCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.ssbxCode && Boolean(formik.errors.ssbxCode)}
              helperText={formik.touched.ssbxCode && formik.errors.ssbxCode}
            />
          </FormControl>
        </Grid>

        {/* Model Card Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="modelCard">Model Card</label>
            <TextField
              variant="outlined"
              placeholder="Model Card"
              id="modelCard"
              name="modelCard"
              value={formik.values.modelCard}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.modelCard && Boolean(formik.errors.modelCard)
              }
              helperText={formik.touched.modelCard && formik.errors.modelCard}
            />
          </FormControl>
        </Grid>

        {/* Origin URL Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="originUrl">Origin URL</label>
            <TextField
              placeholder="Origin URL"
              variant="outlined"
              id="originUrl"
              name="originUrl"
              value={formik.values.originUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.originUrl && Boolean(formik.errors.originUrl)
              }
              helperText={formik.touched.originUrl && formik.errors.originUrl}
            />
          </FormControl>
        </Grid>

        {/* Logo URL Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="logoUrl">Logo URL</label>
            <TextField
              placeholder="Logo URL"
              variant="outlined"
              id="logoUrl"
              name="logoUrl"
              value={formik.values.logoUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.logoUrl && Boolean(formik.errors.logoUrl)}
              helperText={formik.touched.logoUrl && formik.errors.logoUrl}
            />
          </FormControl>
        </Grid>

        {/* Created By Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="createdBy">Created By</label>
            <TextField
              placeholder="Created By"
              variant="outlined"
              id="createdBy"
              name="createdBy"
              value={formik.values.createdBy}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.createdBy && Boolean(formik.errors.createdBy)
              }
              helperText={formik.touched.createdBy && formik.errors.createdBy}
            />
          </FormControl>
        </Grid>

        {/* License Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <label htmlFor="license">License</label>
            <TextField
              variant="outlined"
              placeholder="License"
              id="license"
              name="license"
              value={formik.values.license}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.license && Boolean(formik.errors.license)}
              helperText={formik.touched.license && formik.errors.license}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <label htmlFor="createdBy">Tags</label>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={tags}
            getOptionLabel={(option) => option.name}
            defaultValue={[tags[0]]}
            filterSelectedOptions
            sx={{ width: "100%", marginTop: "6px" }}
            ChipProps={{
              deleteIcon: (
                <CloseOutlinedIcon
                  style={{
                    color: "var(--tag-text-icon-selected)",
                    fontSize: "15px",
                  }}
                />
              ),
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                // label="filterSelectedOptions"
                placeholder="Add Tags"
              />
            )}
          />
        </Grid>
        {/* Rating Field */}
        <Grid item xs={12}>
          <Box>
            <Typography variant="body1">Rating:</Typography>
            <Rating
              name="rating"
              value={formik.values.rating}
              onChange={(_, value) => formik.setFieldValue("rating", value)}
            />
            <Box className="rating_error">
              {formik.touched.rating && formik.errors.rating && (
                <Typography variant="caption" color="error">
                  {formik.errors.rating}
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
        {/* Description Field */}
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <label htmlFor="description">Description</label>
            <TextField
              variant="outlined"
              placeholder="Description"
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              multiline
              rows={4}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </FormControl>
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <PrimaryButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            isLoading={isLoading}
          >
            Submit
          </PrimaryButton>
        </Grid>
      </Grid>
    </FormWrapper>
  );
}

export default ModelForm;
