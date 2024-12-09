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
    margin-top: 6px;
    & .MuiOutlinedInput-root {
      padding-right: 3px !important;
      padding-left: 3px !important;
    }
  }
  @media screen and (max-width: 960px) {
    & .rating_box {
      margin-top: 16px;
    }
  }
`;
