import PropTypes from "prop-types";
import * as React from "react";
import Box from "@mui/material/Box";

import { DrawerWrapper } from "./style";
import { LogoFrame, SullyTypography, TextButton } from "../../../../components";
import ModelForm from "../ModelForm";
import { useDispatch, useSelector } from "react-redux";
import { updateModel } from "../../services";
import { modelInitialValues } from "../../constants";
import { triggerAlert } from "slice/alertSlice";
import { Grid } from "@mui/material";

const ModelDrawer = ({ model, open, setOpen, setModel }) => {
  const [type, setType] = React.useState("view");
  const {
    name,
    description,
    modelCard,
    rating,
    license,
    logoUrl,
    originUrl,
    ssbxCode,
  } = model;
  const { isLoading } = useSelector((state) => state.models);
  const dispatch = useDispatch();

  const toggleDrawer = (open) => () => {
    setOpen(open);
    setType("view");
  };

  const modelView = () => (
    <Box className="drawer_content" role="presentation" sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {/* Name */}
        <Grid item xs={12} sm={6}>
          <SullyTypography
            variant="body1"
            classNameProps={"card_title_1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Name:
          </SullyTypography>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {name}
          </SullyTypography>
        </Grid>

        {/* Model Card */}
        <Grid item xs={12} sm={6}>
          <SullyTypography
            variant="body1"
            classNameProps={"card_title_1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Model Card:
          </SullyTypography>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {modelCard}
          </SullyTypography>
        </Grid>

        {/* License */}
        <Grid item xs={12} sm={6}>
          <SullyTypography
            variant="body1"
            classNameProps={"card_title_1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            License:
          </SullyTypography>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {license}
          </SullyTypography>
        </Grid>

        {/* SSBX Code */}
        <Grid item xs={12} sm={6}>
          <SullyTypography
            variant="body1"
            classNameProps={"card_title_1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            SSBX Code:
          </SullyTypography>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {ssbxCode}
          </SullyTypography>
        </Grid>
        {/* Logo URL */}
        <Grid item xs={12} sm={6}>
          <SullyTypography
            variant="body1"
            classNameProps={"card_title_1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Logo URL:
          </SullyTypography>
          <Box className="logo_frame_box">
            <LogoFrame
              className={"logo_frame_medium"}
              imgLink={logoUrl}
            ></LogoFrame>
          </Box>
        </Grid>
        {/* Origin URL */}
        <Grid item xs={12} sm={6}>
          <SullyTypography
            variant="body1"
            classNameProps={"card_title_1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Origin URL:
          </SullyTypography>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {originUrl}
          </SullyTypography>
        </Grid>

        {/* Rating */}
        <Grid item xs={12} sm={6}>
          <SullyTypography
            variant="body1"
            classNameProps={"card_title_1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Rating:
          </SullyTypography>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {rating}
          </SullyTypography>
        </Grid>
        {/* Description */}
        <Grid item xs={12} sm={12}>
          <SullyTypography
            variant="body1"
            classNameProps={"card_title_1"}
            sx={{ mb: 1, fontWeight: 500 }}
          >
            Description:
          </SullyTypography>
          <SullyTypography
            variant="body2"
            classNameProps={"card_text"}
            color="text.secondary"
          >
            {description}
          </SullyTypography>
        </Grid>
      </Grid>
    </Box>
  );
  const handleSubmit = async (values) => {
    const { payload } = await dispatch(
      updateModel({ payload: values, dispatch })
    );
    console.log("payload====", payload);
    if (payload) {
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Model Updated Successfully",
          alertType: "success",
        })
      );
      setType("view");

      setModel(payload);
    }
  };
  console.log("type", type);
  return (
    <React.Fragment>
      <DrawerWrapper anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Box className="drawer_header">
          <SullyTypography classNameProps={"page_title"}>
            Model Details
          </SullyTypography>
          {type === "view" && (
            <TextButton
              onClick={() => {
                setType("edit");
              }}
            >
              Edit Model
            </TextButton>
          )}
          {type === "edit" && (
            <TextButton
              onClick={() => {
                setType("view");
              }}
            >
              Go Back
            </TextButton>
          )}
        </Box>
        {type === "view" && modelView()}
        {type === "edit" && (
          <Box className="drawer_content">
            <ModelForm
              isLoading={isLoading}
              handleSubmit={handleSubmit}
              initialValues={{ ...modelInitialValues, ...model }}
            />
          </Box>
        )}
      </DrawerWrapper>
    </React.Fragment>
  );
};

ModelDrawer.propTypes = {
  model: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  setModel: PropTypes.func,
};

export default ModelDrawer;
