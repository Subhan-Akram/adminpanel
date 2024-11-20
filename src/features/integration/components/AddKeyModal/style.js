import { Dialog, styled } from "@mui/material";

export const ModalWrapper = styled(Dialog)`
  & .MuiDialog-paper {
    min-width: 444px;
  }
  & .close {
    right: 16px;
    top: 16px;
  }
  & .MuiDialogContent-root {
    padding: 24px 16px;
    & .text_field {
      width: 100%;
      margin-top: 8px;

      input::placeholder {
        color: var(--Text-text-tertiary);
        font-family: "satoshi";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        opacity: 1;
      }
    }
    & .select_model_box {
      & .MuiTextField-root {
        margin-top: 8px;

        & input {
          box-sizing: border-box;
          height: 62px !important;
        }
      }
    }
  }
  & .MuiDialogActions-root {
    & .button_loader {
      margin-left: 6px;
    }
  }
`;
