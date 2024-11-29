import { Box, Drawer, styled } from "@mui/material";

export const DrawerWrapper = styled(Box)`
  /* z-index: 180; */
  padding: 0 16px !important;
  & .logo_name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
  padding: 1rem 12px;
  /* overflow: auto; */
  & .logo_frame_box {
    margin-top: 6px;
  }
  & .drawer_text {
    font-size: 20px !important;
    margin-top: -10px;
  }
`;
