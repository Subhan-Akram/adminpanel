import { Box, styled } from "@mui/material";

export const CompanyFormWrapper = styled(Box)`
  label {
    margin-bottom: 6px;
  }
  & .label_div {
    margin-top: 6px;
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

  & .join_organization_container {
    margin-top: 8px;
    overflow-y: auto;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    gap: 12px;
    & .MuiChip-root {
      & .label_chip {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      & .MuiSvgIcon-root {
        font-size: 14px;
      }
    }
  }
`;
