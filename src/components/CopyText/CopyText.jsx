import SullyTypography from "components/SullyTypography";
import { CheckMarked } from "sullyIcons";
import { CopyTextWrapper } from "./style";
import PropTypes from "prop-types";

const CopyText = ({ text }) => {
  return (
    <CopyTextWrapper>
      <CheckMarked />
      <SullyTypography classNameProps="key_copy">{text}</SullyTypography>
    </CopyTextWrapper>
  );
};
CopyText.propTypes = {
  text: PropTypes.string.isRequired,
};
export default CopyText;
