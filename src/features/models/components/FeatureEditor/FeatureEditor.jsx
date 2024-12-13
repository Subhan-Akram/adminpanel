import React from "react";
import { useFormik, FormikProvider, FieldArray } from "formik";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Grid,
  Divider,
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
const FeatureEditor = ({ showScroll = false }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values", values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <form
        style={{
          height: "calc(100vh - 186px)",
          padding: "0rem 0px",
          overflow: showScroll ? "auto" : "hide",
        }}
        onSubmit={formik.handleSubmit}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            // maxWidth: "70%",
          }}
        >
          {featureKeys.map((val, i) => (
            <Box
              sx={{
                border: "1px solid var(--border-1)",
                padding: "1rem",
                marginBottom: "16px",

                borderRadius: "8px",
              }}
            >
              <SullyTypography classNameProps={"modaltitle1"}>
                {val}
              </SullyTypography>
              <FieldArray name={val}>
                {(arrayHelpers) => (
                  <ul style={{ listStyle: "none", paddingInlineStart: "0" }}>
                    {formik.values[val].map((item, index) => (
                      <>
                        <li
                          style={{
                            marginTop: "18px",
                            border: "5px dotted var(--border-1)",
                            padding: "24px",
                            borderRadius: "12px",
                            background: "var(--surface-l2)",
                          }}
                        >
                          <Grid
                            // spacing={"16px"}
                            container
                            key={index}
                            spacing={"12px"}
                            sx={{
                              position: "relative",
                            }}
                          >
                            <Grid xs={12} sm={12} item>
                              <InputLabelWrapper>Title</InputLabelWrapper>
                              <TextField
                                sx={{ marginTop: "6px" }}
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
                                sx={{ marginTop: "6px" }}
                                size="small"
                                fullWidth
                                name={`${val}.${index}.description`}
                                placeholder="Enter Description"
                                value={item.description || ""}
                                onChange={formik.handleChange}
                                error={
                                  formik.touched[val] &&
                                  formik.errors[val] &&
                                  Boolean(
                                    formik.errors[val][index]?.description
                                  )
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
                                top: "12px",
                                right: "-10px",

                                // marginLeft: "4px",
                              }}
                            >
                              <IconButton
                                sx={{
                                  color: "var(--red)",
                                  "& svg": { fontSize: "18px" },
                                }}
                                onClick={() => arrayHelpers.remove(index)}
                                disabled={formik.values[val].length === 1}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                          </Grid>
                        </li>
                      </>
                    ))}

                    <TextButton
                      sx={{ marginTop: "12px", fontSize: "14px" }}
                      startIcon={
                        <AddIcon
                          sx={{
                            marginRight: "-4px",
                          }}
                        />
                      }
                      onClick={() =>
                        arrayHelpers.push({ title: "", description: "" })
                      }
                      variant="outlined"
                    >
                      Add {val}
                    </TextButton>
                  </ul>
                )}
              </FieldArray>
            </Box>
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
