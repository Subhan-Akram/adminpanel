import { styled, Box } from "@mui/material";
export const CollapseWrapper = styled(Box)(({ theme }) => ({
  //   border: "1px solid green",
  "& .open_collapse_header": {
    display: "flex",
    alignItems: "center",

    cursor: "pointer",
    gap: "8px",

    "& .icon_box": {
      borderRadius: "70px",
      background: "var(--surface-l2)",
      width: "16px",
      height: "16px",
      display: "flex",
      alignItems: "center",
    },
  },
}));

export const CollapsibleContent = styled(Box)(({ theme }) => ({
  marginTop: "16px",
  // border: "1px solid red",
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  gap: "16px",
  //   border: `1px solid ${theme.palette.divider}`,
  "& .active_model_box": {
    minWidth: "299px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // border: "1px solid red",
    maxHeight: "59px",
    padding: "12px",
    borderRadius: "8px",
    boxSizing: "border-box",
    // height:"29px",
    background: "var(--surface-l2)",
    "& .inner_box": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "13px",
      "& .icon": {
        width: "35px",
        height: "35px",
        padding: "4px",
        borderRadius: "8px",
        background: "var(--model-icon-bg)",
        "& svg": {
          width: "100%",
          height: "100%",
        },
        "& img": {
          objectFit: "contain",
        },
      },
    },
    "& .add_text": {},
  },
  "& .add_model_box": {
    cursor: "pointer",
    minWidth: "299px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "59px",
    padding: "12px",
    borderRadius: "8px",
    boxSizing: "border-box",
    background: "var(--surface-l2)",
    "& svg": {
      color: "var(--primary-color-1)",
      fontSize: "16px",
      marginRight: "6px",
    },
  },
  "& .close": {
    cursor: "pointer",
    padding: "0",
    margin: "0",
  },
}));
