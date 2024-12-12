import { useCopyText } from "hooks";
import CopyText from "components/CopyText";
import TextButton from "../TextButton";
import { CopyIcon } from "sullyIcons";
import PropTypes from "prop-types";

const CopyButton = ({ title, text }) => {
  const { copyToClipboard, isCopied } = useCopyText();

  if (isCopied) return <CopyText text={`${title} Copied`} />;

  return (
    <TextButton onClick={() => copyToClipboard(text)} className="medium_btn">
      <CopyIcon />
    </TextButton>
  );
};

CopyButton.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};

export default CopyButton;
