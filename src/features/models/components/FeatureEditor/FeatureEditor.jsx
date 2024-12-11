import React from "react";
import { useFormik, FormikProvider, FieldArray } from "formik";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import * as Yup from "yup";
import { InputLabelWrapper } from "globalStyles";
import {
  PrimaryButton,
  SullyTypography,
  TextButton,
} from "../../../../components";

const validationSchema = Yup.object({
  pricing: Yup.array()
    .of(
      Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
      })
    )
    .min(1, "At least one pricing item is required"),
});
const initialValues = {
  // name: "",
  Pricing: [""],
  Weakness: [""],
  "Key Features": [""],
};
const featureKeys = ["Pricing", "Weakness", "Key Features"];
const FeatureEditor = ({ initialShow = 0 }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values", values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            // maxWidth: "70%",
          }}
        >
          {featureKeys.map((val, i) => (
            <>
              <SullyTypography classNameProps={"page_title"}>
                {val} Items
              </SullyTypography>
              <FieldArray name={val}>
                {(arrayHelpers) => (
                  <ul style={{ listStyle: "none" }}>
                    {formik.values[val].map((item, index) => (
                      <li style={{}}>
                        <Grid
                          // spacing={"16px"}
                          container
                          key={index}
                          spacing={"12px"}
                          sx={{
                            // border: "1px solid lightgray",
                            position: "relative",
                          }}
                        >
                          <Grid xs={12} sm={12} item>
                            <InputLabelWrapper>Title</InputLabelWrapper>
                            <TextField
                              size="small"
                              fullWidth
                              name={`${val}.${index}.title`}
                              placeholder="Enter Title"
                              value={item.title || ""}
                              onChange={formik.handleChange}
                              error={
                                formik.touched[val] &&
                                formik.errors[val] &&
                                Boolean(formik.errors.val[index]?.title)
                              }
                              helperText={
                                formik.touched[val] &&
                                formik.errors[val] &&
                                formik.errors[val][index]?.title
                              }
                            />
                          </Grid>

                          <Grid item xs={12} sm={12} sx={{}}>
                            <InputLabelWrapper>Description</InputLabelWrapper>
                            <TextField
                              size="small"
                              fullWidth
                              name={`${val}.${index}.description`}
                              placeholder="Enter Description"
                              value={item.description || ""}
                              onChange={formik.handleChange}
                              error={
                                formik.touched[val] &&
                                formik.errors[val] &&
                                Boolean(formik.errors[val][index]?.description)
                              }
                              helperText={
                                formik.touched[val] &&
                                formik.errors[val] &&
                                formik.errors[val][index]?.description
                              }
                              multiline
                              maxRows={4}
                            />
                          </Grid>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              position: "absolute",
                              bottom: "-30px",
                              right: "-10px",
                              // marginLeft: "4px",
                            }}
                          >
                            <IconButton
                              onClick={() => arrayHelpers.remove(index)}
                              disabled={formik.values[val].length === 1}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        </Grid>
                      </li>
                    ))}

                    <TextButton
                      sx={{ marginTop: "12px" }}
                      startIcon={<AddIcon />}
                      onClick={() =>
                        arrayHelpers.push({ title: "", description: "" })
                      }
                      variant="outlined"
                    >
                      Add {val} Item
                    </TextButton>
                  </ul>
                )}
              </FieldArray>
            </>
          ))}

          {/* Submit Button */}
          {/* <PrimaryButton type="submit" variant="contained" color="primary">
            Submit
          </PrimaryButton> */}
        </Box>
      </form>
    </FormikProvider>
  );
};

export default FeatureEditor;
