import { Drawer, styled } from "@mui/material";

export const DrawerWrapper = styled(Drawer)`
  z-index: 180;
  & .MuiPaper-root {
    background-color: var(--primary-background);
    background-image: none;
  }
  & .drawer_header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
  & .drawer_content {
    width: 500px;
  }
`;
