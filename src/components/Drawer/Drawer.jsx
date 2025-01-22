import React from "react";
import {
  DrawerFooter,
  DrawerWrapper,
  DrawerHeaderWrapper,
  DrawerContentWrapper,
} from "./style";
import { OutlinedButton, PrimaryButton, SullyTypography } from "components";
import { Box, IconButton } from "@mui/material";
import { CloseIcon } from "sullyIcons";

function Drawer({ children, open, setOpen, title, isLoading, formRef }) {
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    formRef?.current?.submitForm();
  };

  return (
    <DrawerWrapper
      anchor={"right"}
      open={open}
      formRef={formRef}
      onClose={handleClose}
      title="Edit User"
      isEdit={true}
    >
      <DrawerHeaderWrapper>
        <SullyTypography
          variant="body2"
          classNameProps={"sub_title_1_lg drawer_text"}
        >
          {title}
        </SullyTypography>
        <Box className="btn_group">
          <IconButton
            className="close"
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DrawerHeaderWrapper>
      <DrawerContentWrapper>{children}</DrawerContentWrapper>
      <DrawerFooter>
        <OutlinedButton
          onClick={handleClose}
          variant="contained"
          color="primary"
        >
          Cancel
        </OutlinedButton>
        <PrimaryButton
          isLoading={isLoading}
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Save
        </PrimaryButton>
      </DrawerFooter>
    </DrawerWrapper>
  );
}

export default Drawer;
