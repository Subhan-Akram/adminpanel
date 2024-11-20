import { Box, Card, styled } from "@mui/material";

export const PromptStyleWrapper = styled(Card, {
  shouldForwardProp: (props) => props !== "isModelSelected",
})(({ isModelSelected }) => ({
  height: isModelSelected ? "auto" : "calc(100vh - 290px)",
  position: "relative",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "10px",
  marginTop: isModelSelected ? "16px" : "24px",
  // background: "var(--primary-color-12)",
  "@media (min-height: 900px)": {
    height: isModelSelected ? "auto" : "calc(100vh - 290px)",
  },
}));

export const PrompLoadingStyleWrapper = styled(Box)(() => ({
  margin: "auto auto",
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  gap: "16px",
  marginTop: "16px",
}));

export const PromptStyle = styled(Box)``;
