import { Box, styled } from "@mui/material";

export const ModelTableWrapper = styled(Box)`
  width: 100% !important;
  margin: auto auto;
  margin-top: 0rem;

  & .model_drawer_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  & .MuiCard-root {
    /* border: none; */
    height: calc(100vh - 190px);
    overflow: visible;
    margin-top: 1.5rem;
    /* height: 180px; */
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
