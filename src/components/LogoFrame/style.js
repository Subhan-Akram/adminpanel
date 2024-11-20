import { Box, styled } from "@mui/material";

export const LogoFrameWrapper = styled(Box)`
  & .logo_frame {
    box-sizing: border-box;
    padding: 10px;
    width: 60px;
    height: 60px;
    background: var(--primary-color-13);
    border-radius: 8px;
    background: var(--model-icon-bg);
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  & .logo_frame_small {
    width: 36px;
    height: 36px;
  }
  & .logo_frame_large {
    width: 110px;
    height: 110px;
  }
  @media screen and (max-width: 1024px) {
    & .logo_frame_large {
      width: 60px;
      height: 60px;
    }
  }
`;
