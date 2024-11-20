import { Dialog, styled } from "@mui/material";

export const ModalWrapper = styled(Dialog)`
  & .MuiDialog-paper {
    min-width: 444px;
  }

  & .close {
    position: absolute;
    right: 24px;
    top: 24px;
  }
  & .MuiDialogContent-root {
    & .text_field {
      width: 100%;
      margin-top: 8px;

      input::placeholder {
        color: var(--text-tertiary);
        font-family: "satoshi";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        opacity: 1;
      }
    }
    & .select_model_box {
    }
    & .model_items {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      border-radius: 8px;
      padding: 12px;
      border: 1px solid var(--border-1);
      background: var(--surface-l1);
      box-sizing: border-box;

      &:hover {
        border: 1px solid var(--border-primary);
        background: var(--surface-yellow-bg);
      }
    }
    & .model_name_image {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
      & .box_image {
        width: 28px;
        height: 28px;
        border-radius: 8px;
        background: var(--model-icon-bg);
        padding: 4px;
        object-fit: contain;
        img {
          width: 100%;
          height: auto;
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
