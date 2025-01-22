import { Box, styled } from "@mui/material";

export const OrganziationTableWrapper = styled(Box)`
  width: 100% !important;
  margin: auto auto;

  & .btn_group {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    align-items: center;
    width: 100%;
  }

  & .card_header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .empty_cell {
    margin-left: 2.5rem;
    /* border: 1px solid red; */
  }
`;
