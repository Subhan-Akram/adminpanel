import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ModalWrapper } from "./style";
import { OutlinedButton, PrimaryButton, SullyTypography } from "components";
import { Box, CircularProgress, Radio } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ModelSetModal = ({
  isModelSetOpen,
  setIsModelSetOpen,
  selectedModelSet,
  handleClick,
}) => {
  const [selectedModel, setSelectedModel] = useState({ extId: "" });
  const { modelSet, createModelSetIsLoading } = useSelector(
    (state) => state.integration,
  );
  const handleModal = (val) => {
    setIsModelSetOpen(val);
  };
  const handleRadioChange = (val) => {
    setSelectedModel({ extId: val });
  };
  const getModelIds =
    modelSet?.[0]?.aiModelsInSet?.map((val) => val.extId) || [];
  useEffect(() => {
    if (selectedModelSet.length) {
      setSelectedModel(selectedModelSet[0]);
    }
  }, [selectedModelSet]);
  return (
    <>
      <ModalWrapper
        onClose={() => {
          handleModal(false);
        }}
        aria-labelledby="customized-dialog-title"
        open={isModelSetOpen}
      >
        <DialogTitle id="customized-dialog-title">Integrate Model</DialogTitle>
        <IconButton
          className="close"
          aria-label="close"
          onClick={() => {
            handleModal(false);
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box className="select_model_box">
            <SullyTypography classNameProps="sub_title_2">
              Select Your LLM Model
            </SullyTypography>
            {selectedModelSet.map(({ extId, logoUrl, name }) => (
              <Box
                key={extId}
                className="model_items"
                onClick={() => handleRadioChange(extId)}
                display="flex"
                alignItems="center"
              >
                <Box className="model_name_image">
                  <Box className="box_image">
                    <img src={logoUrl} alt="" />
                  </Box>
                  <SullyTypography classNameProps="sideBarListItem">
                    {name}
                  </SullyTypography>
                </Box>
                <Radio
                  checked={selectedModel.extId === extId}
                  value={extId}
                  sx={{ marginLeft: "auto" }}
                />
              </Box>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Box>
            {" "}
            <OutlinedButton
              className="medium_btn"
              onClick={() => {
                handleModal(false);
              }}
            >
              Cancel
            </OutlinedButton>
          </Box>
          <Box>
            {" "}
            <PrimaryButton
              className="medium_btn_1"
              autoFocus
              onClick={() => {
                handleClick([...getModelIds, selectedModel.extId]);
              }}
            >
              Confirm
              {createModelSetIsLoading ? (
                <Box className="button_loader">
                  <CircularProgress size={12} color="inherit" />
                </Box>
              ) : (
                ""
              )}
            </PrimaryButton>
          </Box>
        </DialogActions>
      </ModalWrapper>
    </>
  );
};
ModelSetModal.propTypes = {
  isModelSetOpen: PropTypes.bool,
  setIsModelSetOpen: PropTypes.func,
  selectedModelSet: PropTypes.array,
  handleClick: PropTypes.func,
};
export default ModelSetModal;
