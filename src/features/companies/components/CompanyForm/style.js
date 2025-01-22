import { Box, styled } from "@mui/material";

export const CompanyFormWrapper = styled(Box)`
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
`;
