import { Box, styled } from "@mui/material";

export const ModelTableWrapper = styled(Box)`
  width: 100% !important;
  margin: auto auto;

  & .btn_group {
    display: flex;
    justify-content: flex-start;
    gap: 12px;
    align-items: center;
  }
  & .MuiCard-root {
    height: calc(100vh - 190px);
    border: 1px solid var(--border-1);
    margin-top: 32px;
    padding: 0;
  }
  & .card_header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 3.5rem;
  }
`;
