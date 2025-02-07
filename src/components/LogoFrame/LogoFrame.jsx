import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { LogoFrameWrapper } from "./style";

const LogoFrame = ({ imgLink, className }) => {
  return (
    <LogoFrameWrapper>
      <Box className={`logo_frame ${className}`}>
        {imgLink && (
          <img
            src={imgLink}
            style={{ objectFit: "contain", color: "white" }}
            alt=""
          />
        )}
      </Box>
    </LogoFrameWrapper>
  );
};

LogoFrame.propTypes = {
  imgLink: PropTypes.string,
  className: PropTypes.string,
};

export default LogoFrame;
