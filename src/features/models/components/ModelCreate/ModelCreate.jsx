import { useState } from "react";
import PropTypes from "prop-types";
import { ModelCreateWrapper } from "./style";
import { PrimaryButton, SullyTypography } from "components";
import ModelForm from "../ModelForm";
import { modelInitialValues } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { createModel } from "../../services";
import { IconButton } from "@mui/material";
import { CloseIcon } from "sullyIcons";
import { DrawerHeaderWrapper, DrawerContentWrapper } from "globalStyles";

const ModelCreate = () => {
  const [open, setOpen] = useState(false);
  const { crudLoading } = useSelector((state) => state.models);
  const dispatch = useDispatch();
  const toggleDrawer = (open) => () => {
    setOpen(open);
  };
  const handleSubmit = (values) => {
    dispatch(createModel({ dispatch, payload: values }))
      .unwrap()
      .then(() => {
        setOpen(false);
      });
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
      <ModelCreateWrapper
        anchor={"right"}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <DrawerHeaderWrapper>
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
        </DrawerHeaderWrapper>
        <DrawerContentWrapper className="drawer_content">
          <ModelForm
            handleSubmit={handleSubmit}
            initialValues={modelInitialValues}
            isLoading={crudLoading}
            setOpen={setOpen}
          />
        </DrawerContentWrapper>
      </ModelCreateWrapper>
    </>
  );
};

ModelCreate.propTypes = {
  model: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
export default ModelCreate;
