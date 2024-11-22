import { Button, styled } from "@mui/material";
import "../../fonts/fonts.css";
export const OutlinedButtonWrapper = styled(Button)(() => {
  return {
    fontFamily: "satoshi",
    boxSizing: "border-box",
    height: "40px",
    fontSize: "16px",
    background: "transparent",
    color: "var(--tertiary-button-text-icon)",
    border: "1px solid var(--tertiary-button-border)",
    textTransform: "capitalize",
    fontWeight: "500 !important",
    borderRadius: "8px",
    padding: "8px 16px",
    "&:hover": {
      background: "var(--tertiary-button-hover)",
      border: "1px solid var(--tertiary-button-border)",
    },
    "&.bg_surface": {
      background: "var(--surface-red-bg)",
      border: `1px solid var(--red-500)`,
      color: "var(--text-primary)",
      "& svg": {
        "& path": {
          fill: "var(--text-primary)",
        },
      },
    },
    "&.primary_1": {
      border: `1px solid var(--secondary-button-border)`,
      color: "var(--secondary-button-text-icon)",
      "&:hover": {
        background: "var(--secondary-button-hover)",
      },
    },
    "&.add_llm_prompt": {
      color: "var(--primary-color-1)",
      border: "none",

      "& svg": {
        fontSize: "18px",
      },
      "&:hover": {
        background: "none",
      },
    },
    "&.medium_btn": {
      padding: "8px 24px",
    },
    "&.small_btn": {
      padding: 0,
    },
  };
});
