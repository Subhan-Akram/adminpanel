import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ModalWrapper } from "./style";
import { OutlinedButton, PrimaryButton, SullyTypography } from "components";
import { Box, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";

const AddKeyModal = ({ handleClick, isOpen, setIsOpen, activeTab }) => {
  const { isSnippetLoading } = useSelector((state) => state.integration);
  // const [{ code: language } = {}] = programmingLanguages;

  const [token, setToken] = useState("");

  const handleClose = () => {
    setIsOpen(false);
    setToken("");
  };

  return (
    <>
      <ModalWrapper
        onClose={() => {
          handleClose();
        }}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle id="customized-dialog-title">Security Key</DialogTitle>
        <IconButton
          className="close"
          aria-label="close"
          onClick={() => {
            handleClose();
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box className="select_model_box">
            <SullyTypography classNameProps="sub_title_2">
              Add Secuity Key
            </SullyTypography>
            <TextField
              multiline
              rows={3}
              value={token}
              onChange={({ target: { value } }) => setToken(value)}
              placeholder="Enter Security Key"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box>
            {" "}
            <OutlinedButton
              className="medium_btn"
              onClick={() => handleClose()}
            >
              Cancel
            </OutlinedButton>
          </Box>
          <Box>
            <PrimaryButton
              className="medium_btn_1"
              autoFocus
              disabled={!token}
              isLoading={isSnippetLoading}
              onClick={async () => {
                await handleClick(token, activeTab.code);
                setToken("");
              }}
            >
              Generate Code
            </PrimaryButton>
          </Box>
        </DialogActions>
      </ModalWrapper>
    </>
  );
};
AddKeyModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  setIsOpen: PropTypes.func,
  activeTab: PropTypes.object,
};
export default AddKeyModal;
