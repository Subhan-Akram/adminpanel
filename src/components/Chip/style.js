import "../../fonts/fonts.css";
import { Chip, styled } from "@mui/material";

export const ChipWrapper = styled(Chip)(({ theme }) => ({
  fontFamily: "satoshi",
  fontSize: "16px",
  fontWeight: "500",
  boxSizing: "border-box",
  lineHeight: "normal",
  borderRadius: "38px",
  height: "auto",
  background: "var(--primary-color-12)",
  border: "1px solid var(--primary-color-1)",
  color: "var(--primary-color-1)",
  padding: "8px 16px",
  display: "flex",
  gap: "4px",

  "&.searchBoxChips": {
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: "satoshi",
    lineHeight: "normal",
    borderRadius: "38px",
    background: "var(--primary-color-12)",
    border: "1px solid var(--primary-color-1)",
    color: "var(--primary-color-1)",
    padding: "8px 16px",
    height: "32px",
  },
  "& .MuiChip-label": {
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: "4px",
  },
  "& .MuiSvgIcon-root": {
    color: "var(--primary-color-1)",
    fontSize: "12px",
    "&:hover": { color: "var(--primary-color-1)" },
  },
  "&.modal_card_chips": {
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: "satoshi",
    borderRadius: "30px",
    background: "var(--tag-bg-color-selected)",
    border: "1px solid var(--tag-bg-color-selected)",
    color: "var(--tag-text-icon-selected)",
    padding: "8px 16px",
    height: "32px",
  },
  "&.integrated_chip": {
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: "satoshi",
    borderRadius: "4px",
    background: "var(--tags-blue-bg)",
    border: "1px solid var(--tags-blue-bg)",
    color: "var(--tags-blue)",
    padding: "4px",
    height: "24px",
  },
  "&.font-12": {
    fontSize: "12px !important",
  },
  "&.p-4": {
    paddingLeft: "4px !important",
    paddingRight: "4px !important",
  },
  "&.p-8": {
    padding: "8px 16px !important",
  },
  "&.medium_chips": {
    borderRadius: "30px",
    padding: "0",
    fontSize: "16px",
    backgroundColor: "var(--primary-color-13)",
    border: "1px solid var(--primary-color-14)",
    color: "var(--primary-color-15)",
    fontWeight: "400",
  },
  "&.medium_chips_no_border": {
    borderRadius: "30px",
    padding: "0",
    fontSize: "16px",
    backgroundColor: "var(--primary-color-13)",
    border: "1px solid var(--primary-color-13)",

    color: "var(--primary-color-15)",
    fontWeight: "400",
  },
  "&.home_chips": {
    borderRadius: "38px",
    fontSize: "14px",
    backgroundColor: "transparent",
    border: "1px solid var(--tag-border)",
    color: "var(--tag-text-icon-selected)",
    fontWeight: "500",
    fontFamily: "satoshi",
    padding: "8px 16px ",
    "&:hover": {
      backgroundColor: "var(--tag-bg-color-hover) !important",
    },
  },
  "&.search_box_chips": {
    borderRadius: "36px !important",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "satoshi",
    padding: "8px 16px ",
    background: "transparent",
    border: "1px solid var(--border-primary)",
    color: "var(--text-brand)",
    "& svg": {
      marginLeft: "-6x",
      width: "16px",
      height: "16px",
      "& path": {
        fill: "var(--icon-brand)",
      },
    },
  },
  "&.more_chip": {
    borderRadius: "36px !important",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "satoshi",
    padding: "8px 16px ",
    height: "36px",
    background: "var(--model-icon-bg) !important",
    border: "1px solid var(--model-icon-bg)",
    color: "var(--text-brand)",
  },

  "&.home_chip_active": {
    backgroundColor: "var(--tags-disable-bg) !important",
    "& svg": {
      "& path": {
        fill: "var(--primary-1) !important",
      },
    },
  },
  "&.card_chips": {
    borderRadius: "30px",
    backgroundColor: "var(--primary-color-20)",
    border: "1px solid var(--primary-color-20)",
    padding: "8px 16px !important",
    fontWeight: "400",
    fontSize: "12px",
    color: "var(--primary-color-15)",
  },
  "&.tooltip_chips": {
    borderRadius: "38px",
    backgroundColor: "var(--surface-l4)",
    border: "1px solid var(--surface-l4)",
    padding: "4px 8px !important",
    fontWeight: "500",
    fontFamily: "satoshi",
    fontSize: "12px",
    color: "var(--tag-text-icon-selected)",
    height: "24px",
  },
  "&.small_chips": {
    padding: "0",
    fontSize: "12px",
    height: "32px",
    backgroundColor: "var(--chip-bg)",
    fontWeight: "400",
  },
  "&.active_chip": {
    padding: "4px",
    borderRadius: "4px",
    background: "var( --tags-green-bg)",
    color: "var(--tags-green)",
    fontFamily: "satoshi",
    border: "1px solid var(--tags-green-bg)",
    fontSize: "var(--Typography-Fontsize-XS, 12px)",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "var(--Typography-Line-height-LH-16, 16px)" /* 133.333% */,
  },
  [theme.breakpoints.down("sm")]: {
    height: "0",
    padding: "12px 0",
    fontSize: "13px",
  },
  [theme.breakpoints.up("lg")]: {},
}));
