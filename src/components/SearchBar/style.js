// Styled components
import { Box, TextField, Button, styled } from "@mui/material";
export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  //   backgroundColor: theme.palette.background.paper,
  //   padding: "8px",
  borderRadius: "8px",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  //   backgroundColor: theme.palette.background.default,
  borderRadius: "8px",
  height: "38px",
  "& .MuiOutlinedInput-root": {
    height: "100%",
    "& fieldset": {
      borderColor: "var(--border-1)",
      // borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "var(--border-1)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--border-1)",
    },
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  width: "200px",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "none",
  //   backgroundColor: theme.palette.background.default,
  padding: "4px",
  borderRadius: "8px",
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
