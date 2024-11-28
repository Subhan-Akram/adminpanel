/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import * as React from "react";
import Box from "@mui/material/Box";
import { DrawerWrapper } from "./style";
import {
  LogoFrame,
  SullyTypography,
  TextButton,
  OutlinedButton,
  Chip,
  TagTooltip,
} from "../../../../components";
import ModelForm from "../ModelForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllModelTags, updateModel } from "../../services";
import { modelInitialValues } from "../../constants";
import { triggerAlert } from "slice/alertSlice";

import DrawerView from "../DrawerView";

const ModelDrawer = ({
  model = initialModel,
  open,
  setOpen,
  setModel,
  type,
  setType,
}) => {
  // const [type, setType] = React.useState("view");

  const { isLoading } = useSelector((state) => state.models);
  const dispatch = useDispatch();

  const toggleDrawer = (open) => () => {
    setOpen(open);
    setType("view");
  };
  const handleSubmit = async (values) => {
    console.log("values=", values);
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
  React.useEffect(() => {
    dispatch(getAllModelTags());
  }, []);
  return (
    <React.Fragment>
      <DrawerWrapper anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Box className="drawer_header">
          <SullyTypography classNameProps={"page_title"}>
            Model Details
          </SullyTypography>
          {type === "view" && (
            <Box className="btn_group">
              <OutlinedButton
                onClick={() => {
                  setType("edit");
                }}
              >
                Edit Model
              </OutlinedButton>
            </Box>
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
        {type === "view" && <DrawerView data={model} />}
        {type === "edit" && (
          <Box className="drawer_content">
            <ModelForm
              isEdit={true}
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

export const initialModel = {
  name: "Amazon Titan Express",
  description: "Titan Express from Amazon",
  ssbxCode: "TITAN_EXPRESS_MODEL",
  modelCard: "Titan Express from Amazon",
  originUrl: "https://aws.amazon.com/bedrock/titan/",
  logoUrl:
    "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked.547f032d90171cdea4dd90c258f47373c5573db5.png",
  rating: 3.5,
  createdBy: "Amazon",
  tags: [
    {
      name: "transformer",
      hint: "",
    },
    {
      name: "encoder-only",
      hint: "",
    },
    {
      name: "license: Apache 2.0",
      hint: "",
    },
  ],
  extId: "c956fc34-7ca2-4537-b2ea-5ba696ac77d7",
  enabled: true,
};
