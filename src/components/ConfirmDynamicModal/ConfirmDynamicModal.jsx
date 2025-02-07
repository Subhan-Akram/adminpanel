import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ButtonWrapper, ConfirmDynamicModalWrapper } from "./style";
import PropTypes from "prop-types";
import { CloseIcon } from "sullyIcons";
import { Box, IconButton } from "@mui/material";
import { OutlinedButton, PrimaryButton, SullyTypography } from "components";
import { useState } from "react";

export default function ConfirmDynamicModal({
  handleSubmit,
  title,
  description,
  confirmBtnText,
  isLoading,
  children,
}) {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const handleClose = () => setIsConfirmModalOpen(false);

  return (
    <>
      <ButtonWrapper
        onClick={() => {
          setIsConfirmModalOpen(true);
        }}
      >
        {children}
      </ButtonWrapper>
      <ConfirmDynamicModalWrapper
        open={isConfirmModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="customized-dialog-title">
          <SullyTypography classNameProps="modal_title">
            {title}
          </SullyTypography>
        </DialogTitle>
        <IconButton className="close" aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>{description}</DialogContent>
        <DialogActions>
          <OutlinedButton className="outlined_button" onClick={handleClose}>
            Cancel
          </OutlinedButton>
          <PrimaryButton
            className="primary_red"
            isLoading={isLoading}
            onClick={() => {
              handleSubmit().then(() => {
                setIsConfirmModalOpen(false);
              });
            }}
          >
            {confirmBtnText ?? "Confirm"}
          </PrimaryButton>
        </DialogActions>
      </ConfirmDynamicModalWrapper>
    </>
  );
}

ConfirmDynamicModal.propTypes = {
  handleSubmit: PropTypes.func,
  isConfirmModalOpen: PropTypes.bool,
  setIsConfirmModalOpen: PropTypes.func,
  modelName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.element,
  confirmBtnText: PropTypes.string,
  isLoading: PropTypes.bool,
};
