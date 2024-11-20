import { Box, styled } from "@mui/material";

export const AddPromptLlmWrapper = styled(Box)(({ isCardSelected }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "24px",
  height: isCardSelected ? "auto" : "100%",
  cursor: "pointer",
  // position:isCardSelected?"sticky":"relative",
  "& .MuiButton-root": {
    maxWidth: "250px",
  },

  // border:"1px solid red",
}));
