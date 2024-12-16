import { Box, styled } from "@mui/material";

export const DrawerHeaderWrapper = styled(Box)`
  padding: 1rem 24px;
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
    width: 32px;
    height: 32px;
    & svg {
      width: 22px;
      height: 22px;
      & path {
        fill: var(--text-primary) !important;
      }
    }
  }
  & .btn_group {
    display: flex;
    justify-content: flex-start;
    gap: 0px;
    /* & .MuiIconButton-root {
      padding: 16px;
      margin-top: -8px;
    } */
  }
`;
