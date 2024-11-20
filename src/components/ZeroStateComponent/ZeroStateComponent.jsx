import { AddCardWrapper } from "./style";
import { FolderDynamicIcon } from "sullyIcons";
import { PrimaryButton, SullyTypography } from "components";
import PropTypes from "prop-types";
const ZeroStateComponent = ({ title, text, btnText, handleClick, icon }) => {
  return (
    <AddCardWrapper>
      {icon ? <FolderDynamicIcon width={"80px"} height={"80px"} /> : ""}
      <SullyTypography classNameProps="medium_title">{title}</SullyTypography>
      <SullyTypography classNameProps="zero_state_text">{text}</SullyTypography>
      {btnText ? (
        <PrimaryButton onClick={handleClick}>{btnText}</PrimaryButton>
      ) : (
        ""
      )}
    </AddCardWrapper>
  );
};
ZeroStateComponent.propTypes = {
  title: PropTypes.string,
  btnText: PropTypes.string,
  handleClick: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.bool,
};
export default ZeroStateComponent;
