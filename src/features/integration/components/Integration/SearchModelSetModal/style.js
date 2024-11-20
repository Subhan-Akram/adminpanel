import { Dialog, styled } from "@mui/material";

export const LlmModelWrapper = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    height: "100vh",
  },
  "& .close": {
    position: "absolute",
    right: "24px",
    top: "24px",
  },
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      maxHeight: "calc(100vh - 24px) !important",
    },
  },
  "& .MuiDialogTitle-root": {
    display: "flex",
    alignItems: "center",
    padding: "24px",
    fontWeight: "500",
    "& .modal_text": {
      borderRadius: "4px",
      background: "var(--tags-blue-bg)",
      marginLeft: "16px",
      textTransform: "capitalize",
      padding: "8px",
      color: "var(--tags-blue) !important",
    },
    "& .model_name": {
      color: "var(--tags-blue)",
      fontWeight: "700",
    },
  },
  "& .MuiDialogContent-root": {
    overflowY: "hidden",
    padding: "24px",
    textAlign: "center",
    "& .MuiGrid-container": {
      marginTop: "0",
      marginBottom: "0",
    },
    "& .MuiGrid-root": {
      "& .MuiGrid-item": { paddingBottom: "24px", paddingTop: "0" },
    },
    "& .home_box": {
      margin: "24px auto",
      width: "75%",
    },
    "& .model_tags": {
      maxWidth: "75%",
      margin: "auto auto",
      marginTop: "16px",
      position: "relative",
      cursor: "pointer",
      zIndex: "20",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      gap: "16px",
      marginBottom: "24px",
    },
    "& .modal_content": {
      height: "calc(100vh - 345px)",
      overflowY: "auto",
      paddingRight: "12px",
      textAlign: "left",
      marginTop: "32px",
      "& .zero_state": { marginTop: "3rem" },
      "& .search": { marginBottom: "16px" },

      "& .model_set_box": {
        "& .sub_title_2": {
          marginTop: "16px",
        },
        "& .textBox": {
          marginTop: "8px",
        },
      },
    },
  },
  "& .MuiDialogActions-root": {
    padding: "24px",
    "& .outlined_button": {
      width: "80px",
    },
    "& .button_loader": {
      marginLeft: "6px",
    },
  },
  "@media (max-width: 1024px)": {
    "& .MuiDialogContent-root": {
      "& .home_box": {
        width: "90%",
      },
    },
  },

  "@media (max-width: 900px)": {
    "& .MuiPaper-root": {
      margin: "16px",
      width: "100%",
    },
    "& .MuiDialogTitle-root": {
      "& .model_title_box": {
        width: "77%",
      },
    },
    "& .MuiDialogContent-root": {
      "& .model_tags": {
        maxWidth: "100%",
        width: "100%",
      },
      "& .home_box": {
        width: "100%",
      },
    },
  },
}));
