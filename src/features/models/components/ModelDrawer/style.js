import { Drawer, styled } from "@mui/material";

export const DrawerWrapper = styled(Drawer)`
  z-index: 180;

  & .MuiPaper-root {
    width: 700px;
    background-color: var(--surface-l1);
    background-image: none;
  }
  & .drawer_header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-1);
    & .logo_name {
      display: flex;
      justify-content: flex-start;
      gap: 8px;
      align-items: center;
    }
    & .close {
      & svg {
        width: 24px;
        height: 24px;
        & path {
          fill: var(--text-primary) !important;
        }
      }
    }
  }
  & .btn_group {
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    & .MuiIconButton-root {
      padding: 16px;
    }
  }

  & .chips_box {
    display: flex;
    justify-content: flex-start;
    gap: 6px;
    margin-top: 0px;
    flex-wrap: wrap;
  }

  & .drawer_content {
    overflow: auto;
    padding: 1rem 24px;
    /* overflow: auto; */
    & .logo_frame_box {
      margin-top: 6px;
    }
  }
`;
