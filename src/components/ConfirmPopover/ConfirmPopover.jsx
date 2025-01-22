import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { PopoverWrapper } from "./style";
import PrimaryButton from "../PrimaryButton";
import OutlinedButton from "../OutlinedButton";
import SullyTypography from "../SullyTypography";

function ConfirmPopover({ text, popover, setPopover, handleAction }) {
  return (
    <PopoverWrapper
      id="delete_popover"
      open={Boolean(popover.element)}
      anchorEl={popover.element}
      onClose={() => setPopover(false)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box>
        <Box>
          <SullyTypography classNameProps="modal_title">{text}</SullyTypography>
        </Box>
        <Box
          className="group_btn"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px",
            paddingTop: "12px",
          }}
        >
          <PrimaryButton
            variant="contained"
            color="error"
            size="small"
            onClick={handleAction}
            className="primary_red"
          >
            Delete
          </PrimaryButton>
          <OutlinedButton
            className="outlined_button"
            onClick={() => setPopover(false)}
          >
            Cancel
          </OutlinedButton>
        </Box>
      </Box>
    </PopoverWrapper>
  );
}

ConfirmPopover.propTypes = {
  text: PropTypes.string.isRequired,
  popover: PropTypes.shape({
    element: PropTypes.any,
  }),
  setPopover: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default ConfirmPopover;
