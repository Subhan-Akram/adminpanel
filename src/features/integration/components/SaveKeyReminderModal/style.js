import { Dialog, styled } from "@mui/material";

export const ModalWrapper = styled(Dialog)`
  & .MuiDialog-paper {
    min-width: 444px;
  }
  & .close {
    position: absolute;
    right: 16px;
    top: 16px;
  }
  & .key_text_box {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
    margin-top: 8px;
    & .MuiButton-root {
      & .MuiButton-startIcon {
        margin-left: 0;
        margin-right: 6px;
      }
      svg {
        path {
          fill: #202939;
        }
      }
    }
  }
  & .download_text_box {
    margin-top: 32px;
  }
  & .downlaod_title {
    margin-bottom: 16px;
  }
  & .MuiDialogContent-root {
    padding: 24px;
    & .text_field {
      width: 100%;
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
        & input {
          box-sizing: border-box;
          height: 40px !important;
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
