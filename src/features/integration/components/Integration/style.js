import { Box, styled } from "@mui/material";

export const IntegartionWrapper = styled(Box)`
  margin-top: 96px;
  padding: 0 32px;
  height: ${(props) => {
    return props.modelset?.length ? "auto" : "calc(100vh - 200px)";
  }};

  & .header_inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    & .header_btn {
      display: flex;
      gap: 16px;
    }
  }
  & .tab_container {
    margin-top: 14px;
  }
  & .code_sdk_container {
    margin: 24px 0;
  }
  & .model_set_list {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  & .MuiAccordion-root {
    .MuiDivider-root {
      margin-top: 0;
    }
    &.Mui-expanded {
      & .MuiCollapse-root {
      }
    }
  }

  & .MuiAccordionSummary-root {
    padding: 16px 32px 16px 16px;

    &.Mui-expanded {
      /* border-bottom: 1px solid var(--border-1, #202939); */
    }
  }
  & .MuiAccordionSummary-content {
    display: flex;

    justify-content: space-between;
    &.Mui-expanded {
      margin: 0;
    }
    & .card_header {
      width: calc(100% - 40px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .content_left {
        display: flex;
        justify-content: flex-start;

        gap: 16px;
      }
      & .content_right {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 40px;
      }
      & .switch {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
      }
    }
  }
  @media (max-width: 1024px) {
    margin-top: 64px;
    padding: 0 24px;
    & .header_btn {
      gap: 16px;
    }
  }
  @media screen and (max-width: 740px) {
    & .header_inner,
    & .header_btn {
      flex-wrap: wrap;
      gap: 16px;
    }
  }
`;
