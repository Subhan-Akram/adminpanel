import "../../fonts/fonts.css";
import { styled, Typography } from "@mui/material";

export const TypographyWrapper = styled(Typography)(() => ({
  zIndex: "100",
  fontFamily: "satoshi",
  "&.sub_title": {
    color: "var(--text-secondary)",
    textAlign: "center",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
  },
  "&.sub_title_2": {
    color: "var(--text-secondary)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
  },
  "&.sub_title_2_regular": {
    color: "var(--text-secondary)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
  },

  "&.sub_title_1": {
    color: "var(--text-secondary)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
  },
  "&.title_lg": {
    color: "var(--text-primary)",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "42px",
  },
  "&.title_lg_brand": {
    color: "var(--text-brand)",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "42px",
  },
  "&.title_medium": {
    color: "var(--text-primary)",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "38px",
  },
  "&.text_terrtiary_regular": {
    color: "var(--text-tertiary)",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
  },

  "& form": {
    marginTop: "12px",
  },
  "&.sub_title_1_lg": {
    color: "var(--text-secondary)",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    // line-height: var(--Typogr
  },
  "&.title1_secondary": {
    color: "var(--secondary-button-text-icon)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
  },
  "&.confirm_modal_text": {
    color: "var(--text-primary)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
  },
  "&.download": {
    color: "var(--text-primary)",
    fontWeight: "500",
    textDecoration: "underline",
    cursor: "pointer",
  },
  "&.confirm_modal_text_bold": {
    color: "var(--text-primary)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
  },
  "& .model_name": {
    fontWeight: "500",
  },
  "&.error_text": {
    color: "red",
    fontSize: "16px",
  },
  "&.page_title": {
    color: "var(--text-primary)",
    fontWeight: "700",
    fontSize: "16px",
    textTransform: "capitalize",
  },
  "&.page_title_lg": {
    color: "var(--primary-color-19)",
    fontWeight: "700",
    fontSize: "32px",
    textTransform: "capitalize",
  },
  "&.medium_title": {
    color: "var(--text-primary)",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  },
  "&.card_text": {
    color: "var(--text-tertiary)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  "&.zero_state_text": {
    color: "var(--text-primary)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
  "&.card_text_2": {
    color: "var(--text-tertiary)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  "&.modal_text": {
    color: "var(--text-primary)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  "&.modal_title": {
    color: "var(--text-primary)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  "&.alert_text": {
    color: "var(--text-secondary)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginTop: "6px",
  },

  "&.caption": {
    color: "var(--text-primary)",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
  },
  "&.comparision_title": {
    color: "var(--text-primary)",
    textAlign: "center",
    fontSize: "var(--Typography-Fontsize-XL, 20px)",
    fontStyle: " normal",
    fontWeight: "500",
    lineHeight: "var(--Typography-Line-height-LH-28, 28px)" /* 140% */,
  },
  "&.link": {
    color: "var(--text-brand)",
    fontSize: "var(--Typography-Fontsize-XL, 14px)",
    fontStyle: " normal",
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  "&.card_title_1": {
    color: "var(--text-primary)",
    fontSize: "var(--Typography-Fontsize-L, 18px)",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "var(--Typography-Fontsize-1XL, 24px)",
  },

  "&.card_title": {
    color: "var(--text-primary)",
    fontSize: "var(--Typography-Fontsize-L, 20px)",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "var(--Typography-Fontsize-1XL, 28px)",
  },
  "&.card_subtitle": {
    color: "var(--text-tertiary)",
    fontSize: "16px",
  },
  "&.modaltitle1": {
    color: "var(--text-primary)",
    fontSize: "var(--Typography-Fontsize-L, 16px)",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "var(--Typography-Fontsize-1XL, 24px)",
  },
  "&.modaltitle1_regular": {
    color: "var(--text-primary)",
    fontSize: "var(--Typography-Fontsize-L, 16px)",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "var(--Typography-Fontsize-1XL, 24px)",
  },

  "&.card_title_2": {
    color: "var(--text-secondary)",
    fontSize: "var(--Typography-Fontsize-L, 14px)",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "var(--Typography-Fontsize-1XL, 20px)",
  },
  "&.card_title_2_regular": {
    color: "var(--text-secondary)",
    fontSize: "var(--Typography-Fontsize-L, 14px)",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "var(--Typography-Fontsize-1XL, 20px)",
  },
  "&.sideBarTitle": {
    color: "var(--text-primary)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "var(--Typography-Fontsize-1XL, 24px)",
  },
  "&.sideBarListItem": {
    color: "var(--text-primary)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "var(--Typography-Fontsize-1XL, 20px)",
  },
  "&.key_copy": {
    color: "var(--blue-800)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "var(--Typography-Fontsize-1XL, 20px)",
  },
  "&.prompt_subtitle": {
    color: "var(--text-primary)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "var(--Typography-Fontsize-1XL, 24px)",
  },
  "&.collapse_text": {
    color: "#9AA4B2",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "var(--Typography-Fontsize-1XL, 24px)",
  },
  "&.card_title_3": {
    fontWeight: "400",
  },
  "&.line-height-22": { lineHeight: "22px" },
  "&.button_primary_text": {
    color: "var(--text-primary)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
  },
  // styles
  "&.text_underline": {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
  "&.text_uppercase": { textTransform: "uppercase" },
  "&.text-capitalize": { textTransform: "capitalize" },
  "&.text_left": { textAlign: "left" },
  "&.text_center": { textAlign: "center" },
  "&.text_underline_offset": { textUnderlineOffset: "4px" },
  "&.font-38": { fontSize: "38px" },
  "&.font-28": { fontSize: "28px" },
  // font weight
  "&.bold-700": {
    fontWeight: "700 !important",
  },
  "&.bold-500": { fontWeight: 500 },
  "&.bold-600": { fontWeight: 600 },
  //    colors
  "&.text-primary": { color: "var(--primary-text)" },
  "&.text-secondary": {},
  "&.text-primary-1": { color: "var(--primary-color-1)" },
  "&.text-primary-2": {},
  "&.text-primary-6": { color: "var(--primary-color-6)" },
  "&.text-primary-5": { color: "var(--primary-color-5)" },
  "&.text-primary-8": { color: "var(--primary-color-8)" },
  "&.text-primary-10": { color: "var(--primary-color-10)" },
  "&.text-primary-15": { color: "var(--primary-color-15)" },
  "&.text-primary-19": { color: "var(--primary-color-19)" },
  "&.text-primary-16": { color: "var(--primary-color-16)" },
  "&.text-primary-3": { color: "var(--primary-color-3)" },
  "&.text-primary-17": { color: "var(--primary-color-17)" },
  "&.text-primary-21": { color: "var(--primary-color-21)" },
  "@media screen and (max-width:1024px)": {
    "&.card_title_1": {
      fontSize: "16px",
    },
  },
}));
