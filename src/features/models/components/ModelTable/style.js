import { Box, styled } from "@mui/material";

export const ModelTableWrapper = styled(Box)`
  width: 100% !important;
  margin: auto auto;

  & .model_drawer_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--border-2);
    padding: 6px 16px;
    background: var(--surface-l2);
    border-radius: 8px;
    margin-bottom: 8px;
    background: linear-gradient(
      to right,
      var(--brand-primary) 3.53%,
      var(--surface-l1) 48.63%
    );
  }
  & .MuiCard-root {
    /* border: none; */
    border: 1px solid var(--border-1);
    margin-top: 1.5rem;
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
