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
import { PrimaryButton, TextButton } from "../../../../components";

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
  Pricing: [],
  Weakness: [],
  "Key Features": [],
};
const featureKeys = ["Pricing", "Weakness", "Key Features"];
const FeatureEditor = () => {
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
            gap: 2,
            // maxWidth: "70%",
            margin: "2rem auto",
          }}
        >
          {featureKeys.map((val) => (
            <>
              <Typography variant="h6">{val} Items</Typography>
              <FieldArray name={val}>
                {(arrayHelpers) => (
                  <Box>
                    {formik.values[val].map((item, index) => (
                      <Grid
                        spacing={"16px"}
                        container
                        key={index}
                        sx={{
                          mb: 2,
                          // border: "1px solid lightgray",
                          position: "relative",
                        }}
                      >
                        <Grid xs={12} sm={12} item>
                          <label>Title</label>
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
                          <label>Description</label>
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
                    ))}

                    <TextButton
                      startIcon={<AddIcon />}
                      onClick={() =>
                        arrayHelpers.push({ title: "", description: "" })
                      }
                      variant="outlined"
                    >
                      Add {val} Item
                    </TextButton>
                  </Box>
                )}
              </FieldArray>
            </>
          ))}

          {/* Submit Button */}
          <PrimaryButton type="submit" variant="contained" color="primary">
            Submit
          </PrimaryButton>
        </Box>
      </form>
    </FormikProvider>
  );
};

export default FeatureEditor;
