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
import { FeatureEditorWrapper } from "./style";

const featureKeys = ["Pricing", "Weakness", "Key Features"];
const FeatureEditor = ({ formik }) => {
  console.log("formik_________", formik.values);
  return (
    <FeatureEditorWrapper>
      {featureKeys.map((val, i) => (
        <Box className="feature_item_box">
          <FieldArray name={`features.${val}`}>
            {(arrayHelpers) => (
              <ul>
                <SullyTypography classNameProps={"modaltitle1"}>
                  {val}
                </SullyTypography>
                {formik.values.features?.[val]?.map((item, index) => (
                  <>
                    <li style={{}}>
                      <Grid
                        container
                        key={index}
                        spacing={"16px"}
                        sx={{ position: "relative" }}
                      >
                        <Grid xs={12} sm={12} item>
                          <InputLabelWrapper>Title</InputLabelWrapper>
                          <TextField
                            className="text_field"
                            size="small"
                            fullWidth
                            name={`features.${val}.${index}.title`}
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
                            className="text_field"
                            size="small"
                            fullWidth
                            name={`features.${val}.${index}.description`}
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

                        <Box className="delete_box">
                          <IconButton
                            className="icon_btn"
                            sx={{
                              color:
                                formik.values.features[val].length === 1
                                  ? "gray"
                                  : "var(--red)",
                            }}
                            onClick={() => arrayHelpers.remove(index)}
                            disabled={formik.values.features[val].length === 1}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                    </li>
                  </>
                ))}

                <TextButton
                  startIcon={<AddIcon />}
                  onClick={() =>
                    arrayHelpers.push({
                      title: "",
                      description: "",
                    })
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
    </FeatureEditorWrapper>
  );
};

export default FeatureEditor;
