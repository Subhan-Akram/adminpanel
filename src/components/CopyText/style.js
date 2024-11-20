import { Box, styled } from "@mui/material";

export const CopyTextWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  & svg {
    & path {
      fill: var(--green);
    }
  }
`;
