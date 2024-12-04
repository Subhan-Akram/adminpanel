import { Box, styled } from "@mui/material";

export const BannerWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border-2);
  padding: 6px 16px;
  background: var(--surface-l2);
  border-radius: 8px;
  margin-bottom: 8px;
  /* background: linear-gradient(
      to right,
      var(--brand-primary) 3.53%,
      var(--surface-l1) 48.63%
    ); */
  background: linear-gradient(to right, #4f4827 3.53%, var(--surface-l1) 52%);
`;
