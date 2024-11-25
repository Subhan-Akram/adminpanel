import { Box, styled } from "@mui/material";

export const ModelTableWrapper = styled(Box)`
  width: 100% !important;
  margin: auto auto;

  & .model_drawer_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  & .MuiCard-root {
    /* border: none; */
    margin-top: 2rem;
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
