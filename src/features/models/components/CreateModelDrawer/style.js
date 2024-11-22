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
    border-bottom: 1px solid var(--border-1);
  }
  & .drawer_content {
    padding: 1rem 12px;
    overflow: auto;
  }
`;
