import PropTypes from "prop-types";
import React, { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { DrawerWrapper } from "./style";
import { LogoFrame, SullyTypography, TextButton } from "components";
import ModelForm from "../ModelForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllModelTags, updateModel } from "../../services";
import { modelInitialValues } from "../../constants";
import { triggerAlert } from "slice/alertSlice";
import DrawerView from "../DrawerView";
import { IconButton } from "@mui/material";
import { DrawerHeaderWrapper, DrawerContentWrapper } from "globalStyles";

const ModelDrawer = ({ model, open, setOpen, setModel, type, setType }) => {
  const { logoUrl, name } = model;

  const { crudLoading } = useSelector((state) => state.models);
  const dispatch = useDispatch();

  const toggleDrawer = (open) => () => {
    setOpen(open);
    setType("view");
  };
  const handleSubmit = async (values) => {
    const { payload } = await dispatch(
      updateModel({ payload: values, dispatch })
    );
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

  useEffect(() => {
    dispatch(getAllModelTags());
  }, []);

  return (
    <React.Fragment>
      <DrawerWrapper anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <DrawerHeaderWrapper>
          <Box className="logo_name">
            <LogoFrame
              className={"logo_frame_drawer"}
              imgLink={logoUrl}
            ></LogoFrame>
            <SullyTypography
              variant="body2"
              classNameProps={"sub_title_1_lg drawer_text"}
            >
              {name}
            </SullyTypography>
            {type === "view" && (
              <IconButton
                onClick={() => {
                  setType("edit");
                }}
              >
                <EditIcon className="edit_icon" sx={{ fontSize: "20px" }} />
              </IconButton>
            )}
          </Box>
          {type === "view" && (
            <Box className="btn_group">
              <IconButton
                className="close"
                aria-label="close"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          )}
          {type === "edit" && (
            <IconButton
              className="close"
              aria-label="close"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DrawerHeaderWrapper>
        {type === "view" && <DrawerView data={model} />}
        {type === "edit" && (
          <DrawerContentWrapper>
            <ModelForm
              setType={setType}
              isEdit={true}
              isLoading={crudLoading}
              handleSubmit={handleSubmit}
              initialValues={{
                ...modelInitialValues,
                ...model,
                features: {
                  Pricing: [""],
                  Weakness: [""],
                  "Key Features": [""],
                },
              }}
            />
          </DrawerContentWrapper>
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
