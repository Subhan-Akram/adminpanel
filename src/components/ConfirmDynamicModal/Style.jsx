import { Dialog, styled } from "@mui/material";

export const ConfirmModalWrapper = styled(Dialog)(({ theme }) => ({
  "& .close": {
    position: "absolute",
    right: 24,
    top: "9px",
    "& svg": {
      width: "24px",
      height: "24px",
      "& path": {
        fill: "var(--icon-primary)",
      },
    },
  },
  "& .MuiDialogTitle-root": {
    display: "flex",
    alignItems: "center",
    padding: "16px 24px",
    fontWeight: "500",
    background: "var(--surface-l0)",

    "& .modal_text": {
      borderRadius: "4px",
      background: "var(--surface-l0)",
      marginLeft: "16px",
      textTransform: "capitalize",
      padding: "8px",
    },
    "& .model_name": {
      color: "var(--text-primary)",
    },
  },
  "& .MuiDialogContent-root": {
    overflowY: "hidden",
    // padding: "24px",
    minHeight: "70px",
    background: "var(--surface-l0)",
    textAlign: "left",
    "& .modal_content": {
      height: "500px",
      overflowY: "scroll",
      paddingRight: "12px",
      textAlign: "left",
      marginTop: "32px",
      "& .page_title": { marginBottom: "16px" },
    },
  },
  "& .MuiDialogActions-root": {
    padding: "16px 24px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
    background: "var(--surface-l0)",
    "& .outlined_button": {
      width: "80px",
    },
  },
}));
