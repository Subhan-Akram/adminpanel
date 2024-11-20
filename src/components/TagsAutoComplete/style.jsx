import {
  Autocomplete,
  Popper,
  styled,
  Tooltip,
  tooltipClasses,
} from "@mui/material";

export const AutoCompleteWrapper = styled(Autocomplete)(({ theme }) => ({
  fontFamily: "satoshi",
  "& .MuiAutocomplete-listbox": {
    background: "var(--surface-l0) !important",
  },
  width: "97%",
  background: "var(--surface-l0) !important",

  "& .Mui-focused": {
    background: "var(--surface-l0) !important",
  },

  "& .MuiAutocomplete-inputFocused": {
    background: "var(--surface-l0) !important",
  },
  "& .MuiAutocomplete-input": {
    background: "var(--surface-l0) !important",
    "&::placeholder": {
      color: "var(--text-tertiary)",
      fontSize: "16px",

      fontWeight: 400,
      fontFamily: "satoshi",
      opacity: 1,
    },
  },
  "& .MuiFilledInput-root": {
    paddingTop: "0",
    padding: "10px 0 !important",
    background: "transparent !important",

    "&:hover": {
      background: "var(--surface-l0) !important",
    },
  },
  "&:hover": {
    background: "var(--surface-l0) !important",
  },
}));

export const TagTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 240,
    borderRadius: "8px",
    padding: "12px",
    marginTop: "3rem",
    border: "1px solid var(--border-2)",
    background: "var(--surface-l3)",
    "& .tooltip_content": {
      display: "flex",
      gap: "8px",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
      "& svg": {
        fontSize: "12px",
        color: "var(--primary-1)",
        marginLeft: "-5px",
      },
    },
    "& .MuiTooltip-arrow": {
      color: "var(--surface-l3)",
      width: "33px",
      marginBottom: "-1.1rem",
      height: "18px",
      "&::before": {
        border: "1px solid var(--border-2)",
        background: "var(--surface-l3)",
        width: "16px",
        height: "16px",
      },
    },
  },
});
export const AutoCompleteStyledPopper = styled(Popper)(({ theme, width }) => {
  return {
    fontFamily: "satoshi",
    zIndex: 1300,
    "& .MuiAutocomplete-listbox": {
      background: "var(--surface-l0) !important",
      width: "100%",
      color: "var(--text-secondary)",
      fontWeight: 400,
      maxHeight: 200,
      overflowY: "auto",
      borderRadius: "8px",
      border: "1px solid var(--border-1)",
      paddingBottom: 0,
      fontFamily: "satoshi",
    },
    "& .MuiAutocomplete-paper": {
      marginTop: "8px !important",
      width,
      overflow: "hidden",
      marginLeft: "-1rem !important",
    },
    "& .MuiAutocomplete-option": {
      borderBottom: "1px solid var(--border-1)",
      "&:hover": {
        backgroundColor: "var(--surface-l1)",
      },
      '&[aria-selected="true"]': {
        backgroundColor: "var(--surface-l2)",
      },
    },
    "& .MuiAutocomplete-noOptions": {
      backgroundColor: "var(--surface-l1)",
      color: "var(--text-secondary)",
      fontWeight: 400,
      fontFamily: "satoshi",
      borderRadius: "8px",
      border: "1px solid var(--border-1)",
    },
  };
});
