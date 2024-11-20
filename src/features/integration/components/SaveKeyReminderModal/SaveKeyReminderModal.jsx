import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ModalWrapper } from "./style";
import {
  CopyText,
  OutlinedButton,
  PrimaryButton,
  SullyTypography,
} from "components";
import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CopyIcon } from "sullyIcons";
import { useCopyText } from "hooks";
import { setIsSaveKeyReminderOpen } from "features/integration/slice";
import { downloadFile } from "utils";

const SaveKeyReminderModal = () => {
  const { isSaveKeyReminderOpen, securityKey } = useSelector(
    (state) => state.integration,
  );
  const { copyToClipboard, isCopied } = useCopyText();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setIsSaveKeyReminderOpen(false));
  };
  return (
    <>
      <ModalWrapper
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isSaveKeyReminderOpen}
      >
        <DialogTitle id="customized-dialog-title">Save your Key</DialogTitle>
        <IconButton className="close" aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box className="select_model_box">
            <SullyTypography classNameProps="confirm_modal_text">
              Please save this security key somewhere safe. For security reasons{" "}
              <SullyTypography
                variant="span"
                classNameProps="confirm_modal_text_bold"
              >
                you won’t be able to view it again
              </SullyTypography>
              . If you lose this key you’ll need to generate a new one.
            </SullyTypography>
            <Box className="key_text_box">
              <TextField
                disabled={true}
                className="text_field"
                value={securityKey}
                type="password"
                placeholder="Enter Security Key"
              />
              <PrimaryButton
                startIcon={!isCopied && <CopyIcon />}
                onClick={() => {
                  copyToClipboard(securityKey);
                }}
              >
                {isCopied ? <CopyText text={"Copied"} /> : "Copy"}
              </PrimaryButton>
            </Box>
            <Box className="download_text_box">
              <SullyTypography classNameProps="card_title_1 downlaod_title">
                Download
              </SullyTypography>
              <SullyTypography classNameProps="confirm_modal_text">
                Your export is ready, If you don’t see your file, you can try{" "}
                <SullyTypography
                  onClick={() => {
                    downloadFile(securityKey, "security key");
                  }}
                  variant="span"
                  classNameProps="download"
                >
                  Download
                </SullyTypography>{" "}
                it again
              </SullyTypography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Box>
            {" "}
            <OutlinedButton className="medium_btn" onClick={handleClose}>
              Done
            </OutlinedButton>
          </Box>
        </DialogActions>
      </ModalWrapper>
    </>
  );
};

export default SaveKeyReminderModal;
