import { Card, styled } from "@mui/material";

export const StatsCardWrapper = styled(Card)`
  padding: 0 !important;

  & .content {
    padding: 16px;
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
    /* margin-top: 10px; */
  }
  & .footer {
    padding: 16px;
    margin-top: 12px;
  }
  & .footer_end {
    border-top: 1px solid var(--border-1);
    margin-top: 12px;
    padding: 12px 16px;
    background-color: var(--surface-l2);
    cursor: pointer;
  }
  &:hover {
    border: 1px solid var(--border-2);
    background: var(--surface-l1);
    box-shadow: -5px 5px 50px 4px rgba(255, 255, 255, 0.05);
    & .card_title {
      text-decoration: underline;
      text-underline-offset: 4px;
      cursor: pointer;
    }
  }
`;
