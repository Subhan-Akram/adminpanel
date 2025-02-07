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

  & .autocomplete_tags {
    margin-top: 6px;
    width: 100%;
    & .MuiOutlinedInput-root {
      padding-right: 3px !important;
      padding-left: 3px !important;
    }
    & .close_chip_icon {
      color: var(--tag-text-icon-selected) !important;
      font-size: 12px !important;
      margin-top: 1.4px !important;
      margin-left: -4px !important;
    }
  }
  & .join_companies_container {
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
