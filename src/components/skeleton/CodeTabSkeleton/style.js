import { Box, styled } from "@mui/material";

export const CodeTabWrapper = styled(Box)(() => ({
  display: "flex",
  padding: 0,
  justifyContent: "flex-start",
  gap: "16px",
  boxSizing: "border-box",
  height: "41px",
  "& .MuiSkeleton-root": {
    padding: "10px 16px",
    marginTop: "-12px",
    height: "41px",
  },
}));
