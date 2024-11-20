import { Box, CircularProgress } from "@mui/material";
import { PrimaryButtonWrapper } from "./Style";
import PropTypes from "prop-types";
const PrimaryButton = ({ children, ...props }) => {
  const { isLoading } = props;
  return (
    <PrimaryButtonWrapper {...props} variant="contained">
      {children}
      {!!isLoading && (
        <Box className="button_loader">
          <CircularProgress size={12} color="inherit" />
        </Box>
      )}
    </PrimaryButtonWrapper>
  );
};
PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};
export default PrimaryButton;
