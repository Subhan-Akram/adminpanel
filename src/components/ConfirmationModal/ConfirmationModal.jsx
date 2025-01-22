import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ConfirmationModalWrapper } from "./style";
import PropTypes from "prop-types";
import { CloseIcon } from "sullyIcons";
import { IconButton } from "@mui/material";

import { OutlinedButton, PrimaryButton, SullyTypography } from "components";

export default function ConfirmationModal({
  isConfirmModalOpen,
  setIsConfirmModalOpen,
  handleSubmit,
  title,
  description,
  confirmBtnText,
  isLoading,
}) {
  const handleClose = () => {
    setIsConfirmModalOpen(false);
  };

  return (
    <>
      <ConfirmationModalWrapper
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
            onClick={handleSubmit}
          >
            {confirmBtnText ?? "Confirm"}
          </PrimaryButton>
        </DialogActions>
      </ConfirmationModalWrapper>
    </>
  );
}

ConfirmationModal.propTypes = {
  handleSubmit: PropTypes.func,
  isConfirmModalOpen: PropTypes.bool,
  setIsConfirmModalOpen: PropTypes.func,
  modelName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.element,
  confirmBtnText: PropTypes.string,
  isLoading: PropTypes.bool,
};
