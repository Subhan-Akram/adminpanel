import { Box, Drawer, styled } from "@mui/material";

export const DrawerWrapper = styled(Box)`
  /* z-index: 180; */
  & .logo_name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
  padding: 0rem 24px;
  /* overflow: auto; */
  & .logo_frame_box {
    margin-top: 6px;
  }
  & .drawer_text {
    font-size: 20px !important;
    margin-top: -10px;
  }
`;
