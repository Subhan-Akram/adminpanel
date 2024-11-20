import { Box, styled } from "@mui/material";

export const AddCardWrapper = styled(Box)(({ isCardSelected }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "16px",
  height: isCardSelected ? "auto" : "100%",

  "& .MuiButton-root": {
    maxWidth: "250px",
  },
}));
