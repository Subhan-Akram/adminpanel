import { TextButtonWrapper } from "./Style";
import PropTypes from "prop-types";
const TextButton = ({ children, ...props }) => {
  return (
    <TextButtonWrapper {...props} variant="text">
      {children}
    </TextButtonWrapper>
  );
};
TextButton.propTypes = {
  children: PropTypes.node,
};
export default TextButton;
