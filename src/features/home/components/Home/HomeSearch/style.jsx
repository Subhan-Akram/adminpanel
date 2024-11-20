import {
  Autocomplete,
  Box,
  styled,
  Tooltip,
  tooltipClasses,
} from "@mui/material";

export const TagTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 326,
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
        color: "var(--primary-color-19)",
        marginLeft: "-5px",
      },
    },
  },
});
export const SearchWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  "& .search_box": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "12px",
    "&  .search_text": {
      paddingRight: "15px",
    },
  },
  "&.searches": {
    zIndex: "100",
    minHeight: "64px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
    position: "relative",
    width: "100%",
    borderRadius: "16px",
    border: "4px solid var(--blue-500)",
    background: "var(--surface-l0)",
    boxShadow: "4px 4px 14px 4px rgba(255, 255, 255, 0.10)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "4px",
    margin: "auto auto",
  },

  "& .MuiButton-root": {
    minWidth: "111px",
    [theme.breakpoints.down("sm")]: {
      padding: "2px 8px",
      fontSize: "13px",
    },
  },

  [theme.breakpoints.up("xl")]: {
    "& .text-primary-16": {
      fontSize: "1.2vw",
    },
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
  "& .model_tags": {
    display: "flex",
    justifyContent: "flex-start",
    gap: "16px",
  },
}));

export const AutoCompleteWrapper = styled(Autocomplete)(({ theme }) => ({
  "& .MuiAutocomplete-listbox": {
    // background: "#080B11",
    background: "var(--surface-l0)",
  },
  width: "97%",
  background: "var(--surface-l0) !important",
  "& .Mui-focused": {
    // background: "#080B11 !important",
    background: "var(--surface-l0) !important",
  },

  "& .MuiAutocomplete-inputFocused": {
    background: "var(--surface-l0) !important",
  },
  "& .MuiAutocomplete-input": {
    background: "var(--surface-l0) !important",
    "&::placeholder": {
      color: "#CDD5DF",
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: "satoshi",
      opacity: 1,
    },
  },
  "& .MuiFilledInput-root": {
    paddingTop: "0",
    padding: "10px 0 !important",

    "&:hover": {
      background: "var(--surface-l0) !important",
    },
  },
  "&:hover": {
    background: "var(--surface-l0) !important",
  },
}));
