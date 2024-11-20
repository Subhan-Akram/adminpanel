import { Card, styled } from "@mui/material";

export const ModelCardWrapper = styled(Card, {
  shouldForwardProp: (prop) => prop !== "isPromptAvailable",
})`
  width: 100%;

  border: 1px solid var(--border-1);
  background: var(--surface-l0);
  border-radius: 16px;
  position: relative;
  overflow: visible;
  padding: 0;

  & .integrated_chips_tablet {
    display: none;
  }

  & .prompt_response_box {
    border-radius: 8px;
    background: var(--surface-l1);
    padding: 0 16px;
    max-width: 100%;
    overflow-wrap: break-word;
  }

  & .prompt_query_box {
    border-radius: 14px;
    padding: 16px;
    background: var(--model-icon-bg);
    width: 78%;
    align-self: flex-end;
  }

  & .cancel_icon {
    position: absolute;
    top: -17px;
    cursor: pointer;
    z-index: 120;
    left: 50%;
  }

  @media (max-width: 930px) {
    & .model_name_compare {
      font-size: 14px !important;
    }
    & .prompt_query_box {
      padding: 10px;
      width: 80%;
      & .sub_title_1 {
        font-size: 14px !important;
      }
    }
    & .prompt_response_box {
      padding: 0 8px;
      .sully_response {
        font-size: 14px !important;
      }
    }
    & .integrated_chips_desktop {
      display: none;
    }
    & .integrated_chips_tablet {
      display: block;
    }

    & .cancel_icon {
      & svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
