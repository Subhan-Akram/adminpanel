import { Box, styled } from "@mui/material";

export const PromptBoxWrapper = styled(Box)(() => ({
  borderRadius: "8px",
  background: "var(--surface-l1)",
  padding: "16px",
  boxSizing: "border-box",
  height: "100%",
  fontSize: "14px",
  textWrap: "wrap",
  cursor: "pointer",
  textAlign: "left",

  "@media screen and (max-width:830px)": {
    padding: "10px",
  },
}));
