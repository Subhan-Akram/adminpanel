/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Typography,
  Rating,
  FormControl,
  Box,
  Autocomplete,
} from "@mui/material";
// import { Grid } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FormWrapper } from "./style";
import { PrimaryButton } from "../../../../components";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { InputLabelWrapper, AutoCompleteStyledPopperWrapper } from "styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
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

function ModelForm({ initialValues, handleSubmit, isLoading, isEdit = false }) {
  const { tags } = useSelector((state) => state.models);

  const [selectedTags, setSelectedTags] = useState(initialValues.tags);
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
            <InputLabelWrapper>Name</InputLabelWrapper>

            <TextField
              size="small"
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
            <InputLabelWrapper>SSBX Code</InputLabelWrapper>
            <TextField
              size="small"
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
            <InputLabelWrapper
              className="InputLabelWrapper_text"
              htmlFor="modelCard"
            >
              Model Card
            </InputLabelWrapper>
            <TextField
              size="small"
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
            <InputLabelWrapper
              className="InputLabelWrapper_text"
              htmlFor="originUrl"
            >
              Origin URL
            </InputLabelWrapper>
            <TextField
              size="small"
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
            <InputLabelWrapper
              className="InputLabelWrapper_text"
              htmlFor="logoUrl"
            >
              Logo URL
            </InputLabelWrapper>
            <TextField
              size="small"
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
            <InputLabelWrapper
              className="InputLabelWrapper_text"
              htmlFor="createdBy"
            >
              Created By
            </InputLabelWrapper>
            <TextField
              size="small"
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
        <Grid
          sx={{ marginBottom: "16px", position: "relative" }}
          item
          xs={12}
          md={12}
        >
          <FormControl fullWidth>
            <InputLabelWrapper
              className="InputLabelWrapper_text"
              htmlFor="license"
            >
              License
            </InputLabelWrapper>
            <TextField
              size="small"
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
        {isEdit && (
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
              options={tags}
              getOptionLabel={(option) => option.name}
              defaultValue={[...selectedTags, ...selectedTags]}
              isOptionEqualToValue={(option, value) =>
                option.name === value.name
              }
              value={selectedTags}
              onChange={(_, val) => {
                setSelectedTags(val);
                formik.setFieldValue("tags", val);
              }}
              sx={{ width: "100%" }}
              PopperComponent={(props) => (
                <AutoCompleteStyledPopperWrapper
                  {...props}
                  // anchorEl={box1Ref.current}
                  // width={`${searchBoxWidth}px`}
                  placement="bottom-start"
                />
              )}
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
                  // InputLabelWrapper="filterSelectedOptions"
                  placeholder="Add Tags"
                />
              )}
            />
          </Grid>
        )}
        {/* Rating Field */}
        <Grid item xs={12}>
          <Box className="rating_box">
            <Typography className="InputLabelWrapper_text" variant="body1">
              Rating:
            </Typography>
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
            <InputLabelWrapper htmlFor="description">
              Description
            </InputLabelWrapper>
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

    // <FormWrapper
    //   component="form"
    //   onSubmit={formik.handleSubmit}
    //   sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    // >
    //   {/* Name Field */}
    //   <Box
    //     sx={{ display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" }}
    //   >
    //     <FormControl fullWidth sx={{ flex: 1 }}>
    //       <InputLabelWrapper>Name</InputLabelWrapper>
    //       <TextField
    //         size="small"
    //         variant="outlined"
    //         placeholder="Model Name"
    //         id="name"
    //         name="name"
    //         value={formik.values.name}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.name && Boolean(formik.errors.name)}
    //         helperText={formik.touched.name && formik.errors.name}
    //       />
    //     </FormControl>

    //     {/* SSBX Code Field */}
    //     <FormControl fullWidth sx={{ flex: 1 }}>
    //       <InputLabelWrapper>SSBX Code</InputLabelWrapper>
    //       <TextField
    //         size="small"
    //         variant="outlined"
    //         placeholder="SSBX Code"
    //         id="ssbxCode"
    //         name="ssbxCode"
    //         value={formik.values.ssbxCode}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.ssbxCode && Boolean(formik.errors.ssbxCode)}
    //         helperText={formik.touched.ssbxCode && formik.errors.ssbxCode}
    //       />
    //     </FormControl>
    //   </Box>

    //   {/* Model Card Field */}
    //   <Box
    //     sx={{ display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" }}
    //   >
    //     <FormControl fullWidth sx={{ flex: 1 }}>
    //       <InputLabelWrapper htmlFor="modelCard">Model Card</InputLabelWrapper>
    //       <TextField
    //         size="small"
    //         variant="outlined"
    //         placeholder="Model Card"
    //         id="modelCard"
    //         name="modelCard"
    //         value={formik.values.modelCard}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.modelCard && Boolean(formik.errors.modelCard)}
    //         helperText={formik.touched.modelCard && formik.errors.modelCard}
    //       />
    //     </FormControl>

    //     {/* Origin URL Field */}
    //     <FormControl fullWidth sx={{ flex: 1 }}>
    //       <InputLabelWrapper htmlFor="originUrl">Origin URL</InputLabelWrapper>
    //       <TextField
    //         size="small"
    //         placeholder="Origin URL"
    //         variant="outlined"
    //         id="originUrl"
    //         name="originUrl"
    //         value={formik.values.originUrl}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.originUrl && Boolean(formik.errors.originUrl)}
    //         helperText={formik.touched.originUrl && formik.errors.originUrl}
    //       />
    //     </FormControl>
    //   </Box>

    //   {/* Logo URL Field */}
    //   <Box
    //     sx={{ display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" }}
    //   >
    //     <FormControl fullWidth sx={{ flex: 1 }}>
    //       <InputLabelWrapper htmlFor="logoUrl">Logo URL</InputLabelWrapper>
    //       <TextField
    //         size="small"
    //         placeholder="Logo URL"
    //         variant="outlined"
    //         id="logoUrl"
    //         name="logoUrl"
    //         value={formik.values.logoUrl}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.logoUrl && Boolean(formik.errors.logoUrl)}
    //         helperText={formik.touched.logoUrl && formik.errors.logoUrl}
    //       />
    //     </FormControl>

    //     {/* Created By Field */}
    //     <FormControl fullWidth sx={{ flex: 1 }}>
    //       <InputLabelWrapper htmlFor="createdBy">Created By</InputLabelWrapper>
    //       <TextField
    //         size="small"
    //         placeholder="Created By"
    //         variant="outlined"
    //         id="createdBy"
    //         name="createdBy"
    //         value={formik.values.createdBy}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.createdBy && Boolean(formik.errors.createdBy)}
    //         helperText={formik.touched.createdBy && formik.errors.createdBy}
    //       />
    //     </FormControl>
    //   </Box>

    //   {/* License Field */}
    //   <Box
    //     sx={{ display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" }}
    //   >
    //     <FormControl fullWidth sx={{ flex: 1 }}>
    //       <InputLabelWrapper htmlFor="license">License</InputLabelWrapper>
    //       <TextField
    //         size="small"
    //         variant="outlined"
    //         placeholder="License"
    //         id="license"
    //         name="license"
    //         value={formik.values.license}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.touched.license && Boolean(formik.errors.license)}
    //         helperText={formik.touched.license && formik.errors.license}
    //       />
    //     </FormControl>
    //     {/* Tags Section (only if editing) */}
    //     {isEdit && (
    //       <Box
    //         sx={{ width: "50%" }}
    //         // sx={{
    //         //   display: "flex",
    //         //   flexDirection: "row",
    //         //   gap: 2,
    //         //   flexWrap: "wrap",
    //         // }}
    //       >
    //         <InputLabelWrapper htmlFor="tags">Tags</InputLabelWrapper>
    //         <Autocomplete
    //           multiple
    //           size="small"
    //           id="tags-outlined"
    //           options={tags}
    //           getOptionLabel={(option) => option.name}
    //           defaultValue={[...selectedTags, ...selectedTags]}
    //           isOptionEqualToValue={(option, value) =>
    //             option.name === value.name
    //           }
    //           value={selectedTags}
    //           onChange={(_, val) => {
    //             setSelectedTags(val);
    //             formik.setFieldValue("tags", val);
    //           }}
    //           sx={{ width: "100%", marginTop: "6px" }}
    //           PopperComponent={(props) => (
    //             <AutoCompleteStyledPopperWrapper
    //               {...props}
    //               placement="bottom-start"
    //             />
    //           )}
    //           ChipProps={{
    //             deleteIcon: (
    //               <CloseOutlinedIcon
    //                 style={{
    //                   color: "var(--tag-text-icon-selected)",
    //                   fontSize: "15px",
    //                 }}
    //               />
    //             ),
    //           }}
    //           renderInput={(params) => (
    //             <TextField
    //               sx={{ marginBottom: "1rem" }}
    //               {...params}
    //               placeholder="Add Tags"
    //             />
    //           )}
    //         />
    //       </Box>
    //     )}
    //   </Box>

    //   {/* Rating Field */}
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "column",
    //       marginBottom: 2,
    //       width: "50%",
    //     }}
    //   >
    //     <Typography variant="body1">Rating:</Typography>
    //     <Rating
    //       name="rating"
    //       value={formik.values.rating}
    //       onChange={(_, value) => formik.setFieldValue("rating", value)}
    //     />
    //     {formik.touched.rating && formik.errors.rating && (
    //       <Typography variant="caption" color="error">
    //         {formik.errors.rating}
    //       </Typography>
    //     )}
    //   </Box>

    //   {/* Description Field */}
    //   <FormControl fullWidth>
    //     <InputLabelWrapper htmlFor="description">Description</InputLabelWrapper>
    //     <TextField
    //       variant="outlined"
    //       placeholder="Description"
    //       id="description"
    //       name="description"
    //       value={formik.values.description}
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       multiline
    //       rows={4}
    //       error={
    //         formik.touched.description && Boolean(formik.errors.description)
    //       }
    //       helperText={formik.touched.description && formik.errors.description}
    //     />
    //   </FormControl>

    //   {/* Submit Button */}
    //   <Box>
    //     <PrimaryButton
    //       type="submit"
    //       variant="contained"
    //       color="primary"
    //       fullWidth
    //       isLoading={isLoading}
    //     >
    //       Submit
    //     </PrimaryButton>
    //   </Box>
    // </FormWrapper>
  );
}
ModelForm.propTypes = {
  isEdit: PropTypes.bool,
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
};
export default ModelForm;