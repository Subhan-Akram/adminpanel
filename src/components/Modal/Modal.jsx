/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { Box, IconButton } from "@mui/material";
import { OutlinedButton, PrimaryButton } from "components";

const Modal = ({ children, open, setOpen, title, isLoading, formRef }) => {
  const handleModal = (val) => {
    setOpen(val);
  };

  const handleFormSubmit = () => {
    formRef.current?.submitForm();
  };

  return (
    <React.Fragment>
      <Dialog
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
          <Box>{children}</Box>
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
      </Dialog>
    </React.Fragment>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  type: PropTypes.string,
};

export default Modal;
