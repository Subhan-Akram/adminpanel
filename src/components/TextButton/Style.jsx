import { Button, styled } from "@mui/material";

export const TextButtonWrapper = styled(Button)(() => {
  return {
    boxSizing: "border-box",
    fontSize: "16px",
    color: "var(--text-button-icon)",
    textTransform: "capitalize",
    fontWeight: "500 !important",
    fontFamily: "satoshi",
    padding: "0",
    lineHeight: "24px",
    "& svg": {
      marginLeft: "6px",
      fontSize: "18px",
      "& path": {
        fill: "var(--text-button-icon)",
      },
    },
    "&.lg_btn": {
      fontSize: "24px",
      fontFamily: "satoshi",
      textTransform: "capitalize",
      fontWeight: "500 !important",
      color: "var(--text-primary,#E3E8EF)",
      "& svg": {
        marginRight: "6px",
      },
    },

    "&.small_btn": {
      fontSize: "12px",
      fontFamily: "satoshi",
      textTransform: "capitalize",
      fontWeight: "500 !important",
      color: "var(--text-secondary)",
      "& svg": {
        marginRight: "6px",
      },
    },
    "&.delete_btn": {
      color: "var(--red)",
      "& path": {
        fill: "var(--red)",
      },
    },
    "&.medium_btn": {
      fontSize: "14px",
      fontFamily: "satoshi",
      textTransform: "capitalize",
      fontWeight: "500 !important",
      color: "var(--text-secondary)",
      "& svg": {
        marginRight: "6px",
        "& path": {
          fill: "var(--icon-tertiary)",
        },
      },
    },

    "@media screen and (max-width:900px)": {
      fontSize: "14px !important",
      "& .MuiButton-startIcon": {
        marginRight: "4px !important",
      },
    },
  };
});
