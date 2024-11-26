import { Box, styled } from "@mui/material";

export const FormWrapper = styled(Box)`
  & .InputLabelWrapper_text {
    font-size: 14px;
    font-family: "satoshi";
    font-weight: 500;
  }
  & .rating_error {
    margin-top: -10px;
  }
  & .autocomplete_tags {
    height: 37.5px !important;
    margin-top: 2px !important;
  }
`;
