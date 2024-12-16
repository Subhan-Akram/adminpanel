import { Box, styled } from "@mui/material";
import {
  alignCenter,
  flex,
  flexStart,
  justifyBetween,
} from "globalStyles/GlobalStyles";

const runDogAnimation = `
  @keyframes runDog {
    0% {
      transform: translateX(0); /* Start position */
    }
    100% {
      transform: translateX(20px); /* Back to start position */
    }
  }
`;

export const ModelBannerWrapper = styled(
  Box,
  {}
)(() => ({
  ...flex,
  ...justifyBetween,
  ...alignCenter,
  padding: "12px 16px",

  borderRadius: "8px",
  border: "1px solid var(--border-2)",
  boxSizing: "border-box",
  position: "relative",
  height: "51px",
  background: "linear-gradient(to right, #4f4827 3.53%, var(--surface-l1) 52%)",

  "& .banner_text1": {
    lineHeight: "18px",
  },
  "& .banner_dog": {
    position: "absolute",
    top: "-8px",
    "& img": {
      objectFit: "contained",
      width: "40.299px",
      height: "61px",
    },
  },
  "& .banner_content": {
    width: "70%",
    ...flex,
    ...flexStart,
    ...alignCenter,
    gap: "8px",
    // position: "relative",

    "& .banner_text": {
      marginLeft: "46px",
    },
  },
  [`${runDogAnimation}`]: {},
}));
