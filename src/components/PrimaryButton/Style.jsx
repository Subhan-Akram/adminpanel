import "../../fonts/fonts.css";
import { Button, styled } from "@mui/material";

export const PrimaryButtonWrapper = styled(Button, {
  shouldForwardProp: (props) => props !== "isLoading",
})(() => {
  return {
    fontFamily: "satoshi",
    boxSizing: "border-box !important",
    height: "40px",
    fontSize: "16px",
    background: "var(--brand-button-bg)",
    color: "var(--brand-button-text-icon)",
    border: `1px solid var(--brand-button-bg)`,
    textTransform: "capitalize",
    fontWeight: "500 !important",
    borderRadius: "8px",
    boxShadow: "none",
    display: "inline-flex", // Use inline-flex instead of flex
    alignItems: "center", // Keep this line to vertically center the content
    justifyContent: "center",
    gap: "12px",
    padding: "8px 16px !important",
    "&:hover": {
      background: "var(--brand-button-bg-hover)",
    },
    "&.primary_1": {
      background: "var(--primary-button-bg) !important",
      border: "1px solid var(--primary-button-border) !important",
      color: "var(--primary-button-text-icon) !important",
      boxShadow: "none",
      fontFamily: "satoshi",

      "&:hover": {
        background: "var(--primary-button-hover-bg) !important",
        border: "1px solid var(--primary-button-hover-border) !important",
      },
    },
    "&.primary_red": {
      background: "var(--primary-color-1-light)",
      color: "var(--primary-color-19)",
      border: "1px solid var(--primary-color-1-light)",
    },
    "&.card_btn_1": {
      borderRadius: "8px",
      border: "1px solid var(--primary-button-border)",
      background: "var(--primary-button-bg)",
      color: "var(--primary-button-text-icon)",
      textAlign: "center",
      width: "100%",
    },
    "&.card_btn_2": {
      borderRadius: "8px",
      border: "1px solid var(--primary-button-border)",
      background: "var(--primary-button-bg)",
      color: "var(--primary-button-text-icon)",
      textAlign: "center",
    },
    "&.medium_btn": {
      padding: "10px 24px !important",
      fontSize: "18px",
      height: "40px !important",
    },
    "&.medium_btn_1": {
      padding: "8px 24px !important",
      fontSize: "16px",
      height: "40px !important",
      color: "var(--brand-button-text-icon)",
      fontWeight: "500",
      "&:hover": {
        background: "var(--brand-button-bg-hover)",
      },
    },
    "&.medium_btn_2": {
      padding: "10px 24px !important",
      fontSize: "16px",
      height: "40px !important",
      // width: "113px !important",
      color: "var(--brand-button-text-icon)",
      fontFamily: "satoshi",
      fontWeight: "500",
      "&:hover": {
        background: "var(--brand-button-bg-hover)",
      },
    },
  };
});
