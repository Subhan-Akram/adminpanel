import { OutlinedButtonWrapper } from "./Style";
import PropTypes from "prop-types";
const OutlinedButton = ({ children, ...props }) => {
  return (
    <OutlinedButtonWrapper {...props} variant="outlined">
      {children}
    </OutlinedButtonWrapper>
  );
};
OutlinedButton.propTypes = {
  children: PropTypes.node.isRequired,
};
export default OutlinedButton;
