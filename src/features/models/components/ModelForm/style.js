import { Box, styled } from "@mui/material";

export const FormWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== "isEdit",
})`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  height: ${({ isEdit }) => `calc(100vh - ${isEdit ? "79px" : "65px"})`};
  & .form_container {
    overflow: auto;
    padding-top: 0;
    margin-top: 0;
  }
  & .rating_box {
    & .MuiRating-root {
      label {
        font-size: 22px !important;
        margin-top: 4px;
      }
    }
  }
  & .InputLabelWrapper_text {
    font-size: 14px !important;
    font-family: "satoshi";
    font-weight: 500;
  }
  & .rating_error {
    margin-top: -10px;
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
  & .form_buttons {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 1rem 24px;
    border-top: 1px solid var(--border-1);
  }
  @media screen and (max-width: 960px) {
    & .rating_box {
      margin-top: 16px;
    }
  }
`;
