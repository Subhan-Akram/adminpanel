import { Box, styled } from "@mui/material";

export const UserTableWrapper = styled(Box)`
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
    margin-left: 1.9rem;
  }
  & .full_name_span {
    font-weight: 500;
  }
  & .user_avatar {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 1024px) {
  }
`;
