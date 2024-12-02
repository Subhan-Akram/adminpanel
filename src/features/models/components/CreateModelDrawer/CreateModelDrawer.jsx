import { useState } from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { DrawerWrapper } from "./style";
import { PrimaryButton, SullyTypography } from "../../../../components";
import ModelForm from "../ModelForm";
import { modelInitialValues } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { createModel } from "../../services";
import { triggerAlert } from "slice/alertSlice";
import { IconButton } from "@mui/material";
import { CloseIcon } from "sullyIcons";
const CreateModelDrawer = () => {
  const [open, setOpen] = useState(false);
  const { crudLoading } = useSelector((state) => state.models);
  const dispatch = useDispatch();
  const toggleDrawer = (open) => () => {
    setOpen(open);
  };
  const handleSubmit = async (values) => {
    console.log("values", values);
    const { payload } = await dispatch(
      createModel({ dispatch, payload: values })
    );
    console.log("payload===", payload);
    if (payload) {
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Model Created Successfully",
          alertType: "success",
        })
      );
      setOpen(false);
    }
  };
  return (
    <>
      <PrimaryButton
        onClick={() => {
          setOpen(true);
        }}
      >
        Create Model
      </PrimaryButton>
      <DrawerWrapper anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Box className="drawer_header">
          <SullyTypography classNameProps={"page_title"}>
            Create Model
          </SullyTypography>
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
        <Box className="drawer_content">
          <ModelForm
            handleSubmit={handleSubmit}
            initialValues={modelInitialValues}
            isLoading={crudLoading}
          />
        </Box>
      </DrawerWrapper>
    </>
  );
};
CreateModelDrawer.propTypes = {
  model: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
export default CreateModelDrawer;
