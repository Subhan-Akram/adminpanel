import { useState } from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { DrawerWrapper } from "./style";
import { PrimaryButton, SullyTypography } from "../../../../components";
import ModelForm from "../ModelForm";
import { modelInitialValues } from "../../constants";
import { useDispatch } from "react-redux";
import { createModel } from "../../services";
import { triggerAlert } from "slice/alertSlice";

const CreateModelDrawer = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleDrawer = (open) => () => {
    setOpen(open);
  };
  const handleSubmit = (values) => {
    console.log("values", values);
    const { payload } = dispatch(createModel({ dispatch, values }));
    if (payload) {
      dispatch(
        triggerAlert({
          title: "Success",
          text: "Model Created Successfully",
          alertType: "success",
        })
      );
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
        </Box>
        <Box className="drawer_content">
          {
            <ModelForm
              handleSubmit={handleSubmit}
              initialValues={modelInitialValues}
              isLoading={false}
            />
          }
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
