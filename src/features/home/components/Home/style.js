import { Box, styled } from "@mui/material";

export const HomeWrapper = styled(Box)`
  padding: 32px;
  & .home_content {
    margin-top: 24px;
  }
  & .stats_cards {
    margin-top: -4px;
    & .MuiSvgIcon-root {
      color: var(--text-tertiary);
      font-size: 36px;
    }
  }
`;
