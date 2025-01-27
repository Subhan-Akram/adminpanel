import { Box, styled } from "@mui/material";

export const OrganizationFormWrapper = styled(Box)`
  label {
    margin-bottom: 6px;
  }
  & .rating_error {
    margin-top: -10px;
  }
  & .switches_items {
    & .MuiFormControlLabel-root {
      height: 22px;
    }
  }
  & .radio_btn {
    height: 33px;
  }
`;
