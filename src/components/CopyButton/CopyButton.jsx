import { useCopyText } from "hooks";
import CopyText from "components/CopyText";
import TextButton from "../TextButton";
import { CopyIcon } from "sullyIcons";
import PropTypes from "prop-types";

const CopyButton = ({ item }) => {
  const { copyToClipboard, isCopied } = useCopyText();

  if (isCopied) return <CopyText text={"Code Copied"} />;

  return (
    <TextButton onClick={() => copyToClipboard(item)} className="medium_btn">
      <CopyIcon /> Copy Code
    </TextButton>
  );
};

CopyButton.propTypes = {
  item: PropTypes.any,
};

export default CopyButton;
