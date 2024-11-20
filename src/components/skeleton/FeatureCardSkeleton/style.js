import { Stack, styled } from "@mui/material";

export const FeatureCardSkeletonWrapper = styled(Stack)(() => ({
  alignItems: "center",
  border: "1px solid var(--border-color)",
  width: "100%",
  borderRadius: "8px",
  position: "relative",
  background: "var(--surface-l1)",
  margin: "1rem 0 0 0",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "calc(100% - 50px)",
  "& .header": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "10px",
  },
}));
