import { Box } from "@mui/material";
import { BannerWrapper } from "./style";
import { BannerDog } from "assets";
import PropTypes from "prop-types";

const Banner = ({ text, children }) => {
  return (
    <BannerWrapper className="banner">
      <Box className="banner_content">
        <Box className="banner_dog">
          <img alt="" src={BannerDog} />
        </Box>
        <Box className="banner_text">{text}</Box>
      </Box>
      {children}
    </BannerWrapper>
  );
};

Banner.propTypes = {
  children: PropTypes.any,
  text: PropTypes.any,
};

export default Banner;
