import { Box, styled } from "@mui/material";

export const BannerWrapper = styled(
  Box,
  {}
)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 16px",
  borderRadius: "8px",
  border: "1px solid var(--border-2)",
  boxSizing: "border-box",
  position: "relative",
  height: "58px",
  background:
    "linear-gradient(to right, var(--banner-shadow) 3.53%, var(--surface-l1) 14.63%)",
  "& .banner_text1": {
    lineHeight: "18px",
  },
  "& .banner_dog": {
    position: "absolute",
    top: "-6px",
    "& img": {
      objectFit: "contained",
      width: "40.299px",
      height: "61px",
    },
  },
  "& .banner_content": {
    width: "70%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "8px",

    "& .banner_text": {
      marginLeft: "46px",
    },
  },
}));
