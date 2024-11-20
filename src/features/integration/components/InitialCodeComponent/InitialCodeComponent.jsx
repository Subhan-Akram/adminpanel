import { CardWrapper } from "./style";
import { FolderDynamicIcon } from "sullyIcons";
import { OutlinedButton, SullyTypography } from "components";
import PropTypes from "prop-types";
const InitialCodeComponent = ({ title, text, btnText, handleClick, icon }) => {
  return (
    <CardWrapper>
      {icon ? <FolderDynamicIcon width={"80px"} height={"80px"} /> : ""}
      <SullyTypography classNameProps="medium_title code_initial_title">
        {title}
      </SullyTypography>
      <SullyTypography classNameProps="zero_state_text">{text}</SullyTypography>
      {btnText ? (
        <OutlinedButton className="primary_1" onClick={handleClick}>
          {btnText}
        </OutlinedButton>
      ) : (
        ""
      )}
    </CardWrapper>
  );
};
InitialCodeComponent.propTypes = {
  title: PropTypes.node,
  btnText: PropTypes.string,
  handleClick: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.bool,
};
export default InitialCodeComponent;
