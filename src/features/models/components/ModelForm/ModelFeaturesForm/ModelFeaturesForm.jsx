import React from "react";
import { FieldArray } from "formik";
import { Box, IconButton, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { InputLabelWrapper } from "globalStyles";
import { SullyTypography, TextButton, TextFastFieldWrapper } from "components";
import { FeatureEditorWrapper } from "./style";
import { featureKeys } from "features/models/constants";

const ModelFeaturesForm = ({ formik }) => {
  const { values, touched, errors, handleChange } = formik;

  return (
    <FeatureEditorWrapper>
      {featureKeys.map((val, i) => (
        <Box key={val} className="feature_item_box">
          <FieldArray name={`features.${val}`}>
            {(arrayHelpers) => (
              <ul>
                <SullyTypography classNameProps={"modaltitle1"}>
                  {val}
                </SullyTypography>
                {values.features?.[val]?.map((item, index) => (
                  <li key={`features.${val}.${index}.title`} style={{}}>
                    <Grid
                      container
                      key={index}
                      spacing={"16px"}
                      sx={{ position: "relative" }}
                    >
                      <Grid xs={12} sm={12} item>
                        <InputLabelWrapper>Title</InputLabelWrapper>
                        <TextFastFieldWrapper
                          className="text_field"
                          size="small"
                          fullWidth
                          name={`features.${val}.${index}.title`}
                          placeholder="Enter Title"
                          value={item.title || ""}
                          onChange={handleChange}
                          error={
                            touched[val] &&
                            errors[val] &&
                            Boolean(errors.val[index]?.title)
                          }
                          helperText={
                            touched[val] &&
                            errors[val] &&
                            errors[val][index]?.title
                          }
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} sx={{}}>
                        <InputLabelWrapper>Description</InputLabelWrapper>
                        <TextFastFieldWrapper
                          className="text_field"
                          size="small"
                          fullWidth
                          name={`features.${val}.${index}.description`}
                          placeholder="Enter Description"
                          value={item.description || ""}
                          onChange={handleChange}
                          error={
                            touched[val] &&
                            errors[val] &&
                            Boolean(errors[val][index]?.description)
                          }
                          helperText={
                            touched[val] &&
                            errors[val] &&
                            errors[val][index]?.description
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
                              values.features[val].length === 1
                                ? "gray"
                                : "var(--red)",
                          }}
                          onClick={() => arrayHelpers.remove(index)}
                          disabled={values.features[val].length === 1}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  </li>
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

export default ModelFeaturesForm;
