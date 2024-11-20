import { Box, styled } from "@mui/material";

export const PromptModelCardSkeletonWrapper = styled(Box)(() => ({
  borderRadius: "16px",
  background: "var(--surface-l1)",
  color: "#CDD5DF",
  padding: "16px",
  boxSizing: "border-box",
  width: "100%",
  cursor: "pointer",
  "& .prompt_header_box": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "& .MuiSkeleton-root": {
      borderRadius: "4px",
      height: "10px",
    },
    "& .prompt_inner_left": {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    "& .prompt_inner_2": {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexDirection: "column",
    },
  },
}));
