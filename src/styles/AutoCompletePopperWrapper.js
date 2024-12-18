import { Popper, styled } from "@mui/material";
import { useRef } from "react";

export const AutoCompleteStyledPopperWrapper = styled(Popper)(({
  theme,
  width,
}) => {
  return {
    fontFamily: "satoshi",
    zIndex: 1300,
    fontSize: "14px",
    "& .MuiAutocomplete-listbox": {
      background: "var(--surface-l0) !important",
      //   width: "100%",
      color: "var(--text-secondary)",
      fontWeight: 400,
      maxHeight: 200,
      overflowY: "auto",
      fontSize: "14px",
      borderRadius: "4px",
      border: "1px solid var(--border-1)",
      borderBottom: "none",
      padding: 0,
      fontFamily: "satoshi",
      "&:hover": {
        // backgroundColor: "red",
      },
      "& .MuiAutocomplete-option": {
        fontSize: "14px",
      },
    },

    "& .MuiAutocomplete-paper": {
      marginTop: "5px !important",
      overflow: "hidden",
      marginLeft: "0rem !important",
    },
    '& .MuiAutocomplete-option[aria-selected="true"]': {
      backgroundColor: "var(--surface-l2) !important",
      "&.Mui-focused": {
        backgroundColor: "var(--surface-l2) !important",
      },
    },
    "& .MuiAutocomplete-option": {
      borderBottom: "1px solid var(--border-1)",
      "&:hover": {
        backgroundColor: "var(--surface-l2) !important",
      },

      "&.Mui-focused ": {
        backgroundColor: "var(--surface-l2) !important",
      },
    },
    "& .MuiAutocomplete-noOptions": {
      backgroundColor: "var(--surface-l1)",
      color: "var(--text-secondary)",
      fontWeight: 400,
      fontSize: "14px",
      fontFamily: "satoshi",
      borderRadius: "8px",
      border: "1px solid var(--border-1)",
    },
  };
});
