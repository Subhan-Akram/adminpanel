import { Box, styled } from "@mui/material";

export const UserFormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2;
  label {
    margin-bottom: 6px;
  }
  & .user_active {
    margin-top: 25px;
    margin-left: -1px;
  }

  & .form_buttons {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 1rem 24px;
    border-top: 1px solid var(--border-1);
  }
  @media screen and (max-width: 960px) {
    & .user_active {
      margin-top: 0;
      margin-left: 0;
    }
  }
`;
