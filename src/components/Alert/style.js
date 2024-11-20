import "../../fonts/fonts.css";

import { Alert, keyframes, Snackbar, styled } from "@mui/material";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const SnackbarWrapper = styled(Snackbar)`
  width: 100%;
  padding: 0 !important;
  max-width: 592px;
  top: 16px !important;
  & .MuiPaper-root {
    background: transparent;
  }
`;

export const AlertWrapper = styled(Alert)`
  font-family: "satoshi";
  .MuiAlert-message {
    border-radius: 8px;
    margin-top: 61px !important;
    display: flex;
    align-items: center;
    min-height: 82px;
    gap: 16px;
    top: 0;
    right: 0;
    z-index: 1400;
    width: 100%;
    box-sizing: border-box;
    padding: 16px !important;
    min-width: 592px;
  }
  &.MuiAlert-colorError {
    & .MuiAlert-message {
      border-left: 6px solid var(--toast-error);
      background: var(--toast-error-bg);
    }
  }

  &.MuiAlert-colorWarning {
    & .MuiAlert-message {
      border-left: 6px solid var(--toast-warning);
      background: var(--toast-warning-bg);
    }
  }

  &.MuiAlert-colorSuccess {
    & .MuiAlert-message {
      border-left: 6px solid var(--toast-success);
      background: var(--toast-success-bg);
    }
  }
  & .MuiAlert-icon {
    padding: 0;
    margin-right: 0;
  }

  & .icon {
    border-radius: 8px;
    padding: 8px;
    box-sizing: border-box;
    height: 40px;
    width: 40px;
    margin-right: 0;
  }

  & .icon-error {
    background: var(--brand-secondary);
  }

  & .icon-warning {
    background: var(--toast-warning);
  }

  & .icon-success {
    background: var(--toast-success);
  }

  &.slide-in {
    animation: ${slideIn} 0.5s ease-out forwards;
  }

  &.hidden {
    animation: ${fadeOut} 0.5s ease-out forwards;
  }
`;
