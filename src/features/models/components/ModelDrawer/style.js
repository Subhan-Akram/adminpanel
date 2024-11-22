import { Drawer, styled } from "@mui/material";

export const DrawerWrapper = styled(Drawer)`
  z-index: 180;

  & .MuiPaper-root {
    width: 70%;
    background-color: var(--surface-l1);
    background-image: none;
  }
  & .drawer_header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-1);
  }
  & .btn_group {
    display: flex;
    justify-content: flex-start;
    gap: 12px;
  }
  & .chips_box {
    display: flex;
    justify-content: flex-start;
    gap: 6px;
    margin-top: 16px;
    flex-wrap: wrap;
  }
  ,
  & .drawer_content {
    padding: 1rem 12px;
    overflow: auto;
    & .logo_frame_box {
      margin-top: 6px;
    }
  }
`;
