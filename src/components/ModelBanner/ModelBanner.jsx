import { Box } from "@mui/material";
// import { SullyTypography } from "components";
import { ModelBannerWrapper } from "./style";
import { BannerDog } from "assets";
import PropTypes from "prop-types";

const ModelBanner = ({ text, children }) => {
  return (
    <ModelBannerWrapper className="banner">
      <Box className="banner_content">
        <Box className="banner_dog">
          <img alt="" src={BannerDog} />
        </Box>
        <Box className="banner_text">{text}</Box>
      </Box>
      {children}
    </ModelBannerWrapper>
  );
};

ModelBanner.propTypes = {
  children: PropTypes.any,
  text: PropTypes.any,
};

export default ModelBanner;
