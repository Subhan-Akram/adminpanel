import { Box, styled } from "@mui/material";

export const RecommendedSkeletonWrapper = styled(Box)(() => ({
  borderRadius: "8px",
  background: "var(--surface-l1)",
  padding: "16px",
  boxSizing: "border-box",
  cursor: "pointer",
  width: "100%",
  "& .MuiBox-root": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    "& .MuiSkeleton-root": {
      borderRadius: "4px",
      height: "10px",
    },
  },
}));
