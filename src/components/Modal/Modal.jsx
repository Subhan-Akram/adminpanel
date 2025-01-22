import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { Box, IconButton } from "@mui/material";
import { OutlinedButton, PrimaryButton } from "components";
import { ModalWrapper } from "./style";

const Modal = ({ children, open, setOpen, title, isLoading, formRef }) => {
  const handleModal = (val) => {
    setOpen(val);
  };

  const handleFormSubmit = () => {
    formRef?.current?.submitForm();
  };

  return (
    <ModalWrapper
      open={open}
      onClose={() => {
        handleModal(false);
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => {
          handleModal(false);
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Box className="content_container">{children}</Box>
      </DialogContent>
      <DialogActions>
        <OutlinedButton
          onClick={() => {
            handleModal(false);
          }}
        >
          Cancel
        </OutlinedButton>
        <PrimaryButton isLoading={isLoading} onClick={handleFormSubmit}>
          Save
        </PrimaryButton>
      </DialogActions>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  type: PropTypes.string,
};

export default Modal;
