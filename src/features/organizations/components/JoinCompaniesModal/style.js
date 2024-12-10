import { Box, Dialog, styled } from "@mui/material";

export const JoinOrganizationWrapper = styled(Dialog)`
  & .MuiDialogContent-root {
    margin-top: 12px;
    width: 500px;
    & .modal_title {
      margin-bottom: 6px;
    }
  }
  /* width: 300px; */
`;