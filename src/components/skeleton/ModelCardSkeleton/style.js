import { Stack, styled } from "@mui/material";

export const ModelCardSkeletonWrapper = styled(Stack)(() => ({
  display: "flex",
  alignItems: "center",
  border: "1px solid var(--border-color)",
  padding: "8px 16px 24px 16px",
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
    position: "absolute",
    top: "-3rem",
  },

  "& .MuiSkeleton-root": {
    borderRadius: "4px",
  },
  "& .sk_description": {
    alignSelf: "flex-start",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  "& .model_content": {
    paddingTop: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  "& .model_tags": {
    display: "flex",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    gap: "16px",
    "& .MuiSkeleton-root": {
      borderRadius: "24px !important",
    },
  },
  "& .comparision": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
  },
  "& .footer": {
    display: "flex",
    flexDirection: "column",
    justifySelf: "flex-start",
    alignSelf: "flex-start",
    gap: "8px",
    width: "98%",
  },
}));
