import {
  Autocomplete,
  Box,
  styled,
  Tooltip,
  tooltipClasses,
} from "@mui/material";

export const ModelSearchBoxWrapper = styled(Box)(({ theme }) => ({
  zIndex: "100",
  borderRadius: "16px",
  background: "var(--surface-l0)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "64px",
  boxSizing: "border-box",
  padding: "0px 16px",
  position: "relative",
  border: "4px solid  var(--blue-500)",
  boxShadow: "4px 4px 14px 4px rgba(255, 255, 255, 0.10)",

  "& .sully_text": {
    textAlign: "left",
    width: "121px",
  },
  "& .search_box": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    // marginLeft:"10rem",
    "&  .search_text": {
      paddingRight: "15px",
    },
  },

  [theme.breakpoints.down("sm")]: {
    // width: "90%",
    padding: "4px",
    margin: "auto auto",
  },

  "& .MuiButton-root": {
    zIndex: "10",
    borderRadius: "8px",
    minWidth: "111px",
    height: "42px",
    textAlign: "center",
    fontSize: "20px",
    fontStyle: "normal",
    padding: "8px 24px",
    border: "none !important",
    fontWeight: "500 !important",
    lineHeight: " normal",
    textTransform: "capitalize",
    "&.Mui-disabled": {
      color: "var(--brand-primary-text-icon-disable)",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2px 8px",
      fontSize: "13px",
    },
    // [theme.breakpoints.up("xl")]: {
    //     padding: "2.5% 8% !important",
    //     borderRadius: ".6vw",
    //     fontSize: "1.3vw",

    // },
  },

  // [theme.breakpoints.up("xl")]: {
  //     height: "4.5vw",
  //     "& .text-primary-16": {
  //         fontSize: "1.2vw",
  //     }

  // },
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

export const AutoCompleteWrapper = styled(Autocomplete)(
  ({ theme, focused }) => ({
    "& .MuiAutocomplete-listbox": {
      background: "#080B11",
    },
    width: "97%",
    background: "#080B11 !important",
    "& .Mui-focused": {
      background: "#080B11 !important",
    },

    "& .MuiAutocomplete-inputFocused": {
      background: "#080B11",
    },
    "& .MuiAutocomplete-input": {
      background: "#080B11 !important",
      "&::placeholder": {
        color: "#CDD5DF",
        fontSize: "16px",
        fontWeight: "400",
        opacity: 1,
        fontFamily: "satoshi",
      },
    },
    "& .MuiFilledInput-root": {
      paddingTop: "0",
      "&:hover": {
        background: "#080B11 !important",
      },
    },
    "&:hover": {
      background: "#080B11 !important",
    },
  }),
);

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
        marginLeft: "4px",
      },
    },
  },
});
