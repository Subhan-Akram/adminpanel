import { Popper, styled } from "@mui/material";

export const flex = {
  display: "flex",
};

export const justifyBetween = {
  justifyContent: "space-between",
};

export const flexStart = {
  justifyContent: "flex-start",
};

export const flexEnd = {
  justifyContent: "flex-end",
};

export const alignCenter = {
  alignItems: "center",
};
export const wrap = {
  flexWrap: "wrap",
};

export const TabCardInitialHeight = {
  height: "calc(100vh -320px)",
};

export const AutoCompleteStyledPopper = styled(Popper)(
  ({ theme, width, tranformLeft }) => ({
    zIndex: 1300,
    "& .MuiAutocomplete-listbox": {
      backgroundColor: "#080B11",
      width: "100%",
      color: "#CDD5DF",
      fontFamily: "satoshi",
      maxHeight: 200,
      overflowY: "auto",
      borderRadius: "8px",
      border: "1px solid var(--border-1, #202939)",
      paddingBottom: 0,
    },
    "& .MuiAutocomplete-paper": {
      marginTop: "8px !important",
      width,
      overflow: "hidden",
      marginLeft: "-1rem !important",
      transform: `translate(-${tranformLeft}, 0)`,
    },
    "& .MuiAutocomplete-option": {
      borderBottom: "1px solid var(--border-1, #202939)",
      "&:hover": {
        backgroundColor: "var(--surface-l1)",
      },
      '&[aria-selected="true"]': {
        backgroundColor: "var(--surface-l2)",
      },
    },
    "& .MuiAutocomplete-noOptions": {
      backgroundColor: "#080B11",
      color: "#CDD5DF",
      fontFamily: "satoshi",
      borderRadius: "8px",
      border: "1px solid var(--border-1, #202939)",
    },
  }),
);
