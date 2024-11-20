import { Box, styled } from "@mui/material";

export const CardWrapper = styled(Box)(({ isCardSelected }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "16px",
  height: isCardSelected ? "auto" : "100%",
  "& .code_initial_title": {
    width: "40%",
    textAlign: "center",
  },
  "& .zero_state_text": {
    width: "10px",
  },
  "& .MuiButton-root": {
    maxWidth: "250px",
  },
  "@media screen and (max-width:830px)": {
    "& .code_initial_title": {
      width: "70%",
      textAlign: "center",
    },
  },
}));
