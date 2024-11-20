import { Box, styled } from "@mui/material";

export const RatingWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  gap: 4px;
  & .MuiRating-root {
    font-size: 14px;
    margin-top: 4px;
  }
`;
