import { ButtonGroup, styled } from "@mui/material";

export const CodeTabsWrapper = styled(ButtonGroup)`
  /* border: 1px solid red; */
  &.MuiButtonGroup-root {
    padding: 0;
    border-radius: 18px 0px 0px 8px;
  }
  & .MuiButton-root {
    border: 1px solid var(--border-2);
    padding: 10px 16px;
    color: var(--text-primary);
    text-transform: capitalize;
    font-family: "satoshi";
    background: var(--surface-l1);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    &.active {
      background: var(--model-icon-bg);
    }
    &:hover {
      border: 1px solid var(--border-2);
      background: var(--model-icon-bg);
    }
  }
  & > button:first-of-type {
    /* Styles for the first button */
    border-radius: 8px 0px 0px 8px;
    border-right: 1px solid var(--border-2);
  }

  & > button:last-of-type {
    border-radius: 0px 8px 8px 0px;
  }
`;
