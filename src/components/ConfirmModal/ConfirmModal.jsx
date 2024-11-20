import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ConfirmModalWrapper } from "./Style";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import { CloseIcon } from "sullyIcons";
import { OutlinedButton, PrimaryButton, SullyTypography } from "components";

export default function ConfirmModal({
  isConfirmModalOpen,
  setIsConfirmModalOpen,
  handleSubmit,
  modelName,
}) {
  const handleClose = () => {
    setIsConfirmModalOpen(false);
  };
  return (
    <>
      <ConfirmModalWrapper
        open={isConfirmModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle id="customized-dialog-title">
          <SullyTypography classNameProps="modal_title">
            Remove - {modelName}
          </SullyTypography>
        </DialogTitle>
        <IconButton className="close" aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <SullyTypography classNameProps="confirm_modal_text">
            Are you sure you want to remove{" "}
            <SullyTypography variant="span" classNameProps="model_name">
              {modelName}
            </SullyTypography>{" "}
            from the comparison?
          </SullyTypography>
        </DialogContent>
        <DialogActions>
          <OutlinedButton className="outlined_button" onClick={handleClose}>
            Cancel
          </OutlinedButton>
          <PrimaryButton className="primary_red" onClick={handleSubmit}>
            Remove
          </PrimaryButton>
        </DialogActions>
      </ConfirmModalWrapper>
    </>
  );
}

ConfirmModal.propTypes = {
  handleSubmit: PropTypes.func,
  isConfirmModalOpen: PropTypes.bool,
  setIsConfirmModalOpen: PropTypes.func,
  modelName: PropTypes.string,
};
