import { Box, styled } from "@mui/material";

export const ModelViewWrapper = styled(Box)`
  height: calc(100vh - 74px);
  padding: 24px;
  overflow: auto;
  & .logo_name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
  & .logo_frame_box {
    margin-top: 6px;
  }
  & .drawer_text {
    font-size: 20px !important;
    margin-top: -10px;
  }
  & .chips_box {
    display: flex;
    justify-content: flex-start;
    gap: 6px;
    margin-top: 0px;
    flex-wrap: wrap;
  }
  & .text_with_icon {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }
`;
