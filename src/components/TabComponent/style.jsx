import { Box, styled } from "@mui/material";

export const TabWrapper = styled(Box)(() => ({
  "& .MuiTabs-root": {
    borderBottom: "1px solid var(--border-1)",
    marginTop: "16px",
    marginBottom: "0px",
    "& .MuiTabs-flexContainer": { gap: "24px" },

    "& .MuiButtonBase-root": {
      padding: "10px 24px",
      fontSize: "16px",
      fontStyle: "normal",
      fontFamily: "satoshi",
      fontweight: "500",
      textTransform: "none",
    },
    "& .Mui-selected": {
      color: "var(--text-brand)",
      borderBottom: "2px solid var(--border-primary)",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "2px solid var(--border-primary)",
    },
    "@media screen and (max-width:900px)": {
      "& .MuiButtonBase-root": {
        fontSize: "14px",
      },
    },
  },
}));
