import { Stack, styled } from "@mui/material";

export const ModelCardSkeletonWrapper = styled(Stack)(() => ({
  border: "1px solid var(--border-color)",
  padding: "16px 16px 0px 16px",
  borderRadius: "8px",
  position: "relative",
  background: "var(--surface-l1)",
  "@media (min-width: 1300px)": {
    minWidth: "367px",
  },

  "& .logo_frame": {
    padding: "10px",
    width: "60px",
    height: "60px",
  },
  "& .modal_header": {
    display: "flex",
    justifyContent: "flex-start",
    gap: "16px",
  },

  "& .MuiSkeleton-root": {
    borderRadius: "4px",
  },
  "& .model_content": {
    "& .MuiSkeleton-root": {
      marginBottom: "8px",
    },
  },
  "& .model_tags_loader": {
    display: "flex",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    gap: "16px",
    "& .MuiSkeleton-root": {
      borderRadius: "24px !important",
    },
  },
  "& .footer_btn": {
    borderRadius: "8px",
    margin: "auto auto",
    marginTop: "12px",
    padding: "12px 16px ",
  },
}));
